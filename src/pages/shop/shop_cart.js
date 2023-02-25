import { Link } from "react-router-dom";
import {React, useState, useEffect} from 'react';
import axios from 'axios';
import "./cartStyle.css"
import water from "./shop_assets/water_bottle.PNG"

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
            
            
              
            
            <table>
                <th className="item_n">PRODUCT</th>
                <th className="item_n"></th>
                <th>QUANTITY</th>
                <th>PRICE</th>
            {
              
              cartItems.map(item => {  
                const notEmpty = true;             
                return(
                <>
                
                  {
                    productData.map(product => {
                      
                      if (product.productID === item.product_id) {
                        return(<>{notEmpty ? <>
                        
                        <tr>
                          <td><img className="item_image" src={water} alt="water"></img></td>
                          <td className="item_n">{product.product_name}</td>
                          <td>{item.quantity}</td>
                          <td>£{product.product_price}</td>
                    

                        </tr>
                        {/* <button onClick={() => deleteItem(item.id,notEmpty)}>REMOVE</button> */}

                         
                        
                        </>
                           : ""}</>)
                      }
                    })
                  }
                  
                </>
                )
              })
              
            }
            </table>
            
            
        </div>
      </div>
    );
  }
  