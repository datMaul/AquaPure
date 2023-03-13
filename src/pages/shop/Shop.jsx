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
  const storeuserid = localStorage.getItem("user_ID");
  useEffect(()=>{
    loadUser();
    loadCart();

  },[])
  const [itemData,setitemData] = useState([]);
  const [user, setuser] = useState({
    eMail: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    password: "",
    addressLine2: "",
    addressLine1: "",
    addressTC: "",
    addressPostcode: "",
    doB: "",
    userId: ""
  });
  const [productData, setData] = useState([]);
  const productURL = 'http://localhost:8080/product'
  const [showpopup, setshowpopup] = useState(false)
  const [add_text,setadd_text] = useState("Add to cart")


  
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

 
  const loadUser = () => {
    axios.get(`http://localhost:8080/User/${localStorage.getItem("user_ID")}`)
    .then(res=>{
      setuser(res.data);
      console.log(res.data);
    })
  }
  
  const loadCart = () => {
    axios.get(`http://localhost:8080/item/user/${localStorage.getItem("user_ID")}`)
    .then(res=>{
      setitemData(res.data);
      console.log(res.data,"loaded in LOADCART()");
      
    }) 
  }
  
//load products from DB
  useEffect(() => {
    axios.get(productURL)
    .then(res => {
      setData(res.data)
    })
    
  },[])

  useEffect(()=>{
    updateStates();
  },[productData])

  
  

  

  const updateStates = ()=>{
      // console.log("quantity",item.quantity,"product id",item.product_id,"for user id",item.userid)
      itemData.map(item=>{
        if(item.userid+'' === storeuserid){
          const increment = item.quantity+1
          if(item.product_id===1){
            setvalue1(increment)
          }
          if(item.product_id===2){
            setvalue2(increment)
          }
          if(item.product_id===3){
            setvalue3(increment)
          }
          if(item.product_id===4){
            setvalue4(increment)
          }
          if(item.product_id===5){
            setvalue5(increment)
          }
          if(item.product_id===6){
            setvalue6(increment)
          }
          if(item.product_id===7){
            setvalue7(increment)
          }
          if(item.product_id===8){
            setvalue8(increment)
          }
          if(item.product_id===9){
            setvalue9(increment)
          }
          if(item.product_id===10){
            setvalue10(increment)
          }
          if(item.product_id===11){
            setvalue11(increment)
          }
          if(item.product_id===12){
            setvalue12(increment)
          }
          if(item.product_id===13){
            setvalue13(increment)
          }
          if(item.product_id===14){
            setvalue1(increment)
          }
          if(item.product_id===15){
            setvalue15(increment)
          }
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
    setshowpopup(true);
    setTimeout(()=>{
      setshowpopup(false)
    },2500)
//increment item already in cart
    itemData.map(item=>{
      if(productid === item.product_id){
        console.log("running itemdata map incrementation")
        axios.put(`http://localhost:8080/item/${item.id}`,{
          "quantity":quantity
        }).then(res=>{console.log("incremented",res.data);loadCart();})
      }
    })
    if(quantity===1){
      let id = Math.floor(Math.random(999)*100);
      console.log(id)
      axios.post(`http://localhost:8080/item`,{
      "id":id,
      "userid": storeuserid,
      "product_id":productid,
      "quantity":quantity
    }).then(res=>{console.log(res.data);loadCart();})
    }
  }

  
    
  return (
    <div className="wall" key={"shoppage"}>    
      
      <div className="page" >
      
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
                  <p className="item_title" key={"mugname"}>{product.product_name}</p>
                  <p className="item_price" key={"mugprice"}>£{product.product_price}</p>
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
                  <p className="item_title" key={"filter"}>{product.product_name}</p>
                  <p className="item_price" key={"filterprice"}>£{product.product_price}</p>
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
                  <p className="item_title" key={"hood"}>{product.product_name}</p>
                  <p className="item_price" key={"hoodie"}>£{product.product_price}</p>
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
                  <p className="item_title" key={"shirtname"}>{product.product_name}</p>
                  <p className="item_price" key={"shirtprice"}>£{product.product_price}</p>
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
                  <p className="item_title" key={"maskname"}>{product.product_name}</p>
                  <p className="item_price" key={"maskprice"}>£{product.product_price}</p>
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
                  <p className="item_title" key={"capname"}>{product.product_name}</p>
                  <p className="item_price" key={"capprice"}>£{product.product_price}</p>
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
                  <p className="item_title" key={"flaskname"}>{product.product_name}</p>
                  <p className="item_price" key={"flaskprice"}>£{product.product_price}</p>
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
                  <p className="item_title" key={"pouchname"}>{product.product_name}</p>
                  <p className="item_price" key={"pouchprice"}>£{product.product_price}</p>
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
                  <p className="item_title" key={"phonename"}>{product.product_name}</p>
                  <p className="item_price" key={"phoneprice"}>£{product.product_price}</p>
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
                  <p className="item_title" key={"backpackname"}>{product.product_name}</p>
                  <p className="item_price" key={"backpackprice"}>£{product.product_price}</p>
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
                <center className="popupShop" onClick={()=>{setshowpopup(false)}}>
                  <h3>+1</h3>
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






