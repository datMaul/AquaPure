import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import WaterTestKit1 from "../../../testkit/testkit_images_videos/Basic.jpg";
import WaterTestKit2 from "../../../testkit/testkit_images_videos/Standard.jpg";
import WaterTestKit3 from "../../../testkit/testkit_images_videos/Plus.jpg";
import WaterTestKit4 from "../../../testkit/testkit_images_videos/Premium.jpg";
import WaterTestKit5 from "../../../testkit/testkit_images_videos/Legionella.jpg";
import WaterTestKit6 from "../../../testkit/testkit_images_videos/Bacteria.jpg";
import WaterTestKit7 from "../../../testkit/testkit_images_videos/Pool.jpg";
import Poppup from "../../../../components/Popup";
import shark from "../cart_images_videos/Shark.png";
import "./TestkitCartPage.css";

export default function TestkitCart() {
  const [TestkitCartItems, setTestkitCartItems] = useState([]);
  const [buttonPopup, setButtonPopup] = useState(false);
  const [totalPrice, setTotal] = useState(0);
  useEffect(() => {
    loadTestkit();
  }, []);

  const loadTestkit = async () => {
    const Test_Kit_Log_Result = await axios.get(
      `http://localhost:8080/TestkitCartItem/user/${localStorage.getItem(
        "user_ID"
      )}`
    );
    setTestkitCartItems(Test_Kit_Log_Result.data);
    setTotal(
      Test_Kit_Log_Result.data.reduce(
        (acc, item) => acc + item.quantity * item.testKit.test_Kit_Price,
        0
      )
    );
  };
  axios
    .get(
      `http://localhost:8080/TestkitCartItem/user/${localStorage.getItem(
        "user_ID"
      )}`
    )
    .then((response) => {
      if (response.data.length === 0) {
        // Cart is empty, hide components
        document.querySelector(".Test_Kit_Table").style.display = "none";
        document.querySelector(".Summary_Div").style.visibility = "hidden";
        document.querySelector(".Empty_Div").style.visibility = "visible";
      } else {
        document.querySelector(".Test_Kit_Table").style.visibility = "visible";
        document.querySelector(".Summary_Div").style.visibility = "visible";
        document.querySelector(".Empty_Div").style.visibility = "hidden";
      }
    })
    .catch((error) => {
      console.error(error);
      // Handle error
    });

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/Cart/${id}`);
    loadTestkit();
  };

  const testKitImages = {
    Basic: WaterTestKit1,
    Standard: WaterTestKit2,
    Plus: WaterTestKit3,
    Premium: WaterTestKit4,
    Legionella: WaterTestKit5,
    "Bacteria Basic": WaterTestKit6,
    Pool: WaterTestKit7,
  };
  const Tax_Price = 20;
  const Shipping_Fees = 12;

  const Checkout = async () => {
    try {
      const postResponse = await axios.post(
        `http://localhost:8080/testkit/purchase-history/${localStorage.getItem(
          "user_ID"
        )}`
      );
      console.log(postResponse);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const deleteResponse = await axios.delete(
        `http://localhost:8080/TestkitCartItem/user/${localStorage.getItem(
          "user_ID"
        )}`
      );
      console.log(deleteResponse);
      setButtonPopup(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="Testkitcart_Container">
      <center>
        <h1>Your Water Test Kit Cart</h1>
      </center>
      <div className="Test_kit_cart">
        <table className="Test_Kit_Table">
          <tr>
            <th scope="col">Desription</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
            <th scope="col">Remove</th>
          </tr>
          {TestkitCartItems.map((TestkitCartItems, index) => (
            <tr>
              <td style={{ display: "flex", alignItems: "center" }}>
                <img
                  style={{
                    width: "200px",
                    height: "200px",
                    marginRight: "10px",
                  }}
                  src={testKitImages[TestkitCartItems.testKit.test_Kit_Name]}
                  alt={TestkitCartItems.testKit.test_Kit_Name}
                />
                Water Test Kit | {TestkitCartItems.testKit.test_Kit_Name}
              </td>
              <td className="Price_td">{TestkitCartItems.quantity}</td>
              <td>
                £
                {(
                  TestkitCartItems.quantity *
                  TestkitCartItems.testKit.test_Kit_Price
                ).toFixed(2)}
              </td>
              <td>
                <button
                  className="Delete_User"
                  onClick={() => deleteUser(TestkitCartItems.id)}
                >
                  Delete Item
                </button>
              </td>
            </tr>
          ))}
        </table>
        <div className="Summary_Div">
          <h2>Summary</h2>
          Item(s) Total Price: £
          {TestkitCartItems.reduce(
            (total, item) =>
              total + item.quantity * item.testKit.test_Kit_Price,
            0
          ).toFixed(2)}
          <br />
          <br />
          Tax: £{Tax_Price.toFixed(2)}
          <br />
          Shipping Fees: £{Shipping_Fees.toFixed(2)}
          <br />
          <br />
          Total: £
          {(
            TestkitCartItems.reduce(
              (total, item) =>
                total + item.quantity * item.testKit.test_Kit_Price,
              0
            ) +
            Tax_Price +
            Shipping_Fees
          ).toFixed(2)}
          <br />
          <br />
          <center>
            <button className="Checkout_Btn" onClick={Checkout}>
              Proceed To Checkout
            </button>
            <Link className="Cont_Btn" to="/testkit">
              Continue Shopping
            </Link>
          </center>
        </div>
        <div className="Empty_Div">
          <div className="Empty_Context">
            <h2>Hmmm... It seems your cart is empty.</h2>
            Lets try to change that, click on the Test Kit link on the navbar or
            just simply click the button!
            <br />
            <br />
            <center>
              <Link className="Go_Kit_Btn" to="/testkit">
                Go to Test Kit Page
              </Link>
            </center>
          </div>
          <div className="Shark_div">
            <img alt="Shark Head" src={shark} />
          </div>
        </div>
      </div>
      <Poppup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <center>
          <h3>Your Order Is Now Complete!</h3>
          <br />
          <h4>
            {" "}
            You'll get a confirmation in your Account Tabs, under Purchase
            History.
          </h4>
          <br />
          <button
            className="Checkout_Btn"
            onClick={() => {
              setButtonPopup(false);
              window.location.reload();
            }}
          >
            Close
          </button>
        </center>
      </Poppup>
    </div>
  );
}
