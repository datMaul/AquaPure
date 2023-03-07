import { Link } from "react-router-dom";
import {React, useEffect, useState} from 'react';
import axios from 'axios';
export default function Purchase_history() {

    const [productData, setData] = useState([]);
    const [history, sethistory] = useState([]);

    const loadHistory = () => {
        axios.get('http://localhost:8080/history').then(res=>{sethistory(res.data);console.log("histroy loaded")})
    }
    useEffect(()=>{
        loadHistory();
    },[])

  

    return(
      <div>
        <div>
          <h1>Your purchase History</h1>
          <table>
            <tr>
              <th></th>
              <th>ID</th>
              <th>Product ID</th>
            </tr>
            {
              history.map(purchase => {
                return(<tr>
                  <td></td>
                  <td>{purchase.purchase_id}</td>
                  <td>{purchase.product_id}</td>
                </tr>)
              })
            }
          </table>
            
        </div>
      </div>
    );
  }
  