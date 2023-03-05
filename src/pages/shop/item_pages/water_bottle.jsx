import "./item_frame_style.css";
import water from "./shop_assets/water_bottle.PNG";
import { Link } from "react-router-dom";
import {React, useEffect, useState} from 'react';
import axios from 'axios';

export default function Water_bottle() {


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
  const [item1,setvalue1] = useState(1);
  const [item2,setvalue2] = useState(1);
  const [item3,setvalue3] = useState(1);
  const [item4,setvalue4] = useState(1);
  const [item5,setvalue5] = useState(1);
  const [item6,setvalue6] = useState(1);
  const [item7,setvalue7] = useState(1);
  const [item8,setvalue8] = useState(1);

  
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
    cartItems.map(item=>{
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
    console.log(productid,"post add product id")
    axios.post('http://localhost:8080/item',{
      "id":productid,
      "user_id":123123,
      "product_id":productid,
      "quantity":quantity,
      }).then(res => {console.log(res.data)})
    }



  
          // axios.post('http://localhost:8080/item',{
          //   'id':productid,
          //   'user_id':123123,
          //   'product_id':productid,
          //   'quantity':add
          // }).then(res => {console.log(res.data);loadItems();})
  
  

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
            if(product.productID === 1){
              return(
                <>
                  <h1 className="title" key={product}>{product.product_name}</h1>
                  <h1 className="price">£{product.product_price}</h1>
                  <button className="add" type="button" onClick={()=>postAdd(product.productID,item1)}>Add to Cart</button>
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
  