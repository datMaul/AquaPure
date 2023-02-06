import ChildComponent2 from "../../admin/AdminPage";
import React, { useState } from "react";
import ChildComponent1 from "./testkitcart/TestkitCart";
import "./CartPage.css";


export default function ParentComponent() {
    const [displayChild, setDisplayChild] = useState(null);
    return (
        <div className="CartContainer">
            <div className="CartSidebar">
                <button onClick={() => setDisplayChild("ChildComponent1")} className="Cart_Side_BTN">Test Kit Cart</button>
                <button onClick={() => setDisplayChild("ChildComponent2")} className="Cart_Side_BTN">Shop Cart</button>
            </div>
            <div className="ChildContainer">
                {displayChild === "ChildComponent1" && <ChildComponent1 />}
                {displayChild === "ChildComponent2" && <ChildComponent2 />}
            </div>
        </div>
    );
}