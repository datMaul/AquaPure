import "./Shop_Style.css";
import water from "./shop_assets/water_bottle.PNG";
import logo from "./shop_assets/aqlogo.png";
import { Link } from "react-router-dom";
import axios from 'axios';
import {React, useCallback, useEffect, useState,useReducer} from 'react';



export default function Shop() {  

  // const product = {
  //   product_name: '',
  //   product_price: 0,
  // }
  const [productData, setData] = useState([]);
  const [itemData,setitemData] = useState([]);
  const productURL = 'http://localhost:8080/product'
  const itemURL = 'http://localhost:8080/item'

  
  const [item1,setvalue1] = useState(1);
  const [item2,setvalue2] = useState(1);
  const [item3,setvalue3] = useState(1);
  const [item4,setvalue4] = useState(1);
  const [item5,setvalue5] = useState(1);
  const [item6,setvalue6] = useState(1);
  const [item7,setvalue7] = useState(1);
  const [item8,setvalue8] = useState(1);




//load products from DB
  useEffect(() => {
    axios.get(itemURL).then(res=>{
      setitemData(res.data);
      console.log(res.data,"loaded quantity");
      
    }) 
    axios.get(productURL)
    .then(res => {
      console.log(res.data,"loaded products")
      setData(res.data)
    })
  },[])

  useEffect(()=>{
    updateStates(setvalue1)
    updateStates(setvalue2)
    updateStates(setvalue3)
    updateStates(setvalue4)
    updateStates(setvalue5)
    updateStates(setvalue6)
    updateStates(setvalue7)
    updateStates(setvalue8)
  },[productData])

  



  const updateStates = ()=>{
    console.log("updateStates")
    itemData.map(item=>{
      const increment = item.quantity+1
      if(item.id===1){
        console.log(item.quantity ,"product 1")
        setvalue1(increment)
      }
      if(item.id===2){
        console.log(item.quantity,"product 2")
        setvalue2(increment)
      }
      if(item.id===3){
        setvalue3(increment)
      }
      if(item.id===4){
        setvalue4(increment)
      }
      if(item.id===5){
        setvalue5(increment)
      }
      if(item.id===6){
        setvalue6(increment)
      }
      if(item.id===7){
        setvalue7(increment)
      }
      if(item.id===8){
        setvalue8(increment)
      }
    })
  }

  

  const postAdd = (productid,quantity) => {
    if(productid===1){
      setvalue1((increment)=>(increment+1))
    }
    if(productid===2){
      setvalue2((increment)=>(increment+1))
    }
    if(productid===3){
      setvalue3((increment)=>(increment+1))
    }
    if(productid===4){
      setvalue3((increment)=>(increment+1))
    }
    if(productid===5){
      setvalue5((increment)=>(increment+1))
    }
    if(productid===6){
      setvalue6((increment)=>(increment+1))
    }
    if(productid===7){
      setvalue7((increment)=>(increment+1))
    }
    if(productid===8){
      setvalue8((increment)=>(increment+1))
    }
    console.log(productid,"post add product id")
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
                  <button className="item_quick_add item_quick_add1" key={product.productID} type="button" name="add" onClick={()=>{postAdd(product.productID,item1);}}>Quick Add</button>
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

            <li className="item">
              {productData.map(product => {
                if(product.productID === 2){
                  return(
                  <>
                  <Link to="/item"><img alt="water" className="item_img" src={water}/></Link>
                  <p className="item_title" key={product.product_name}>{product.product_name}</p>
                  <p className="item_price" key={product.product_price}>£{product.product_price}</p>
                  <button className="item_quick_add item_quick_add1" key={product.productID} type="button" name="add" onClick={()=>{
                    postAdd(product.productID,item2);
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

            <li className="item">
              {productData.map(product => {
                if(product.productID === 3){
                  return(
                  <>
                  <Link to="/item"><img alt="water" className="item_img" src={water}/></Link>
                  <p className="item_title" key={product.product_name}>{product.product_name}</p>
                  <p className="item_price" key={product.product_price}>£{product.product_price}</p>
                  <button className="item_quick_add item_quick_add1" key={product.productID} type="button" name="add" onClick={()=>{
                    postAdd(product.productID,item3);
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

            <li className="item">
              {productData.map(product => {
                if(product.productID === 4){
                  return(
                  <>
                  <Link to="/item"><img alt="water" className="item_img" src={water}/></Link>
                  <p className="item_title" key={product.product_name}>{product.product_name}</p>
                  <p className="item_price" key={product.product_price}>£{product.product_price}</p>
                  <button className="item_quick_add item_quick_add1" key={product.productID} type="button" name="add" onClick={()=>{
                    postAdd(product.productID,item4);
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

            <li className="item">
              {productData.map(product => {
                if(product.productID === 5){
                  return(
                  <>
                  <Link to="/item"><img alt="water" className="item_img" src={water}/></Link>
                  <p className="item_title" key={product.product_name}>{product.product_name}</p>
                  <p className="item_price" key={product.product_price}>£{product.product_price}</p>
                  <button className="item_quick_add item_quick_add1" key={product.productID} type="button" name="add" onClick={()=>{
                    postAdd(product.productID,item5);
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
            <li className="item">
              {productData.map(product => {
                if(product.productID === 6){
                  return(
                  <>
                  <Link to="/item"><img alt="water" className="item_img" src={water}/></Link>
                  <p className="item_title" key={product.product_name}>{product.product_name}</p>
                  <p className="item_price" key={product.product_price}>£{product.product_price}</p>
                  <button className="item_quick_add item_quick_add1" key={product.productID} type="button" name="add" onClick={()=>{
                    postAdd(product.productID,item6);
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

            <li className="item">
              {productData.map(product => {
                if(product.productID === 7){
                  return(
                  <>
                  <Link to="/item"><img alt="water" className="item_img" src={water}/></Link>
                  <p className="item_title" key={product.product_name}>{product.product_name}</p>
                  <p className="item_price" key={product.product_price}>£{product.product_price}</p>
                  <button className="item_quick_add item_quick_add1" key={product.productID} type="button" name="add" onClick={()=>{
                    postAdd(product.productID,item7);
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

            <li className="item">
              {productData.map(product => {
                if(product.productID === 8){
                  return(
                  <>
                  <Link to="/item"><img alt="water" className="item_img" src={water}/></Link>
                  <p className="item_title" key={product.product_name}>{product.product_name}</p>
                  <p className="item_price" key={product.product_price}>£{product.product_price}</p>
                  <button className="item_quick_add item_quick_add1" key={product.productID} type="button" name="add" onClick={()=>{
                    postAdd(product.productID,item8);
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






