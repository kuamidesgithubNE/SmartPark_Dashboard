import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Header";
import axios from "axios";

const UserPage = () => {
  const apiUrl = "http://localhost/SmartPark-Backend/crudUser/display.php";

  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from the backend
    axios
      .get(apiUrl)
      .then((response) => {
        setUsers(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  const handleEditUser = (userId) => {
    console.log(`Edit user with ID: ${userId}`);
    // Implement edit functionality here
  };

  const handleDeleteUser = (userId) => {
    console.log(`Delete user with ID: ${userId}`);
    // Implement delete functionality here
  };

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-main">
        <Topbar />
        <div className="user-container">
          <div className="table-container">
            <table>
              <caption>User Management</caption>
              <thead>
                <tr>
                  <th>User ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>

                  <th>Date Created</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.user_id}>
                    <td>{user.user_id}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.date_created}</td>
                    <td>
                      <button
                        className="edit-btn"
                        onClick={() => handleEditUser(user.id)}
                      >
                        Edit
                      </button>
                      <button
                        className="delete-btn"
                        onClick={() => handleDeleteUser(user.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
