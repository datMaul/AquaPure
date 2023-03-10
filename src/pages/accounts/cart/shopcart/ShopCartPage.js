import { Await, Link } from "react-router-dom";
import {React, useState, useEffect} from 'react';
import axios from 'axios';
import "./cartStyle.css"
import water from "./shop_assets/water_bottle.PNG"


export default function ShopCartPage() {
  
  const [cartItems, setcartItems] = useState([]);
  const [productData, setData] = useState([]);
  const [subtotal, setsubtotal] = useState(0);
  const [Userpoints, setUserpoints] = useState([]);
  const storeuserid = localStorage.getItem("user_ID");
  const [user, setuser] = useState([]);
  
  useEffect(() => {
    loadItems();
    loadProducts();
    loadUserPoints();
    

  },[]);

  useEffect(()=>{
    total();
    loadUser();
  },[cartItems,productData])

  const loadUser = () => {
    axios.get("http://localhost:8080/Sign_Up_log").then(res=>{setuser(res.data)})
    console.log(user,"<-user");
  }
  const loadUserPoints = () => {
    axios.get("http://localhost:8080/points")
    .then(res=>{setUserpoints(res.data);console.log(res.data,"user points loaded");loadUser();})
  }
  
  const loadProducts = () => {
    axios.get('http://localhost:8080/product')
    .then(res => {
      setData(res.data);
    })
   
  }
  const loadItems = () => {
    axios.get(`http://localhost:8080/item/user/${localStorage.getItem("user_ID")}`)
    .then(res => {
      setcartItems(res.data);
    })
    
  }

  const total = () => {
    
    var total_price = 0;
    cartItems.map(item => {
      productData.map(product => {
        if(item.product_id === product.productID){
          total_price += product.product_price*item.quantity
        }
      })
    })
    setsubtotal(total_price)
    
  }


  const deleteItem = async (id) => {
    await axios.delete(`http://localhost:8080/item/${id}`).then(console.log("deleted item"))
    // notEmpty=false;
    // console.log(notEmpty)
    loadItems();
  }

  const increment = (productid,id) => {
    cartItems.map(item => {
      if(productid === item.product_id){
        if(item.quantity>=50){
          console.log("max quant")
        }
        else{
          let add = item.quantity+1
          axios.put(`http://localhost:8080/item/${id}`,{
            "quantity":add
          }).then(res => {loadItems();console.log(res.data);})

        }
      }
    })
  }

  const decrease = (productid,id) => {
    cartItems.map(item => {
      if(productid === item.product_id){
        if(item.quantity<=1){
          deleteItem(productid)
        }
        else{
          let add = item.quantity-1
          axios.put(`http://localhost:8080/item/${id}`,{
            "quantity":add
          }).then(res => {loadItems();console.log(res.data);})
        }
      }
    })
  }
  
  var notEmpty = true;
  return(
    
    <div>
      <div className="cart_page">
        <h1 className="cart_title">SHOP CART</h1>
        <span className="containerSum">
          <h2>£{subtotal}</h2>
          <Link to="/checkout"><button className="checkout">CHECKOUT</button></Link>
        </span>
          <table className="cart_items">
            <thead>
              <tr key={"headers"}>
                <th className="item_image_header table_h">PRODUCT</th>
                <th className="th_product_header table_h"></th>
                <th className="quant_header table_h" id="quantity">QUANTITY</th>
                <th className="price_header table_h" id="price">PRICE</th>
                <th className="table_h"></th>
              </tr>
            </thead>
          {
            cartItems.map(item => {
              return(
              <>
                {
                  productData.map(product => {
                    
                    if (product.productID === item.product_id && notEmpty) {
                      return(<>{notEmpty ? <tbody>
                        <tr key={"cart"}>
                          <td><img className="item_image" src={water} alt="water"></img></td>
                          <td className="product_header" key={product.product_name}>{product.product_name}</td>
                          <td className="quant_td" key={"count"}><button className="quant_button_minus" onClick={()=>{decrease(item.product_id,item.id);}}>-</button><p className="quant">{item.quantity}</p><button className="quant_button_plus" onClick={()=>{increment(item.product_id,item.id);}}>+</button></td>
                          <td className="price_td" key={product.product_price}>£{product.product_price}</td>
                          <td><button className="delete_button" onClick={() => deleteItem(item.id)}>X</button></td>
                        </tr>
                        </tbody>
                         : ""}
                         </>)
                    }
                  })
                }
              </>
              )
            })
          }
          </table>
      </div>
    </div>
  );
}
