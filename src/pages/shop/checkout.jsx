import "./checkout.css";
import { Link, useSubmit } from "react-router-dom";
import { React, useEffect, useState } from 'react';
import axios from 'axios';



export default function Checkout() {
    const [cartItems, setcartItems] = useState([]);
    const [productData, setproductData] = useState([]);


    useEffect(() => {
        loadItems();
        loadProducts();
    }, [])

    const loadItems = () => {
        axios.get("http://localhost:8080/item")
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
    return (
        <div>
            <div className="check_page">
                <div className="check_details">
                    <h1 className="check_title">AquaPure</h1>
                    <h2 className="check_subtitle">SHOP</h2>
                    <form className="customer_details">
                        <p>CONTACT INFORMATION</p>
                        <lable className="details_submit">
                            <input className="shop_email" type={Text} name="Email" placeholder="Email" />
                            <input className="shop_number" type={Number} name="number" placeholder="Phone Number" />
                        </lable>

                    </form>
                </div>
                <div className="check_cart">
                    <h1>cart</h1>
                    {
                        cartItems.map(item => {
                            return (
                                <>
                                    {
                                        productData.map(product => {
                                            if(product.productID === item.product_id){
                                                return (
                                                    <>
                                                        {product.product_name}
                                                    </>
                                                )
                                            }
                                            
                                        })
                                    }
                                </>
                            )
                        })
                    }
                </div>

            </div>

        </div>
    )
}
