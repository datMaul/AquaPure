import "./checkout.css";
import { Link, useFetcher, useSubmit } from "react-router-dom";
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
    const [discount, setdiscount] = useState(0);
    const [cartItems, setcartItems] = useState([]);
    const [productData, setproductData] = useState([]);
    const [subtotal, setsubtotal] = useState(0);
    const [user, setuser] = useState([]);
    const storeuserid = localStorage.getItem("user_ID")
    const [Userpoints, setUserpoints] = useState([]);
    const [IsCheck,setcheck] = useState(false);
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
        loadUser();
        total();
        user.map(users=>{
            Userpoints.map(points=>{
                if(users.eMail===points.email){
                    if(users.userId.toString()===storeuserid){
                        setmax(points.score)
                        console.log(max)
                    }
                }
            })
        })
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
        .then(res=>{
            setUserpoints(res.data);
            loadUser();
        })
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
            })
        })
        setsubtotal(total_price)
    }


    const [max,setmax] = useState();
    const [point_amount, setamount] = useState(0);
    const [increment,setincrement] = useState(false)
    function apply(inc){
        if(subtotal>=0){
            setsubtotal(Math.round((subtotal-(0.1*inc))*100)/100)   
        }
    }
    const increment_point = () => {
        if(subtotal>0){
            setincrement(true)
            if(point_amount>=max){
                setamount(max)
                console.log("you reached max amount of points available")
            }
            else{
                setamount((amount)=>(amount+100))
            }
        }
    }

    const decrement_point = () => {
        setincrement(false)
        if(point_amount>0){
            setamount((decrement)=>(decrement-100))   
        }
        
    }

    useEffect(()=>{
        if(increment){
            apply(1);
        }
        else{
            apply(-1)
        }
    },[increment,point_amount])


    
    


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
                Userpoints.map(score=>{
                    user.map(users=>{
                        if(score.email === users.eMail){
                            if(users.userId+'' === storeuserid){
                                console.log("points afte purchase",point_amount)
                                const newPoints = score.score - point_amount
                                console.log(newPoints,"new points after purchase")
                                if(newPoints<0){
                                    axios.put(`http://localhost:8080/points/findByEmail?email=`+users.eMail+'',{
                                    'score':0,
                                    }).then(res=>{console.log(res.data,newPoints)})
                                }
                                else{
                                    axios.put(`http://localhost:8080/points/findByEmail?email=`+users.eMail+'',{
                                    'score':newPoints,
                                    }).then(res=>{console.log(res.data,newPoints,"SCORE UPDATED")})
                                }
                            }
                        }
                    })
                
                })
            }
        )
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
                        <input type="checkbox" checked={IsCheck} onChange={() => {setcheck(!IsCheck);}}></input>
                        
                        <button onClick={()=>(increment_point())}>+</button>
                        <h3>{point_amount}</h3>
                        <button onClick={()=>(decrement_point())}>-</button>
                    </div>

                    <div className="subtotal">
                        <h3 className="total">Total</h3>
                        <h2 className="subtotal_num">£{subtotal}</h2>
                    </div>
                
                    <button onClick={()=>{purchase();}}>PURCHASE</button>
                </div>
            </div>
        </div>
    )
}
