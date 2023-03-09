import "./checkout.css";
import { Link, useSubmit } from "react-router-dom";
import { React, useEffect, useState } from 'react';
import axios from 'axios';
import water from './item_pages/shop_assets/water_bottle.PNG'

export default function Checkout() {
    const [cartItems, setcartItems] = useState([]);
    const [productData, setproductData] = useState([]);
    const [subtotal, setsubtotal] = useState(0);
    const [show, setshow] = useState(false);
    const [user, setuser] = useState(null);
    const storeuserid = localStorage.getItem("user_ID")
    const [date, setdate] = useState();

    useEffect(() => {
        loadItems();
        loadProducts();
    }, [])

    useEffect(()=>{
        total();
    },[cartItems])

    

    const loadItems = () => {
        axios.get(`http://localhost:8080/item/user/${localStorage.getItem("user_ID")}`)
            .then(res => {
                setcartItems(res.data)
                console.log(res.data, "Cart Items Loaded")
            })
    }
    const loadProducts = () => {
        axios.get("http://localhost:8080/product")
            .then(res => {
                setproductData(res.data);
                console.log(res.data, "product data loaded")
            })
    }
    const total = () => {
        var total_price = 0;
        cartItems.map(item => {
            productData.map(product => {
                if(item.product_id === product.productID){
                    total_price += product.product_price*item.quantity
                    console.log("calc total")
                }
            })
        })
        setsubtotal(total_price)
    }

    const purchase = () => {
        var DOP = new Date()
        
        var date = DOP.getUTCFullYear() + '-' + (DOP.getMonth()+1) + "-" + DOP.getDate() + ' ' + DOP.getHours() +':'+ DOP.getMinutes();
        console.log(date)
        cartItems.map(item => {
            let id = Math.floor(Math.random()*111)
            console.log(id)
            axios.post('http://localhost:8080/history',{
                "purchase_id": id,
                "userid":storeuserid,
                "product_id":item.product_id
            }).then(res=>{console.log(res.data,"items post to data base")})
            axios.delete(`http://localhost:8080/item/${item.product_id}`).then(res => {console.log(res.data,"delete from cart");loadItems();})
            
        })
    }

   
    
    return (
        <div>
            <div className="check_page">
                <div className="check_details">
                    <h1 className="check_title">AquaPure</h1>
                    <h2 className="check_subtitle">SHOP</h2>
                    <form className="customer_details">
                        <p>CONTACT INFORMATION</p>
                        <lable className="details_submit">
                            <input className="shop_email" type={"text"} name="Email" placeholder="Email" />
                            <input className="shop_number" type={"number"} name="number" placeholder="Phone Number" />
                        </lable>
                    </form>
                    <Link to='/cart'></Link>
                </div>
                <div className="check_cart">
                    <table className="checkout_table">
                        <tr>
                            <th className="checkout-image-header">{/*image*/}</th>
                            <th>{/*Product Name*/}</th>
                            <th className="checkout-price-header">{/*Price*/}</th>
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
                                                        <td><img className="checkout_product_img" src={water} alt="water"></img></td>
                                                        <td><b className="checkout_name">{product.product_name}</b></td>
                                                        <td><p>£{product.product_price}</p></td>
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
                    <div className="subtotal">
                        <h3 className="total">Total</h3>
                        <h2 className="subtotal_num">{subtotal}</h2>
                    </div>
                    {/* Requires npm react-popup installed */}
                    {/* <Popup trigger={<button>PURCHASE</button>}>
                        <div className="purchase">
                            <h1>Thank you for your purchase!</h1>
                        </div>
                    </Popup> */}
                    <Link to='/cart'><button onClick={()=>purchase()}>PURCHASE</button></Link>
                </div>
            </div>
        </div>
    )
}
