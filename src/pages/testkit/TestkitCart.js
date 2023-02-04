import axios from "axios";
import React, { useEffect, useState } from "react";

export default function TestkitCart() {   
     const [TestkitCartItems, setTestkitCartItems] = useState([]);
      useEffect(() => {
        loadTestkit();
      }, []);
    
      const loadTestkit = async () => {
        const Test_Kit_Log_Result = await axios.get(
          "http://localhost:8080/TestkitCartItem/user/2"
        );
        setTestkitCartItems(Test_Kit_Log_Result.data);
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
                    <td>{TestkitCartItems.testKit.test_Kit_Name}</td>
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