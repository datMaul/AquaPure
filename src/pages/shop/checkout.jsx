import "./checkout.css";
import { Link, useSubmit } from "react-router-dom";
import { React, useEffect, useState } from 'react';
import axios from 'axios';
import water from './item_pages/shop_assets/water_bottle.PNG'
import Poppup from "./confirmation";
import tote from "./item_pages/shop_assets/AquaPureToteBag.png";
import notebook from "./item_pages/shop_assets/APNotebook.png"
import cup from "./item_pages/shop_assets/BambooCup.png"
import mug from "./item_pages/shop_assets/Beverage Mug.png"
import filter from "./item_pages/shop_assets/water filter.png"
import hoodie from "./item_pages/shop_assets/APHoodie.png"
import shirt from "./item_pages/shop_assets/tshirtAP.png"
import mask from "./item_pages/shop_assets/FaceMaskAP.png"
import cap from "./item_pages/shop_assets/APcap.png"
import flask from "./item_pages/shop_assets/metalFlask.png"
import pouch from "./item_pages/shop_assets/APPouch.png"
import phone from "./item_pages/shop_assets/PhoneCaseAP.png"
import backpack from "./item_pages/shop_assets/APBackpack.png"
import Sticker from "./item_pages/shop_assets/APSticker.png"


export default function Checkout() {
    const [cartItems, setcartItems] = useState([]);
    const [productData, setproductData] = useState([]);
    const [subtotal, setsubtotal] = useState(null);
    const [show, setshow] = useState(false);
    const [user, setuser] = useState([]);
    const storeuserid = localStorage.getItem("user_ID")
    const [date, setdate] = useState();
    const [Userpoints, setUserpoints] = useState([]);
    const [IsCheck,setcheck] = useState(false);
    const [subtotalpoints,setsubtotalpoints] = useState(null)
    const productimg = {
        "Recycled Sports Bottle": water,
        Backpack: backpack,
        "Phone Case": phone,
        "Laptop Pouch":pouch,
        "Metal Flask":flask,
        Cap:cap,
        "Face Mask Pack of 3":mask,
        "T-Shirt": shirt,
        Hoodie:hoodie,
        "Water Filter": filter,
        "Coffee/Tea Hot Beverage Mug": mug,
        "Bamboo Travel Cup":cup,
        "Bamboo Covered Note Book":notebook,
        "Recycled Tote Bag Large":tote,
        "AquaPure Sticker & Badge":Sticker,
    
      }
    

    useEffect(() => {
        loadItems();
        loadProducts();
        loadUserPoints();


    },[])

    useEffect(()=>{
        total();
        loadUser();
    },[cartItems,productData])

    const loadItems = () => {
        axios.get(`http://localhost:8080/item/user/${localStorage.getItem("user_ID")}`)
            .then(res => {
                setcartItems(res.data);
                console.log(res.data);
                
            })
            
    }

    
    const loadUser = () => {
        axios.get("http://localhost:8080/Sign_Up_log").then(res=>{setuser(res.data)})
    }

    const loadUserPoints = () => {
        axios.get("http://localhost:8080/points")
        .then(res=>{setUserpoints(res.data);loadUser();})
    }

    
    const loadProducts = () => {
        axios.get("http://localhost:8080/product")
            .then(res => {
                setproductData(res.data);
            })
    }
    const total = () => {
        var total_price=0;
        cartItems.map(item => {
            productData.map(product => {
                if(item.product_id === product.productID){
                    total_price += product.product_price*item.quantity
                    
                }
            setsubtotal(total_price)
            setsubtotalpoints(total_price)

            })
        })
        
    }
    const tempUserPoints = 100000;
    // 100000 points == 100 pounds
    // 100 - 18 = 98
    const [userpoints,setuserpoints] = useState(0)
    const apply_points = (userid) => {
        user.map(user => {
          Userpoints.map(score => {
            if(user.eMail === score.email){
              if(user.userId.toString() === userid){
                var points = score.score;
                // var points = tempUserPoints

                if(points>=100){
                  if(!IsCheck){
                    var discount = points/1000;
                    var newtotal = subtotal-discount;
                    console.log(score.score-(subtotalpoints*100),"new points after applied")
                    if(newtotal<0){
                        
                        setsubtotal(0)


                    }
                    else{
                        
                        setsubtotal(newtotal)

                    }
                  }
                  else if(IsCheck){
                    console.log("subtotal after applying points",subtotal)

                    total();
                  }
              }
              
            }
            else{
              setsubtotal(subtotal)
            }
            
          }})
      })
      }
    const checkhandler = () => {
        setcheck(!IsCheck);
        apply_points(storeuserid);
        loadUser();
    }


    const clearCart = async () => {
        await axios.delete(`http://localhost:8080/item/user/${storeuserid}`).then(res => {console.log(res.data,"delete from cart");loadItems();})
    }
    const purchase = () => {
        setconfirm(true);
        
        // var DOP = new Date()
        
        // var date = DOP.getUTCFullYear() + '-' + (DOP.getMonth()+1) + "-" + DOP.getDate() + ' ' + DOP.getHours() +':'+ DOP.getMinutes();
        // console.log(date)
        cartItems.map(item => {
            let id = Math.floor(Math.random(999)*111)
            axios.post('http://localhost:8080/history',{
                "purchase_id": id,
                "userid":storeuserid,
                "product_id":item.product_id,
                "quantity":item.quantity
            }).then(res=>{console.log(res.data,"items post to data base")})
            if(IsCheck){
                Userpoints.map(score=>{
                    user.map(user=>{
                        if(score.email === user.eMail){
                            if(user.userId.toString() === storeuserid){
                                const points = score.score;
                                const newPoints = points - (subtotalpoints*100);
                                if(newPoints<0){
                                    axios.put(`http://localhost:8080/points/findByEmail?email=`+user.eMail+'',{
                                    'score':0,
                                    }).then(res=>{console.log(res.data,newPoints)})
                                }
                                else{
                                    axios.put(`http://localhost:8080/points/findByEmail?email=`+user.eMail+'',{
                                    'score':newPoints,
                                    }).then(res=>{console.log(res.data,newPoints)})
                                }
                            }
                        }
                    })
                
                })
            }
        })
        clearCart();
    }

   
    const [confirm, setconfirm] = useState(false)
    
    return (
        <div>
            <div className="check_page">
                <div className="check_details">
                    <h1 className="check_title">AquaPure</h1>
                    <h2 className="check_subtitle">SHOP</h2>
                    <Poppup trigger={confirm} setTrigger={setconfirm}>
                        <div>
                            <h2 className="confirmation">Thank You for your Purchase</h2>
                            <Link to="/accounts"><button className="check-btn">Check order</button></Link>
                            <Link to='/shop'><button className="check-btn">Back to Shopping</button></Link>
                        </div>
                    </Poppup>
                    
                    <Link to='/cart'></Link>
                </div>
                <div className="check_cart">
                    <table className="checkout_table">
                        <tr>
                            <th className="checkout-image-header">{/*image*/}</th>
                            <th>Product Name</th>
                            <th className="checkout-price-header">Price</th>
                            <th>Quantity</th>
                        </tr>
                    {
                        cartItems.map(item => {
                            
                            return (
                                <>
                                    {
                                        productData.map(product => {
                                            if(product.productID === item.product_id){
                                                return (
                                                    <>
                                                    <tr>
                                                        <td><img className="checkout_product_img" src={productimg[product.product_name]} alt="water"></img></td>
                                                        <td><b className="checkout_name">{product.product_name}</b></td>
                                                        <td><p>£{product.product_price}</p></td>
                                                        <td>{item.quantity}</td>
                                                    </tr>
                                                    </>
                                                )
                                            }
                                        })
                                    }
                                </>
                            )
                        })
                    }
                    </table>
                    {
                        user.map(user => {
                        if(user.userId.toString() === storeuserid){
                            return(
                            Userpoints.map(score=>{
                            if(user.eMail === score.email){
                                return(<><h3>You have {score.score} points to your account</h3></>)
                            }
                            }))
                        }
                        })
                    }
                    <div className="discount">
                        <label htmlFor="checkbox">Apply Points Discount</label>
                        <input type="checkbox" checked={IsCheck} onChange={() => checkhandler()}></input>
                    </div>

                    <div className="subtotal">
                        <h3 className="total">Total</h3>
                        <h2 className="subtotal_num">£{subtotal}</h2>
                    </div>
                    {/* Requires npm react-popup installed */}
                    {/* <Popup trigger={<button>PURCHASE</button>}>
                        <div className="purchase">
                            <h1>Thank you for your purchase!</h1>
                        </div>
                    </Popup> */}
                    <button onClick={()=>{total();purchase();}}>PURCHASE</button>
                </div>
            </div>
        </div>
    )
}
