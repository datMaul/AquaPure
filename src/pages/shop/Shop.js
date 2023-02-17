import "./Shop_Style.css";
import water from "./shop_assets/water_bottle.PNG";
import logo from "./shop_assets/aqlogo.png";
import { Link } from "react-router-dom";
import axios from 'axios';
import {React, useEffect, useState} from 'react';
export default function Shop() {  

  // const product = {
  //   product_name: '',
  //   product_price: 0,
  // }
  const [productData, setData] = useState([]);
 
  const base = 'http://localhost:8080/product'
  


  useEffect(() => {
    axios.get(base)
    .then(res => {
      console.log(res.data)
      setData(res.data)
    })
  },[])

  const handleAdd = (productid) => {
                    
    axios.post('http://localhost:8080/item',{
      "id":123123,
      "user_id":123123,
      "product_id":productid,
      "quantity":1,
    }
    ).then(res => {
      console.log(res.data)
    })

    
  }

  return (
    <div>    
      <div className="page">
        {/* <h1 className="shop_title"> <img className="logo" src={logo}></img>Shop</h1> */}
        
        <nav>
          <ul className="item_list">
            <li className="item">
              {productData.map(product => {
                if(product.productID === 1){
                  return(
                    <>
                    <Link to="/item"><img alt="water" className="item_img" src={water}/></Link>
                    <p className="item_title" key={product.product_name}>{product.product_name}</p>
                    <p className="item_price" key={product.product_price}>£{product.product_price}</p>
                    <button className="item_quick_add item_quick_add1" key={product.productID} type="button" onClick={() => handleAdd(product.productID)}>Quick Add</button>
                    </>
                  )
                }
                else{
                  return("")
                }
                }
              )
              }
            </li>
          </ul>
        </nav>
      </div>
      {/**
               * -Eco Based 650 ml Sports Bottle
               * -Recycled Tote Bag
               * -Bamboo Note book
               * -AquaPure sticker/badge
               * -Recycled Travel Cup
               * -Mug
               * -Water filter
               * -Hoodie
               * -T-Shirt
               * -Face Masks
               * -Cap
               * -Metal Bottle/flask
               * -Laptop pouch
               * -eco friendly phone case
               * -Backpack
               */}
    </div>

    
  );
}






