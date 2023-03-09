import { Await, Link } from "react-router-dom";
import {React, useState, useEffect} from 'react';
import axios from 'axios';
import "./cartStyle.css"
import water from "./shop_assets/water_bottle.PNG"

export default function ShopCartPage() {
  
  const [cartItems, setcartItems] = useState([]);
  const [productData, setData] = useState([]);
  const [count, setcount] = useState(0);
  const [subtotal, setsubtotal] = useState(0);
  const [Userpoints, setUserpoints] = useState([]);
  
  useEffect(() => {
    loadItems();
    loadProducts();
    loadUserPoints();
    

    
  },[]);

  useEffect(()=>{
    total();
    
  },[cartItems])

  const loadUserPoints = () => {
    axios.get("http://localhost:8080/points")
    .then(res=>{setUserpoints(res.data);console.log(res.data,"user points loaded")})
  }
  
  const loadProducts = () => {
    axios.get('http://localhost:8080/product')
    .then(res => {
      setData(res.data)
    })
   
  }
  const loadItems = () => {
    axios.get(`http://localhost:8080/item/user/${localStorage.getItem("user_ID")}`)
    .then(res => {
      setcartItems(res.data)
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

  const apply_points = (userid) => {
    Userpoints.map(score => {
      if(score.user_ID === userid){
        var points = score.score
        // var points = 2500
        if(points >= 100){
          if(!IsCheck && subtotal!=0){
          
            console.log("discounted")
            let discount = points/1000;
            let newtotal = subtotal-discount
            setsubtotal(newtotal);
            
          }
          else if(IsCheck && subtotal!==0){
            console.log("discounted revoked")
            let discount = points/1000;
            let newtotal = subtotal+discount
            setsubtotal(newtotal);
          }

        }
        else{
          setsubtotal(subtotal)
        }

      }       
    })
    
  }

  const deleteItem = async (id) => {
    await axios.delete(`http://localhost:8080/item/${id}`).then(console.log("deleted item"))
    // notEmpty=false;
    // console.log(notEmpty)
    loadItems();
  }

  const increment = (productid) => {
    cartItems.map(item => {
      if(productid === item.product_id){
        if(item.quantity>=50){
          console.log("max quant")
        }
        else{
          let add = item.quantity+1
          axios.post('http://localhost:8080/item',{
            'id':productid,
            'user_id':123,
            'product_id':productid,
            'quantity':add
          }).then(res => {loadItems();console.log(res.data);})

        }
      }
    })
  }

  const decrease = (productid) => {
    cartItems.map(item => {
      if(productid === item.product_id){
        if(item.quantity<=1){
          deleteItem(productid)
        }
        else{
          let add = item.quantity-1
          axios.post('http://localhost:8080/item',{
            'id':productid,
            'user_id':123,
            'product_id':productid,
            'quantity':add
          }).then(res => {loadItems();console.log(res.data);})
        }
      }
    })
  }
  const [IsCheck,setcheck] = useState(false);
  const checkhandler = () => {
    setcheck(!IsCheck);
    apply_points(0);
  }
  var notEmpty = true;
  return(
    <div>
      {
        
      }
      <div className="cart_page">
        <h1 className="cart_title">SHOP CART</h1>
        <span className="containerSum">
          <h3>subtotal</h3>
          {
            Userpoints.map(score => {
              // only used to test functionality supposed to be the id of the user that's logged in
              var testid = 0
              if(score.user_ID === testid){
                return(<><h3>You have {score.score} points to your account</h3></>)
              }
            })
          }
          <div className="discount">
            <label htmlFor="checkbox">Apply Points Discount</label>
            <input type="checkbox" checked={IsCheck} onChange={() => checkhandler()}></input>
          </div>
          <h2>£{subtotal}</h2>
          <Link to="/checkout"><button className="checkout">CHECKOUT</button></Link>
          <Link to="/shop_purchase">history</Link>
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
                          <td className="quant_td" key={count}><button className="quant_button_minus" onClick={()=>{decrease(item.product_id);}}>-</button><p className="quant">{item.quantity}</p><button className="quant_button_plus" onClick={()=>increment(item.product_id)}>+</button></td>
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
