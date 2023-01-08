import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./Overwritetestkitlog.css";

export default function Overwritetestkitlog() {

    let navigate = useNavigate()

    const { test_Kit_ID } = useParams()

    const [testkit, setTestKit] = useState({
        test_Kit_Name: "",
        test_Kit_Price: "",
        test_Kit_Stock_Count: ""
    })

    const { test_Kit_Name, test_Kit_Price, test_Kit_Stock_Count } = testkit

    const onInputChange = (e) => {
        setTestKit({ ...testkit, [e.target.name]: e.target.value })
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/Test_Kit/${test_Kit_ID}`, testkit)
        navigate("/testkit")
    }

    useEffect(() => {
        loadTestkit()
    }, []);

    const loadTestkit = async () => {
        const result = await axios.get(`http://localhost:8080/Test_Kit/${test_Kit_ID}`)
        setTestKit(result.data)
    }

    return (
        <div className="Overwrite_Container">
            <div className="row">
                <div className="TestKit_infor">
                    <h2 className="Kit_info">Overwrite Test Kit</h2>
                    <form>
                        <div>
                            <label htmlFor="Name" className="OW_TK_Labes"> Test Kit Name:</label>
                            <input
                                type={"text"}
                                className="from-control"
                                placeholder="Name of Test Kit"
                                name="test_Kit_Name"
                                value={test_Kit_Name}
                                onChange={(e) => onInputChange(e)} />
                        </div>
                        <div>
                            <label className="OW_TK_Labes"> Test Kit Price</label>
                            <input
                                type={"number"}
                                className="from-control"
                                placeholder="Enter Price Overwrite"
                                name="test_Kit_Price"
                                value={test_Kit_Price}
                                onChange={(e) => onInputChange(e)} />
                        </div>
                        <div>
                            <label className="OW_TK_Labes"> Test Kit Stock Count</label>
                            <input
                                type={"number"}
                                className="from-control"
                                placeholder="Enter Count Overwrite"
                                name="test_Kit_Stock_Count"
                                value={test_Kit_Stock_Count}
                                onChange={(e) => onInputChange(e)} />
                        </div>
                        <button className="SubmitBTN_OW_TK" type="submit" onSubmit={(e) => onSubmit(e)}>Submit</button>
                        <Link className="CancelBTN_OW_TK" to="/testkitlog">Cancel</Link>
                    </form>
                </div>
            </div>
        </div >
    );
}