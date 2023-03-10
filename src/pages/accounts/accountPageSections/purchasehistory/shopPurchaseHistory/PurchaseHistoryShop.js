import "./PurchaseHistoryShop.css";
import {React, useEffect, useState} from 'react';
import axios from 'axios';



export default function PurchaseHistoryShop() {

  const [productData, setData] = useState([]);
  const [history, sethistory] = useState([]);

  const loadHistory = () => {
      axios.get('http://localhost:8080/history').then(res=>{sethistory(res.data);console.log("histroy loaded")})
  }
  useEffect(()=>{
      loadHistory();
  },[])

  return (
    <div>
        <div>
            {history.map(purchase => {
                return(
                <>
                <p>{purchase.purchase_id} {purchase.product_id}</p>
                </>)
            })}
        </div>
      </div>
  );
}
