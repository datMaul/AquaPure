import { Link } from "react-router-dom";
import {React, useState, useEffect} from 'react';
import axios from 'axios';
import "./cartStyle.css"

export default function Shop_cart() {

    const [cartItems, setcartItems] = useState([]);
    const [productData, setData] = useState([]);
    useEffect(() => {
      loadItems();
      loadProducts();
    },[]);
    
    const loadProducts = () => {
      axios.get('http://localhost:8080/product')
      .then(res => {
        setData(res.data)
      })
    }
    const loadItems = () => {
      axios.get('http://localhost:8080/item')
      .then(res => {
        setcartItems(res.data)
      })
      
    }
    const deleteItem = async (id,notEmpty) => {
      await axios.delete(`http://localhost:8080/item/${id}`).then(console.log("deleted item"))
      notEmpty=false;
      console.log(notEmpty)
      loadItems();
    }
    
    return(
      <div>
        <div className="cart_page">
            <h1 className="cart_title">YOUR CART</h1>
            <ul className="cart_list">
            {
              
              cartItems.map(item => {  
                const notEmpty = true;             
                return(
                <>
                  {
                    productData.map(product => {
                      
                      if (product.productID === item.product_id) {
                        return(<>{notEmpty ? <li className="cart_item">
                          <p>{product.product_name}</p>
                          <text>Quantity={item.quantity}</text>
                          <button onClick={() => deleteItem(item.id,notEmpty)}>delete</button>
                          </li> : ""}</>)
                      } 
                                       
                    })
                  }
                  
                </>
                )
              })
              
            }
            </ul>
            
            
        </div>
      </div>
    );
  }
  