import axios from "axios";
import React, { useEffect, useState } from "react";
import WaterTestKit1 from './testkit_images_videos/Basic.jpg';
import WaterTestKit2 from './testkit_images_videos/Standard.jpg';
import WaterTestKit3 from './testkit_images_videos/Plus.jpg';
import WaterTestKit4 from './testkit_images_videos/Premium.jpg';
import WaterTestKit5 from './testkit_images_videos/Legionella.jpg';
import WaterTestKit6 from './testkit_images_videos/Bacteria.jpg';
import WaterTestKit7 from './testkit_images_videos/Pool.jpg';
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
      <h1>Test Kit Cart</h1>
      <table className="Test_Kit_Table">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Test Kit Name</th>
          <th scope="col">Test Kit Price</th>
          <th scope="col">Quantity</th>
          <th scope="col">Action</th>
        </tr>
        {TestkitCartItems.map((TestkitCartItems, index) => (
          <tr>
            <th scope="row" key={index}>
              {index + 1}
            </th>
            <td><img src={testKitImages[TestkitCartItems.testKit.test_Kit_Name]} alt={TestkitCartItems.testKit.test_Kit_Name} />
              Water Test Kit | {TestkitCartItems.testKit.test_Kit_Name}</td>
            <td>£{TestkitCartItems.testKit.test_Kit_Price}.00</td>
            <td>{TestkitCartItems.quantity}</td>
            <td>Hello</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
//   /testkitcart