import { Link } from "react-router-dom";
import {React, useEffect, useState} from 'react';
import axios from 'axios';
export default function PurchaseHistoryShop() {

    const [productData, setData] = useState([]);
    const [history, sethistory] = useState([]);

    const loadHistory = () => {
        axios.get(`http://localhost:8080/history/user/${localStorage.getItem("user_ID")}`).then(res=>{sethistory(res.data);console.log("histroy loaded")})
    }
    const loadProducts = () => {
      axios.get('http://localhost:8080/product').then(res=>{setData(res.data);console.log("loaded Data")})
    }
    useEffect(()=>{
        loadHistory();
        loadProducts();
    },[])

    return(
      <div>
        <div>
          <h1>Shop Purchase History</h1>
            <table>
              <th></th>
              <th>Product</th>
            {
              history.map(purchase => {
                return(
                  productData.map(product=>{
                    if(product.productID === purchase.product_id){
                      return(<tr>
                        <td></td>
                        <td>{product.product_name}</td>
                        <td>£{product.product_price}</td>
                      </tr>)
                    }
                  })
                )
              })
            }
            </table>
        </div>
      </div>
    );
  }
  