import React, { useState } from "react";
import ChildComponent1 from "./AccountsSettings";
import ChildComponent2 from "./PasswordSettings";
import ChildComponent3 from "./TestkitEntry";
import ChildComponent4 from "./PurchaseHistory";
import ChildComponent5 from "./LoyaltyPoints";
import "../cart/CartPage.css";
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
        <div className="CartContainer">
            <div className="CartSidebar">
                <button onClick={() => setDisplayChild("ChildComponent1")} className="Cart_Side_BTN">Account Settings</button>
                <button onClick={() => setDisplayChild("ChildComponent2")} className="Cart_Side_BTN">Password Settings</button>
                <button onClick={() => setDisplayChild("ChildComponent3")} className="Cart_Side_BTN">Testkit Entry</button>
                <button onClick={() => setDisplayChild("ChildComponent4")} className="Cart_Side_BTN">Purchase History</button>
                <button onClick={() => setDisplayChild("ChildComponent5")} className="Cart_Side_BTN">Loyalt Points</button>
                <button onClick={handleLogout} className="Cart_Side_BTN">Logout</button>
            </div>
            <div className="ChildContainer">
                {displayChild === "ChildComponent1" && <ChildComponent1 />}
                {displayChild === "ChildComponent2" && <ChildComponent2 />}
                {displayChild === "ChildComponent3" && <ChildComponent3 />}
                {displayChild === "ChildComponent4" && <ChildComponent4 />}
                {displayChild === "ChildComponent5" && <ChildComponent5 />}
            </div>
        </div>
    );
}