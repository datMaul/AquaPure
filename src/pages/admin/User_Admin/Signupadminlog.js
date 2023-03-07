import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Signupadminlog.css";
import { Link, useParams } from "react-router-dom";

export default function UsersLog() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const Users_Result = await axios.get("http://localhost:8080/Sign_Up_log");
    setUsers(Users_Result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/User/${id}`);
    loadUser();
  };
  return (
    <div className="Testkit_log_Container">
      <table className="Test_Kit_Table">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">User ID</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Address Line 1</th>
          <th scope="col">Address Line 2</th>
          <th scope="col">Town/City</th>
          <th scope="col">Postcode</th>
          <th scope="col">Date Of Birth</th>
          <th scope="col">Password</th>
          <th scope="col">Phone Number</th>
          <th scope="col">eMail</th>
          <th scope="col">Account Type</th>
          <th scope="col">Action</th>
        </tr>
        {users.map((user, index) => (
          <tr>
            <th scope="row" key={index}>
              {index + 1}
            </th>
            <td>{user.userId}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.addressLine1}</td>
            <td>{user.addressLine2}</td>
            <td>{user.addressTC}</td>
            <td>{user.addressPostcode}</td>
            <td>{user.doB}</td>
            <td>{user.password}</td>
            <td>{user.phoneNumber}</td>
            <td>{user.eMail}</td>
            <td>{user.accountType}</td>
            <td>
              <Link
                className="Edit_Kit_Price"
                to={`/admin/signuplog/overwrite/${user.userId}`}
              >
                Overwrite
              </Link>{" "}
              <button
                className="Delete_User"
                onClick={() => deleteUser(user.userId)}
              >
                Delete User
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
