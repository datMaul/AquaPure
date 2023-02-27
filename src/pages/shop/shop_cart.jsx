import { Link } from "react-router-dom";
import {React, useState, useEffect} from 'react';
import axios from 'axios';
import "./cartStyle.css"
import water from "./shop_assets/water_bottle.PNG"

export default function Shop_cart() {

    const [cartItems, setcartItems] = useState([]);
    const [productData, setData] = useState([]);
    const [count, setcount] = useState(1);
    const [count2, setcount2] = useState(1);
    const [subtotal, setsubtotal] = useState(0)
    
    useEffect(() => {
      loadItems();
      loadProducts();
      
      
    },[]);
    useEffect(()=>{
      cartItems.map(item=>{
        setcount(item.quantity)
        console.log(count,"counter set as item quantity")
      })
      update_subtotal();
      
    },[cartItems])
    
    const loadProducts = () => {
      axios.get('http://localhost:8080/product')
      .then(res => {
        setData(res.data)
      })
     
    }
    const loadItems = () => {
      axios.get('http://localhost:8080/item')
      .then(res => {
        setcartItems(res.data)
      })
      
      
    }
    const deleteItem = async (id) => {
      await axios.delete(`http://localhost:8080/item/${id}`).then(console.log("deleted item"))
      // notEmpty=false;
      // console.log(notEmpty)
      loadItems();
      
    }

    const increment = (productid) => {
      if(productid===1){
        setcount((increment)=>(increment+1))
        if(count>=99){
          setcount(99)
          axios.post('http://localhost:8080/item',{
          "id":productid,
          "user_id":123123,
          "product_id":productid,
          "quantity":count,
          }).then(res => {console.log(res.data)})
        }
        else{
          axios.post('http://localhost:8080/item',{
          "id":productid,
          "user_id":123123,
          "product_id":productid,
          "quantity":count+1,
          }).then(res => {console.log(res.data)})
        }
      }
      if(productid===2){
        setcount2((increment)=>(increment+1))
        if(count2>=99){
          setcount(99)
          axios.post('http://localhost:8080/item',{
          "id":productid,
          "user_id":123123,
          "product_id":productid,
          "quantity":count2,
          }).then(res => {console.log(res.data)})
        }
        else{
          axios.post('http://localhost:8080/item',{
          "id":productid,
          "user_id":123123,
          "product_id":productid,
          "quantity":count2+1,
          }).then(res => {console.log(res.data)})
        }
      }
    }

    const decrease = (productid) => {
      if(productid===1){
        if(count===0){
          deleteItem(productid)
          axios.post('http://localhost:8080/item',{
          "id":productid,
          "user_id":123123,
          "product_id":productid,
          "quantity":count,
        }).then(res=>{console.log(res.data)})
        }
        else if(count>0){
          setcount((decrease)=>(decrease-1))
          axios.post('http://localhost:8080/item',{
          "id":productid,
          "user_id":123123,
          "product_id":productid,
          "quantity":count-1,
        }).then(res=>{console.log(res.data)})
        }
        else{
          console.log("count ERR")
        }
            
      }
    }
    const update_subtotal = () => {
      cartItems.map(item => {
        productData.map(product => {
          if(item.product_id === product.productID){
            console.log(item.quantity*product.product_price)
            setsubtotal(item.quantity*product.product_price)
            return(subtotal)
          }
        })
      })
    }

    return(
      <div>
        <div className="cart_page">
            <h1 className="cart_title">YOUR CART</h1>
            <table className="cart_items">
            <tr>
              <th className="item_image_header">PRODUCT</th>
              <th></th>
              <th className="quant_price_header">PRICE</th>
              <th className="quant_price_header">QUANTITY</th>
              <th></th>
            </tr>
            {
              
              cartItems.map(item => {
                var notEmpty = true;  
                return(
                <>
                
                  {
                    productData.map(product => {
                      
                      
                      if (product.productID === item.product_id) {
                        return(<>{notEmpty ? <>
                        
                          <tr>
                            <img className="item_image" src={water} alt="water"></img>
                            <td className="product_header" key={product.product_name}>{product.product_name}</td>
                            <td key={product.product_price}>£{product.product_price}</td>
                            <td className="quant_price_header" key={item.quantity}><button>+</button>{item.quantity}<button>-</button></td>
                            <td><button className="delete_button" onClick={() => deleteItem(item.id).then(update_subtotal())}>X</button></td>
                          </tr>
                          
                          {/* <img className="item_image" src={water} alt="water"></img> */}
                          </>
                           : ""}
                           </>)
                      }
                      
                    })
                  }
                  
                </>
                )
              })
              
            }
            {

            }
            
            
            </table>
            <div className="containerSum">
              <h1></h1>
            </div>
        </div>
      </div>
    );
  }
  