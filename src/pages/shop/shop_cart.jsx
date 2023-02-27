import { Link } from "react-router-dom";
import {React, useState, useEffect} from 'react';
import axios from 'axios';
import "./cartStyle.css"
import water from "./shop_assets/water_bottle.PNG"

export default function Shop_cart() {

    const [cartItems, setcartItems] = useState([]);
    const [productData, setData] = useState([]);

    const [count, setcount] = useState(1);

    const [subtotal, setsubtotal] = useState(0);

    

    
    
    useEffect(() => {
      loadItems();
      loadProducts();
      total();
    },[]);

    useEffect(()=>{
      total();
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

    const total = () => {
      var quant = 0;
      var total_price = 0;
      cartItems.map(item => {
        quant += item.quantity
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

    const increment = (productid) => {
      
      cartItems.map(item => {
        console.log(item.quantity,"get item quantity")
        if(productid === item.product_id){
          
          setcount((increment)=>(increment+1))
          
          // axios.post('http://localhost:8080/item',{
          //   "id":productid,
          //   "user_id":123123,
          //   "product_id":productid,
          //   "quantity":count+1,
          //   }).then(res => {console.log(res.data)})
          console.log(count,"count value")
          
        }
      })
        
          
      
          
        
      
      
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
                            <td className="quant_price_header" key={item.quantity}><button onClick={()=>increment(item.product_id)}>+</button>{count}<button>-</button></td>
                            <td><button className="delete_button" onClick={() => deleteItem(item.id)}>X</button></td>
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
            </table>

            <div className="containerSum">
              <h1>{subtotal}</h1>
            </div>
        </div>
      </div>
    );
  }
  