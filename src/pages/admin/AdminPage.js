import ChildComponent2 from "./User_Admin/Signupadminlog";
import React, { useState } from "react";
import ChildComponent1 from "./TestKit_Admin/Testkitlog";
import "./AdminPage.css";


export default function ParentComponent() {
  const [displayChild, setDisplayChild] = useState(null);
  return (
    <div className="AdminContainer">
      <div className="Sidebar">
        <button onClick={() => setDisplayChild("ChildComponent1")} className="Admin_Side_BTN">Test Kit Log</button>
        <button onClick={() => setDisplayChild("ChildComponent2")} className="Admin_Side_BTN">Registered User Log</button>
      </div>
      <div className="ChildContainer">
        {displayChild === "ChildComponent1" && <ChildComponent1 />}
        {displayChild === "ChildComponent2" && <ChildComponent2 />}
      </div>
    </div>
  );
}
