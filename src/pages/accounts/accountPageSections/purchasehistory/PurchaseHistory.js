import React, { useState } from "react";
import ChildComponent1 from "./shopPurchaseHistory/PurchaseHistoryShop";
import ChildComponent2 from "./testkitPurchaseHistory/PurchaseHistoryTestkit";
import "./PurchaseHistory.css";

export default function ParentComponent() {
  const [displayChild, setDisplayChild] = useState(null);

  return (
    <div className="HistoryContainer">
      <div className="HistorySidebar">
        <button
          onClick={() => setDisplayChild("ChildComponent1")}
          className="Hist_Side_BTN"
        >
          Product History
        </button>
        <button
          onClick={() => setDisplayChild("ChildComponent2")}
          className="Hist_Side_BTN"
        >
          Testkit Purchase History
        </button>
      </div>
      <div className="HistChildContainer">
        {displayChild === "ChildComponent1" && <ChildComponent1 />}
        {displayChild === "ChildComponent2" && <ChildComponent2 />}
      </div>
    </div>
  );
}
