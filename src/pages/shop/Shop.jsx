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
            <li>
              <Link to='/shop/Shop_appearal'><button className="item">Clothes</button></Link>
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






