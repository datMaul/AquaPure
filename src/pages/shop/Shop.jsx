import "./Shop_Style.css";
import water from "./item_pages/shop_assets/water_bottle.PNG";
import logo from "./item_pages/shop_assets/APSticker.png"
import { Link } from "react-router-dom";
import axios from 'axios';
import {React, useCallback, useEffect, useState,useReducer} from 'react';
import placeholder from './item_pages/shop_assets/placeholder.jpg';
import ShopNotification from "./ShopNotification";
import clothes from "./item_pages/shop_assets/shirticon.png";
import drinkware from "./item_pages/shop_assets/cupicon.png"

export default function Shop() {  
  const storeuserid = localStorage.getItem("user_ID");
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
  const [check, setcheck] = useState("Add to cart");

  useEffect(()=>{
    loadUser();
    loadCart();

  },[])

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
  
  return (
    <div className="wall" key={"shoppage"}>    
      
      <div className="page" >
      
        <h1 className="shop_title">AquaShop</h1>
        <nav>
          <ul className="item_list">
            <li className="item">
              <Link to='/shop/Shop_appearal'><img className="item_img" src={clothes} alt="clothes"></img></Link>
              <p className="catagory-txt">CLOTHES</p>
            </li>
            <li className="item">
              <Link to='/shop/Shop_drinks'><img className="item_img" src={drinkware} alt="drinks"></img></Link>
              <p className="catagory-txt">DRINKWARE</p>
            </li>
            <li>
              
            </li>
          </ul>
        </nav>
        
        <ShopNotification trigger={showpopup} setTrigger={setshowpopup}>
                <center className="popupShop" onClick={()=>{setshowpopup(false)}}>
                  <h3>+1 Item to Cart</h3>
                </center>
        </ShopNotification>
        
        
        
      </div>
    </div>
  );
}






