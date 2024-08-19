import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Header";

const ParkingSpaces = () => {
  const [spaces, setSpaces] = useState([]);

  const ApiUrl = "http://localhost/SmartPark-Backend/Others/parking_spaces.php";

  useEffect(() => {
    const fetchSpaces = async () => {
      try {
        const response = await axios.get(ApiUrl);
        setSpaces(response.data);
      } catch (error) {
        console.error("Error fetching parking spaces:", error);
      }
    };

    fetchSpaces();
  }, []);

  const handleDeleteSpace = async (id) => {
    try {
      await axios.delete(ApiUrl, {
        data: { space_id: id },
      });
      const updatedSpaces = spaces.filter((space) => space.space_id !== id);
      setSpaces(updatedSpaces);
    } catch (error) {
      console.error("Error deleting parking space:", error);
    }
  };

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-main">
        <Topbar />
        <div className="dashboard-content">
          <button className="add-space-btn">Add Parking Space</button>
          <table>
            <caption>Parking Spaces Management</caption>
            <thead>
              <tr>
                <th>Space ID</th>
                <th>Space Number</th>
                <th>Location</th>
                <th>Status</th>
                <th>Date Created</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {spaces.map((space) => (
                <tr key={space.space_id}>
                  <td>{space.space_id}</td>
                  <td>{space.space_number}</td>
                  <td>{space.location}</td>
                  <td>{space.status}</td>
                  <td>{space.created_at}</td>
                  <td>
                    <button
                      className="btn edit-btn"
                      onClick={() => handleEditSpace(space.space_id)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn delete-btn"
                      onClick={() => handleDeleteSpace(space.space_id)}
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
  );
};

export default ParkingSpaces;
