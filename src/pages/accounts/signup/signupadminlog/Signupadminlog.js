import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Signupadminlog.css";
import { Link } from "react-router-dom";

export default function UsersLog() {
    const [users, setTestKit] = useState([])
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
                    <th scope="col">addressLine1</th>
                    <th scope="col">addressLine2</th>
                    <th scope="col">addressPostcode</th>
                    <th scope="col">Town/City</th>
                    <th scope="col">Confirm Password</th>
                    <th scope="col">Date Of Birth</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Password</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">eMail</th>
                    <th scope="col">Action</th>
                </tr>
                {
                    users.map((user, index) => (
                        <tr>
                            <th scope="row" key={index}>{index + 1}</th>
                            <td>{user.addressLine1}</td>
                            <td>{user.addressLine2}</td>
                            <td>{user.addressPostcode}</td>
                            <td>{user.addressTC}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.password}</td>
                            <td>{user.phoneNumber}</td>
                            <td>{user.password}</td>
                            <td>{user.eMail}</td>
                            <td><Link className="Edit_Kit_Price" to={`/testkitlog/overwrite/${user.test_Kit_ID}`}>Overwrite</Link></td>
                        </tr>
                    ))
                }
            </table>
        </div>
    );
}
