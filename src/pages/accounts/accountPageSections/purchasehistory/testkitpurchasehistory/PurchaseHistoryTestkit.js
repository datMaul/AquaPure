import axios from "axios";
import React, { useEffect, useState } from "react";
import WaterTestKit1 from "../../../../testkit/testkit_images_videos/Basic.jpg";
import WaterTestKit2 from "../../../../testkit/testkit_images_videos/Standard.jpg";
import WaterTestKit3 from "../../../../testkit/testkit_images_videos/Plus.jpg";
import WaterTestKit4 from "../../../../testkit/testkit_images_videos/Premium.jpg";
import WaterTestKit5 from "../../../../testkit/testkit_images_videos/Legionella.jpg";
import WaterTestKit6 from "../../../../testkit/testkit_images_videos/Bacteria.jpg";
import WaterTestKit7 from "../../../../testkit/testkit_images_videos/Pool.jpg";
import "./PurchaseHistoryTestkit.css";

export default function TestkitCart() {
  const [TestkitHistory, setTestkitHistory] = useState([]);
  useEffect(() => {
    loadTestkitHistory();
  }, []);

  const loadTestkitHistory = async () => {
    const Test_Kit_History = await axios.get(
      `http://localhost:8080/testkit/purchase-history/${localStorage.getItem(
        "user_ID"
      )}`
    );
    setTestkitHistory(Test_Kit_History.data);
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

  console.log(TestkitHistory)

  return (
    <div>
      <div className="Testkit_hist">
        <center>
          <h1>Your Testkit Purchase History</h1>
        </center>
        <table className="Test_Kit_Table">
          <tr>
            <th scope="col">Desription</th>
            <th scope="col">Activation Code</th>
            <th scope="col">Is Activated</th>
          </tr>
          {TestkitHistory.map((TestkitCartItems, index) => (
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
              <td className="Price_td">{TestkitCartItems.id}</td>
              <td>
                {TestkitCartItems.usestatus ? "Activated" : "Not Activated"}
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}
