import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Testkitlog.css";

export default function TestkitLog() {
    const [testkits, setTestKit] = useState([])
    useEffect(() => {
        loadTestkit();
    }, []);

    const loadTestkit = async () => {
        const Test_Kit_Log_Result = await axios.get("http://localhost:8080/Test_Kit_log");
        setTestKit(Test_Kit_Log_Result.data);
    }
    return (
        <div className="Testkit_log_Container">
            <table className="Test_Kit_Table">
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Test Kit Name</th>
                    <th scope="col">Test Kit Price</th>
                    <th scope="col">Stock Count</th>
                </tr>
                {
                    testkits.map((testkit, index) => (
                        <tr>
                            <th scope="row" key={index}>{index + 1}</th>
                            <td>{testkit.test_Kit_Name}</td>
                            <td>{testkit.test_Kit_Price}</td>
                            <td>{testkit.test_Kit_Stock_Count}</td>
                        </tr>
                    ))
                }
            </table>

        </div>
    );
}
