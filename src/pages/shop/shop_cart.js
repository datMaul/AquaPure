import { Link } from "react-router-dom";
import {React, useState, useEffect} from 'react';
import axios from 'axios';

export default function Shop_cart() {

    const [cartItems, setcartItems] = useState([]);
    const [productData, setData] = useState([]);
    useEffect(() => {
      axios.get('http://localhost:8080/item')
        .then(res => {
            setcartItems(res.data)
      })
      axios.get('http://localhost:8080/product')
        .then(res => {
            setData(res.data)
        })
    },[]);


    


    return(
      <div>
        <div>
            <h1></h1>
            {
              cartItems.map(item => {               
                return(
                <>
                  {
                    productData.map(product => {
                      const deleteItem = (id) => {
                        axios.delete(`http://localhost:8080/item/${id}`).then(console.log("deleted item"))
                        return(<><h1>empty</h1></>)
                      }

                      const loadItems = () => {
                        return(<><h2>{product.product_name} Quantity={item.quantity} <button onClick={() => deleteItem(item.id)}>delete</button></h2></>)
                      }
                  
                      
                      // if(product.productID === item.product_id){
                      //   return(
                      //     <><div>{loadItems()}</div></>
                      //   )
                      // }
                      if (product.productID === item.product_id) {
                        return(<><div>{loadItems()}</div></>)
                      } 
                                       
                    })
                  }
                  
                </>
                )
              })
              
            }
            
            
        </div>
      </div>
    );
  }
  