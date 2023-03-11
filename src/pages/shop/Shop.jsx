import "./Shop_Style.css";
import water from "./item_pages/shop_assets/water_bottle.PNG";
import logo from "./item_pages/shop_assets/APSticker.png"
import { Link } from "react-router-dom";
import axios from 'axios';
import {React, useCallback, useEffect, useState,useReducer} from 'react';
import placeholder from './item_pages/shop_assets/placeholder.jpg';
import ShopNotification from "./ShopNotification";
import wall from "./item_pages/shop_assets/shop_background.jpg";
import tote from "./item_pages/shop_assets/AquaPureToteBag.png";
import notebook from "./item_pages/shop_assets/APNotebook.png"
import cup from "./item_pages/shop_assets/BambooCup.png"
import mug from "./item_pages/shop_assets/Beverage Mug.png"
import filter from "./item_pages/shop_assets/water filter.png"
import hoodie from "./item_pages/shop_assets/APHoodie.png"
import shirt from "./item_pages/shop_assets/tshirtAP.png"
import mask from "./item_pages/shop_assets/FaceMaskAP.png"
import cap from "./item_pages/shop_assets/APcap.png"
import flask from "./item_pages/shop_assets/metalFlask.png"
import pouch from "./item_pages/shop_assets/APPouch.png"
import phone from "./item_pages/shop_assets/PhoneCaseAP.png"
import backpack from "./item_pages/shop_assets/APBackpack.png"




export default function Shop() {  

  // const product = {
  //   product_name: '',
  //   product_price: 0,
  // }
  const [productData, setData] = useState([]);
  const [itemData,setitemData] = useState([]);
  const productURL = 'http://localhost:8080/product'
  const itemURL = 'http://localhost:8080/item'
  const [showpopup, setshowpopup] = useState(false)

  
  const [item1,setvalue1] = useState(1);
  const [item2,setvalue2] = useState(1);
  const [item3,setvalue3] = useState(1);
  const [item4,setvalue4] = useState(1);
  const [item5,setvalue5] = useState(1);
  const [item6,setvalue6] = useState(1);
  const [item7,setvalue7] = useState(1);
  const [item8,setvalue8] = useState(1);
  const [item9,setvalue9] = useState(1);
  const [item10,setvalue10] = useState(1);
  const [item11,setvalue11] = useState(1);
  const [item12,setvalue12] = useState(1);
  const [item13,setvalue13] = useState(1);
  const [item14,setvalue14] = useState(1);
  const [item15,setvalue15] = useState(1);
  const [check, setcheck] = useState("Add to cart");
  const [user, setuser] = useState(null);
  const storeuserid = localStorage.getItem("user_ID");

  useEffect(()=>{
    loadUser();
    setuser(storeuserid);
  },[])
  const loadUser = () => {
    axios.get(`http://localhost:8080/User/${localStorage.getItem("user_ID")}`).then(res=>{setuser(res.data);})
  }
//load products from DB
  useEffect(() => {
    axios.get(itemURL).then(res=>{
      setitemData(res.data);
      
    }) 
    axios.get(productURL)
    .then(res => {
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
    updateStates(setvalue9)
    updateStates(setvalue10)
    updateStates(setvalue11)
    updateStates(setvalue12)
    updateStates(setvalue13)
    updateStates(setvalue14)
    updateStates(setvalue15)
  },[productData])

  const updateStates = ()=>{
    itemData.map(item=>{
      const increment = item.quantity+1
      if(item.id===1){
        setvalue1(increment)
      }
      if(item.id===2){
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
      if(item.id===9){
        setvalue9(increment)
      }
      if(item.id===10){
        setvalue10(increment)
      }
      if(item.id===11){
        setvalue11(increment)
      }
      if(item.id===12){
        setvalue12(increment)
      }
      if(item.id===13){
        setvalue13(increment)
      }
      if(item.id===14){
        setvalue14(increment)
      }
      if(item.id===15){
        setvalue15(increment)
      }
    })
  }

  

  const postAdd = (productid,quantity) => {
    if(!user){
      return(window.location.href = "/accounts/login")
    }
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
      setvalue4((increment)=>(increment+1))
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
    if(productid===9){
      setvalue9((increment)=>(increment+1))
    }
    if(productid===10){
      setvalue10((increment)=>(increment+1))
    }
    if(productid===11){
      setvalue11((increment)=>(increment+1))
    }
    if(productid===12){
      setvalue12((increment)=>(increment+1))
    }
    if(productid===13){
      setvalue13((increment)=>(increment+1))
    }
    if(productid===14){
      setvalue14((increment)=>(increment+1))
    }
    if(productid===15){
      setvalue15((increment)=>(increment+1))
    }
    console.log(productid,"post add product id")
    axios.post(itemURL,{
      "id":productid,
      "userid":storeuserid,
      "product_id":productid,
      "quantity":quantity,
      }).then(res => {console.log(res.data);setshowpopup(true);addOnClick()})
    }
    const [add_text,setadd_text] = useState("Add to cart")
    const addOnClick = () => {
    //   setadd_text("🗸")
    //   resolve();
    // }
    // const resolve = () => {
    //   setTimeout(()=>{
    //     setadd_text("Add to cart")
    //   },1200)
    }

    
  return (
    <div className="wall">    
      
      <div className="page">
      
        <h1 className="shop_title">AquaShop</h1>
        
        <nav>
          <ul className="item_list">
            <li className="item">
              {productData.map(product => {
                if(product.productID === 1){ 
                  return(
                  <>
                  <Link to="/water_bottle"><img alt="water" className="item_img" src={water}/></Link>
                  <p className="item_title" key={"watername"}>{product.product_name}</p>
                  <p className="item_price" key={"waterprice"}>£{product.product_price}</p>
                  <button className="item_quick_add item_quick_add1" key={product.productID} type="button" name="add" onClick={()=>{postAdd(product.productID,item1);}}>{add_text}</button>
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
                  <Link to="/tote_bag"><img alt="water" className="item_img" src={tote}/></Link>
                  <p className="item_title" key={"bagname"}>{product.product_name}</p>
                  <p className="item_price" key={"bagprice"}>£{product.product_price}</p>
                  <button className="item_quick_add item_quick_add1" key={product.productID} type="button" name="add" onClick={()=>{
                    postAdd(product.productID,item2);
                    }}>{add_text}</button>
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
                  <Link to="/bamboo"><img alt="water" className="item_img" src={notebook}/></Link>
                  <p className="item_title" key={"bambooname"}>{product.product_name}</p>
                  <p className="item_price" key={"bambooprice"}>£{product.product_price}</p>
                  <button className="item_quick_add item_quick_add1" key={product.productID} type="button" name="add" onClick={()=>{
                    postAdd(product.productID,item3);
                    }}>{add_text}</button>
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
                  <Link to="/sticker"><img alt="water" className="item_img" src={logo}/></Link>
                  <p className="item_title" key={"apstickername"}>{product.product_name}</p>
                  <p className="item_price" key={"apprice"}>£{product.product_price}</p>
                  <button className="item_quick_add item_quick_add1" key={product.productID} type="button" name="add" onClick={()=>{
                    postAdd(product.productID,item4);
                    }}>{add_text}</button>
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
                  <Link to="/travel_cup"><img alt="water" className="item_img" src={cup}/></Link>
                  <p className="item_title" key={"travelcupname"}>{product.product_name}</p>
                  <p className="item_price" key={"travelcupprice"}>£{product.product_price}</p>
                  <button className="item_quick_add item_quick_add1" key={product.productID} type="button" name="add" onClick={()=>{
                    postAdd(product.productID,item5);
                    }}>{add_text}</button>
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
                  <Link to="/beverage_mug"><img alt="water" className="item_img" src={mug}/></Link>
                  <p className="item_title" key={product.product_name}>{product.product_name}</p>
                  <p className="item_price" key={product.product_price}>£{product.product_price}</p>
                  <button className="item_quick_add item_quick_add1" key={product.productID} type="button" name="add" onClick={()=>{
                    postAdd(product.productID,item6);
                    }}>{add_text}</button>
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
                  <Link to="/water_filter"><img alt="water" className="item_img" src={filter}/></Link>
                  <p className="item_title" key={product.product_name}>{product.product_name}</p>
                  <p className="item_price" key={product.product_price}>£{product.product_price}</p>
                  <button className="item_quick_add item_quick_add1" key={product.productID} type="button" name="add" onClick={()=>{
                    postAdd(product.productID,item7);
                    }}>{add_text}</button>
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
                  <Link to="/hoodie"><img alt="water" className="item_img" src={hoodie}/></Link>
                  <p className="item_title" key={product.product_name}>{product.product_name}</p>
                  <p className="item_price" key={product.product_price}>£{product.product_price}</p>
                  <button className="item_quick_add item_quick_add1" key={product.productID} type="button" name="add" onClick={()=>{
                    postAdd(product.productID,item8);
                    }}>{add_text}</button>
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
                if(product.productID === 9){
                  return(
                  <>
                  <Link to="/T-shirt"><img alt="water" className="item_img" src={shirt}/></Link>
                  <p className="item_title" key={product.product_name}>{product.product_name}</p>
                  <p className="item_price" key={product.product_price}>£{product.product_price}</p>
                  <button className="item_quick_add item_quick_add1" key={product.productID} type="button" name="add" onClick={()=>{
                    postAdd(product.productID,item9);
                    }}>{add_text}</button>
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
                if(product.productID === 10){
                  return(
                  <>
                  <Link to="/mask"><img alt="water" className="item_img" src={mask}/></Link>
                  <p className="item_title" key={product.product_name}>{product.product_name}</p>
                  <p className="item_price" key={product.product_price}>£{product.product_price}</p>
                  <button className="item_quick_add item_quick_add1" key={product.productID} type="button" name="add" onClick={()=>{
                    postAdd(product.productID,item10);
                    }}>{add_text}</button>
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
                if(product.productID === 11){
                  return(
                  <>
                  <Link to="/cap"><img alt="water" className="item_img" src={cap}/></Link>
                  <p className="item_title" key={product.product_name}>{product.product_name}</p>
                  <p className="item_price" key={product.product_price}>£{product.product_price}</p>
                  <button className="item_quick_add item_quick_add1" key={product.productID} type="button" name="add" onClick={()=>{
                    postAdd(product.productID,item11);
                    }}>{add_text}</button>
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
                if(product.productID === 12){
                  return(
                  <>
                  <Link to="/flask"><img alt="water" className="item_img" src={flask}/></Link>
                  <p className="item_title" key={product.product_name}>{product.product_name}</p>
                  <p className="item_price" key={""}>£{product.product_price}</p>
                  <button className="item_quick_add item_quick_add1" key={product.productID} type="button" name="add" onClick={()=>{
                    postAdd(product.productID,item12);
                    }}>{add_text}</button>
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
                if(product.productID === 13){
                  return(
                  <>
                  <Link to="/pouch"><img alt="water" className="item_img" src={pouch}/></Link>
                  <p className="item_title" key={product.product_name}>{product.product_name}</p>
                  <p className="item_price" key={product.product_price}>£{product.product_price}</p>
                  <button className="item_quick_add item_quick_add1" key={product.productID} type="button" name="add" onClick={()=>{
                    postAdd(product.productID,item13);
                    }}>{add_text}</button>
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
                if(product.productID === 14){
                  return(
                  <>
                  <Link to="/phone_case"><img alt="water" className="item_img" src={phone}/></Link>
                  <p className="item_title" key={product.product_name}>{product.product_name}</p>
                  <p className="item_price" key={product.product_price}>£{product.product_price}</p>
                  <button className="item_quick_add item_quick_add1" key={product.productID} type="button" name="add" onClick={()=>{
                    postAdd(product.productID,item14);
                    }}>{add_text}</button>
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
                if(product.productID === 15){
                  return(
                  <>
                  <Link to="/backpack"><img alt="water" className="item_img" src={backpack}/></Link>
                  <p className="item_title" key={product.product_name}>{product.product_name}</p>
                  <p className="item_price" key={product.product_price}>£{product.product_price}</p>
                  <button className="item_quick_add item_quick_add1" key={product.productID} type="button" name="add" onClick={()=>{
                    postAdd(product.productID,item15);
                    }}>{add_text}</button>
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
        
        <ShopNotification trigger={showpopup} setTrigger={setshowpopup}>
                <center className="popupShop">
                <button className="close-btn" onClick={()=>{setshowpopup(false)}}>X</button>
                  <h3>Item added to shopping cart!</h3>
                </center>
        </ShopNotification>
        
        
        
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






