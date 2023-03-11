import "./item_frame_style.css";
import water from "./shop_assets/tshirtAP.png";
import { Link } from "react-router-dom";
import {React, useEffect, useState} from 'react';
import axios from 'axios';

export default function Tshirt() {


  const [productData, setData] = useState([]);
  const [cartItems,setcartItems] = useState([]);
  const [item,setvalue] = useState(1);
  const [user, setuser] = useState(null);
  const storeuserid = localStorage.getItem("user_ID")
  const itempageid = 9;


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
    setuser(storeuserid)
  }
  


  
  useEffect(()=>{
    updateStates(setvalue)
  },[productData])

  const updateStates = ()=>{
    cartItems.map(item=>{
      if(item.id === itempageid){
        const increment = item.quantity+1
        setvalue(increment)  
      }
    })
  }

  

  const postAdd = (productid,quantity) => {
    if(!user){
      return(window.location.href = "/accounts/login")
    }
    setvalue((increment)=>(increment+1))
    console.log(productid,"post add product id")
    axios.post('http://localhost:8080/item',{
      "id":productid,
      "userid":storeuserid,
      "product_id":productid,
      "quantity":quantity,
      }).then(res => {console.log(res.data)})
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
            if(product.productID === itempageid){
              return(
                <>
                  <h1 className="title" key={product}>{product.product_name}</h1>
                  <h1 className="price">£{product.product_price}</h1>
                  <button className="add" type="button" onClick={()=>postAdd(product.productID,item)}>Add to Cart</button>
                  <h2>Description</h2>
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
  