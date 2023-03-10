import React from "react";
import "./EmptyCart.css"

export default function EmptyCart(props) {

    return (props.trigger) ? (
        <div className="popupcart">
            <div className="popupinnercart">
                {props.children}
            </div>
        </div>
    ) : ""
}
