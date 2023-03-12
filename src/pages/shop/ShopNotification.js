import React from "react";
import "./Shop_Style.css"

export default function ShopNotification(props) {

    return (props.trigger) ? (
        <div className="popupframe">
            <button className="popupinnerframe">
                {props.children}
            </button>
        </div>
    ) : ""
}
