import React, { useState } from "react";
import ChildComponent1 from "./User_Admin/Signupadminlog";
import ChildComponent2 from "./TestKit_Admin/Testkitlog";
import ChildComponent3 from "./TestKitHistory_Admin/TestkitHistorylog";
import "./AdminPage.css";
import axios from "axios";

export default function ParentComponent() {
  const [displayChild, setDisplayChild] = useState(null);

  const handleLogout = () => {
    axios
      .post("http://localhost:8080/logout", null, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        localStorage.removeItem("token");
        localStorage.removeItem("user_ID");
        window.location = "/";
      })
      .catch((err) => {
        console.log(err);
        console.log("there was an error");
      });
  };
  return (
    <div className="AdminContainer">
      <div className="Sidebar">
        <button
          onClick={() => setDisplayChild("ChildComponent1")}
          className="Admin_Side_BTN"
        >
          Registered User Log
        </button>
        <button
          onClick={() => setDisplayChild("ChildComponent2")}
          className="Admin_Side_BTN"
        >
          Testkit Log
        </button>
        <button
          onClick={() => setDisplayChild("ChildComponent3")}
          className="Admin_Side_BTN"
        >
          Testkit History Log
        </button>
        <button onClick={handleLogout} className="Cart_Side_BTN">
          Logout
        </button>
      </div>
      <div className="ChildContainer">
        {displayChild === "ChildComponent1" && <ChildComponent1 />}
        {displayChild === "ChildComponent2" && <ChildComponent2 />}
        {displayChild === "ChildComponent3" && <ChildComponent3 />}
      </div>
    </div>
  );
}
