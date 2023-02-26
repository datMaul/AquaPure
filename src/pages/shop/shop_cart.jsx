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
            
            
            <table className="cart_items">
              
            <tr>
              <th className="item_image_header">PRODUCT</th>
              <th></th>
              <th className="quant_price_header">PRICE</th>
              <th className="quant_price_header">QUANTITY</th>
              <th></th>
            </tr>
            {
              
              cartItems.map(item => {
                 
                var notEmpty = true;
                
                
                console.log(item,"cart items loaded")        
                return(
                <>
                
                  {
                    productData.map(product => {
                      
                      if (product.productID === item.product_id) {
                        return(<>{notEmpty ? <>
                        
                          <tr>
                            <img className="item_image" src={water} alt="water"></img>
                            <td className="product_header" key={product}>{product.product_name}</td>
                            <td key={product}>£{product.product_price}</td>
                            <td className="quant_price_header" key={item}>{item.quantity}</td>
                            <td><button className="delete_button" onClick={() => deleteItem(item.id,notEmpty)}>X</button></td>
                          </tr>
                          {/* <img className="item_image" src={water} alt="water"></img> */}
                          </>
                           : ""}
                           </>)
                      }
                      
                    })
                  }
                  
                </>
                )
              })
              
            }
            {

            }
            
            
            </table>
        </div>
      </div>
    );
  }
  