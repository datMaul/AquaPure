import "./item_frame_style.css";
import water from "./shop_assets/water_bottle.PNG";
import { Link } from "react-router-dom";
import {React, useEffect, useState} from 'react';
import axios from 'axios';

export default function Travel_cup() {

  const [productData, setData] = useState([]);
  const [cartItems,setcartItems] = useState([]);

  useEffect(()=>{
    loadProducts();
    loadItems();
  },[])

  const loadProducts = () => {
    axios.get('http://localhost:8080/product')
    .then(res => {
      console.log(res.data)
      setData(res.data)
    })
  }

  const loadItems = () => {
    axios.get('http://localhost:8080/item').then(res=>{setcartItems(res.data);console.log(res.data,"loaded cart items")})
  }



  const add = (productid) => {
    cartItems.map(item => {
      if(productid === item.product_id){
          let add = item.quantity+1
          axios.post('http://localhost:8080/item',{
            'id':productid,
            'user_id':123123,
            'product_id':productid,
            'quantity':add
          }).then(res => {console.log(res.data);loadItems();})
      }
    })
  }
  

    return(
      <div>
        <div className="page_item">

          <div className="back">
            <Link to="/shop"className="back_button">{"<"}</Link>
          </div>

          <center>
            <img alt="water" className="item_page_img" src={water}/>
          </center>
          
          <div className="item_page_text">
          {productData.map(product => {
            if(product.productID === 5){
              return(
                <>
                  <h1 className="title" key={product}>{product.product_name}</h1>
                  <h1 className="price">£{product.product_price}</h1>
                  <button className="add" type="button" onClick={()=>add(product.productID)}>Add to Cart</button>
                  <h3 className="desc">{product.product_desc}</h3>
                </>
              )
            }
            else{
              return("")
            }
            })}
            

            
          </div>

        </div>
      </div>
    );
  }
  