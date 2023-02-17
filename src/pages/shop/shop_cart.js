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
            <h1>Your cart contains:</h1>
            {
              cartItems.map(item => { 
                const deleteItem = (id) => {
                  axios.delete('/item',{
                    "id":item.id,
                  }).then(console.log("deleted item"))

                }


                return(
                <>
                  {
                    productData.map(product => {
                      if(product.productID === item.product_id){
                        return(
                          <>
                          <h2>{product.product_name} Quantity={item.quantity} <button onClick={deleteItem}>delete</button> </h2>
                          </>
                        )
                      }
                      else{return("")}
                      
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
  