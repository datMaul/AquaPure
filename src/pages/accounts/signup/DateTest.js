import "rsuite/dist/rsuite.min.css";
import { DatePicker } from "rsuite";
import React, { useRef } from "react";


export default function DateTest() {
    const datepickerStyle = {
        marginBottom: "25px",
        marginTop: "10px"
    };

    return (
        <div className="App" style={{
            display: "flex", alignItems: "center",
            flexDirection: "column"
        }}>
            <p>DatePicker with Custom Placeholder value: </p>
            <DatePicker block style={datepickerStyle}
                placeholder="Date of Birth" />
        </div>
    );
}