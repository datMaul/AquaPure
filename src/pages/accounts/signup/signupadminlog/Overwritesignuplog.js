import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./Overwritesignuplog.css";

export default function Overwritetestkitlog() {

    let navigate = useNavigate()

    const { user_ID } = useParams()

    const [user, setUser] = useState({
        test_Kit_Name: "",
        test_Kit_Price: "",
        test_Kit_Stock_Count: ""
    });

    const { test_Kit_Name, test_Kit_Price, test_Kit_Stock_Count } = kit;

    const onInputChange = (e) => {
        setUser({ ...kit, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/Test_Kit/${test_Kit_ID}`, kit);
        navigate("/testkitlog")
    };

    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8080/Test_Kit/${test_Kit_ID}`)
        setUser(result.data)
    };


    return (
        <div className="Overwrite_Container">
            <div className="row">
                <div className="TestKit_infor">
                    <h2 className="Kit_info">Overwrite Test Kit</h2>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div>
                            <label htmlFor="Name" className="OW_TK_Labes"> Test Kit Name:</label>
                            <input
                                type={"text"}
                                className="from-control"
                                placeholder="Name of Test Kit"
                                name="test_Kit_Name"
                                readOnly
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
                        <button className="SubmitBTN_OW_TK" type="submit">Submit</button>
                        <Link className="CancelBTN_OW_TK" to="/testkitlog">Cancel</Link>
                    </form>
                </div>
            </div>
        </div >
    );
}