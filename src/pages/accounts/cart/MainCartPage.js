import React, { useState } from "react";
import ChildComponent2 from "../accountPageSections/LoyaltyPoints";
import ChildComponent1 from "./testkitcart/CartPage";
import "./MainCArtPage.css";



export default function ParentComponent() {
  const [displayChild, setDisplayChild] = useState(null);

  return (
    <div className="CartContainer">
      <div className="CartSidebar">
        <button onClick={() => setDisplayChild("ChildComponent1")} className="Cart_Side_BTN">Test Kit</button>
        <button onClick={() => setDisplayChild("ChildComponent2")} className="Cart_Side_BTN">Shop Item</button>
      </div>
      <div className="CartChildContainer">
        {displayChild === "ChildComponent1" && <ChildComponent1 />}
        {displayChild === "ChildComponent2" && <ChildComponent2 />}
      </div>
    </div>
  );
}