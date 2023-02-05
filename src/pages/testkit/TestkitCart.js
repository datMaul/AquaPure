import axios from "axios";
import React, { useEffect, useState } from "react";
import WaterTestKit1 from './testkit_images_videos/Basic.jpg';
import WaterTestKit2 from './testkit_images_videos/Standard.jpg';
import WaterTestKit3 from './testkit_images_videos/Plus.jpg';
import WaterTestKit4 from './testkit_images_videos/Premium.jpg';
import WaterTestKit5 from './testkit_images_videos/Legionella.jpg';
import WaterTestKit6 from './testkit_images_videos/Bacteria.jpg';
import WaterTestKit7 from './testkit_images_videos/Pool.jpg';
import "./TestkitCart.css";
import { Button } from "react-bootstrap";

export default function TestkitCart() {
  const [TestkitCartItems, setTestkitCartItems] = useState([]);
  const [totalPrice, setTotal] = useState(0);
  useEffect(() => {
    loadTestkit();
  }, []);

  const loadTestkit = async () => {
    const Test_Kit_Log_Result = await axios.get(
      `http://localhost:8080/TestkitCartItem/user/${localStorage.getItem("user_ID")}`
    );
    setTestkitCartItems(Test_Kit_Log_Result.data);
    setTotal(Test_Kit_Log_Result.data.reduce((acc, item) => acc + (item.quantity * item.testKit.test_Kit_Price), 0));
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/Cart/${id}`);
    loadTestkit();
  };

  const testKitImages = {
    'Basic': WaterTestKit1,
    'Standard': WaterTestKit2,
    'Plus': WaterTestKit3,
    'Premium': WaterTestKit4,
    'Legionella': WaterTestKit5,
    'Bacteria Basic': WaterTestKit6,
    'Pool': WaterTestKit7,
  };
  const Tax_Price = 20
  const Shipping_Fees = 12
  return (
    <div>
      <center>
        <h1>Your Water Test Kit Cart</h1>
      </center>
      <table className="Test_Kit_Table">
        <tr>
          <th scope="col">Desription</th>
          <th scope="col">Quantity</th>
          <th scope="col">Price</th>
          <th scope="col">Remove</th>
        </tr>
        {TestkitCartItems.map((TestkitCartItems, index) => (
          <tr>

            <td style={{ display: 'flex', alignItems: 'center' }}><img style={{ width: '200px', height: '200px', marginRight: '10px' }} src={testKitImages[TestkitCartItems.testKit.test_Kit_Name]} alt={TestkitCartItems.testKit.test_Kit_Name} />
              Water Test Kit | {TestkitCartItems.testKit.test_Kit_Name}
            </td>
            <td className="Price_td">{TestkitCartItems.quantity} <button className="Edit_Cart_BTN">Edit</button></td>
            <td>£{(TestkitCartItems.quantity * TestkitCartItems.testKit.test_Kit_Price).toFixed(2)}</td>
            <td><button
              className="Delete_User"
              onClick={() => deleteUser(TestkitCartItems.id)}
            >
              Delete Item
            </button></td>
          </tr>
        ))}
      </table>
      <div className="Summary_Div">
        <h2>Summary</h2>
        Item(s) Total Price: £{TestkitCartItems.reduce((total, item) => total + (item.quantity * item.testKit.test_Kit_Price), 0).toFixed(2)}
        <br />
        <br />
        Tax: £{Tax_Price.toFixed(2)}
        <br />
        Shipping Fees: £{Shipping_Fees.toFixed(2)}
        <br />
        <br />
        Total: £{(TestkitCartItems.reduce((total, item) => total + (item.quantity * item.testKit.test_Kit_Price), 0) + Tax_Price + Shipping_Fees).toFixed(2)}
        <br />
        <br />
        <center>
          <button className="Checkout_Btn">Proceed To Checkout</button>
          <br />
          <br />
          <button className="Cont_Btn">Continue Shopping</button>
        </center>
      </div>
    </div>
  );
}
//   /testkitcart