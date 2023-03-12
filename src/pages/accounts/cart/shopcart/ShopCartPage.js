import { Await, Link } from "react-router-dom";
import {React, useState, useEffect} from 'react';
import axios from 'axios';
import "./cartStyle.css"
import PopupShop from "../../../shop/EmptyCart"
import tote from "../../../shop/item_pages/shop_assets/AquaPureToteBag.png";
import notebook from "../../../shop/item_pages/shop_assets/APNotebook.png"
import cup from "../../../shop/item_pages/shop_assets/BambooCup.png"
import mug from "../../../shop/item_pages/shop_assets/Beverage Mug.png"
import filter from "../../../shop/item_pages/shop_assets/water filter.png"
import hoodie from "../../../shop/item_pages/shop_assets/APHoodie.png"
import shirt from "../../../shop/item_pages/shop_assets/tshirtAP.png"
import mask from "../../../shop/item_pages/shop_assets/FaceMaskAP.png"
import cap from "../../../shop/item_pages/shop_assets/APcap.png"
import flask from "../../../shop/item_pages/shop_assets/metalFlask.png"
import pouch from "../../../shop/item_pages/shop_assets/APPouch.png"
import phone from "../../../shop/item_pages/shop_assets/PhoneCaseAP.png"
import backpack from "../../../shop/item_pages/shop_assets/APBackpack.png"
import water from "../../../shop/item_pages/shop_assets/water_bottle.PNG";
import sticker from "../../../shop/item_pages/shop_assets/APSticker.png"


export default function ShopCartPage() {
  
  const [cartItems, setcartItems] = useState([]);
  const [productData, setData] = useState([]);
  const [subtotal, setsubtotal] = useState(0);
  const [Userpoints, setUserpoints] = useState([]);
  const storeuserid = localStorage.getItem("user_ID");
  const [user, setuser] = useState([]);
  const [empty, setempty] = useState(false)
  const productimg = {
    "Recycled Sports Bottle": water,
    Backpack: backpack,
    "Phone Case": phone,
    "Laptop Pouch":pouch,
    "Metal Flask":flask,
    Cap:cap,
    "Face Mask Pack of 3":mask,
    "T-Shirt": shirt,
    Hoodie:hoodie,
    "Water Filter": filter,
    "Coffee/Tea Hot Beverage Mug": mug,
    "Bamboo Travel Cup":cup,
    "Bamboo Covered Note Book":notebook,
    "Recycled Tote Bag Large":tote,
    "AquaPure Sticker & Badge": sticker

  }
  
  useEffect(() => {
    loadItems();
    loadProducts();
    loadUserPoints();
    
    

  },[]);

  useEffect(()=>{
    total();
    loadUser();
    if(cartItems.length===0){
      setempty(true);
    }
    else if(cartItems.length>0){
      setempty(false)
    }
  },[cartItems,productData])

  const loadUser = () => {
    axios.get("http://localhost:8080/Sign_Up_log").then(res=>{setuser(res.data)})
  }
  const loadUserPoints = () => {
    axios.get("http://localhost:8080/points")
    .then(res=>{setUserpoints(res.data);loadUser();})
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
      console.log(res.data);
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
    await axios.delete(`http://localhost:8080/item/${id}`).then(res=>{console.log(res.data);})
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
          <h2 className="total">Total: £{subtotal}</h2>
        </span>
        <PopupShop trigger={empty} setTrigger={setempty}>
          <div>
            EMPTY
            <Link to="/shop"><br></br><button className="empty_btn">BACK TO SHOP</button></Link>
          </div>
        </PopupShop>
        
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
                          <td><img className="item_image" src={productimg[product.product_name]} alt="water"></img></td>
                          <td className="product_header" key={product.product_name}>{product.product_name}</td>
                          <td className="quant_td" key={"count"}><button className="quant_button_minus" onClick={()=>{decrease(item.product_id,item.id);}}>-</button><p className="quant">{item.quantity}</p><button className="quant_button_plus" onClick={()=>{increment(item.product_id,item.id);}}>+</button></td>
                          <td className="price_td" key={product.product_price}>£{product.product_price}</td>
                          <td><button className="delete_button" onClick={() => deleteItem(item.id)}>X</button></td>
                        </tr>
                        </tbody>
                         : "empty"}
                         </>)
                    }
                  })
                }
              </>
              )
            })
          }
          </table>
          <Link to="/checkout"><button className="checkout">CHECKOUT</button></Link>

      </div>
    </div>
  );
}
