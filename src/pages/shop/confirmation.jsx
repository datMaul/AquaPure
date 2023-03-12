import React from "react";
import "./checkout.css"

export default function ConfirmPopUp(props) {

    return (props.trigger) ? (
        <div className="popupcon">
            <div className="popupinnercon">
                {props.children}
            </div>
        </div>
    ) : ""
}
