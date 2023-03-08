import React from "react";
import "./Popup.css"

export default function Poppup(props) {

    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                {props.children}
            </div>
        </div>
    ) : ""
}
