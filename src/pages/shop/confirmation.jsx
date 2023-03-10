import React from "react";
import "./EmptyCart.css"

export default function ConfirmPopUp(props) {

    return (props.trigger) ? (
        <div className="popup">
            <div className="popupinner">
                {props.children}
            </div>
        </div>
    ) : ""
}
