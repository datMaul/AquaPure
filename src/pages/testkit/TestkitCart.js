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

export default function TestkitCart() {
  const [TestkitCartItems, setTestkitCartItems] = useState([]);
  useEffect(() => {
    loadTestkit();
  }, []);

  const loadTestkit = async () => {
    const Test_Kit_Log_Result = await axios.get(
      `http://localhost:8080/TestkitCartItem/user/${localStorage.getItem("user_ID")}`
    );
    setTestkitCartItems(Test_Kit_Log_Result.data);
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
            <td>{TestkitCartItems.quantity} <button>Edit</button></td>
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
    </div>
  );
}
//   /testkitcart