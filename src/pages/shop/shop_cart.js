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
                   return(<><h2>{item.product_id}</h2></>)
                })
            }
            
        </div>
      </div>
    );
  }
  