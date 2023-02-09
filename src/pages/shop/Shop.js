import "./Shop_Style.css";
import water from "./shop_assets/water_bottle.PNG";
import logo from "./shop_assets/aqlogo.png";
import { Await, Link } from "react-router-dom";
import axios from 'axios';
import {React, useEffect, useState} from 'react';





 
export default function Shop() {  

  // const product = {
  //   product_name: '',
  //   product_price: 0,
  // }
  const [productData, setData] = useState([]);

  
  const fetchData = async () => {
    await axios.get('http://localhost:8080/product')
    .then(res => setData(res.data))
};
  fetchData();
  return (
    
    <div>    
      <div className="page">
        
        
        <h1 className="shop_title"> <img className="logo" src={logo}></img>Shop</h1>
        {/**score points */}
        <nav>
          <ul className="item_list">
            
            <li className="item">
              <Link to="/item"><img alt="water" className="item_img" src={water}/></Link>
              {productData.map(product => {
                if(product.productID === 1){
                  return(
                    <>
                    <p className="item_title" key={product}>{product.product_name}</p>
                    <p className="item_price" key={product}>£{product.product_price}</p>
                    </>
                    )
                  }
                  else{
                    return(
                      <>
                      <p className="item_title" key={product}>{product.product_name}</p>
                      <p className="item_price">out of stock</p>
                      </>
                    )
                  }
                  })}
              {/* {productData.map(product => {return <p className="item_price" key={product}>£{product.product_price}</p>})} */}
          
              <button className="item_quick_add item_quick_add1" type="button">Quick Add</button>
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






