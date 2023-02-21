import "./Shop_Style.css";
import water from "./shop_assets/water_bottle.PNG";
import logo from "./shop_assets/aqlogo.png";
import { Link } from "react-router-dom";
import axios from 'axios';
import {React, useCallback, useEffect, useState,useReducer} from 'react';
import { flushSync } from "react-dom";


export default function Shop() {  

  // const product = {
  //   product_name: '',
  //   product_price: 0,
  // }
  const [productData, setData] = useState([]);
  const [itemData,setitemData] = useState([]);
  const productURL = 'http://localhost:8080/product'
  const itemURL = 'http://localhost:8080/item'

  const [item1,addItem1] = useState(1);
  const [item2,addItem2] = useState(0);
  const [item3,addItem3] = useState(0);
  const [item4,addItem4] = useState(0);
  const [item5,addItem5] = useState(0);
  const [item6,addItem6] = useState(0);
  const [item7,addItem7] = useState(0);




//load products from DB
  useEffect(() => {
    axios.get(productURL)
    .then(res => {
      console.log(res.data,"loaded products")
      setData(res.data)
    })
  },[])
// load item quantity from
  useEffect(()=>{
    axios.get(itemURL).then(res=>{setitemData(res.data)})
    
  },[productData])



  const addItem=(add)=>{
    add((increment) => (increment+1));
  }
  



  const postAdd = (productid,quantity) => {
    axios.post(itemURL,{
      "id":productid,
      "user_id":123123,
      "product_id":productid,
      "quantity":quantity,
      }).then(res => {console.log(res.data)})

    
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
                  <button className="item_quick_add item_quick_add1" key={product.productID} type="button" name="add" onClick={()=>{
                    addItem(addItem1);
                    postAdd(product.productID,item1);
                    }}>Quick Add</button>
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






