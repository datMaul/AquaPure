import React, { useState } from "react";
import ChildComponent1 from "./User_Admin/Signupadminlog";
import ChildComponent2 from "./TestKit_Admin/Testkitlog";
import ChildComponent3 from "./TestKitCart_Admin/TestkitCartlog";
import "./AdminPage.css";

export default function ParentComponent() {
  const [displayChild, setDisplayChild] = useState(null);
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
          Testkit Cart Log
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
