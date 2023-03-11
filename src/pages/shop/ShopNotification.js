import React from "react";
import "./ShopNotification.css"

export default function ShopNotification(props) {

    return (props.trigger) ? (
        <div className="popupframe">
            <div className="popupinnerframe">
                {props.children}
            </div>
        </div>
    ) : ""
}
