import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Header";

const initialSpaces = [
  {
    id: 1,
    location: "Location 1",
    distance: 1.2,
    price: 10,
    status: "available",
    date: "14th July 2023",
  },
  {
    id: 2,
    location: "Location 2",
    distance: 2.5,
    price: 15,
    status: "booked",
    date: "14th July 2023",
  },
  {
    id: 3,
    location: "Location 3",
    distance: 0.8,
    price: 8,
    status: "available",
    date: "12th January 2024",
  },
];

const ParkingSpaces = () => {
  const [spaces, setSpace] = useState(initialSpaces);

  const handleAddSpace = () => {
    const newSpace = {
      id: spaces.length + 1,
      location: "New Location",
      distance: 1.0,
      price: 12,
      status: "available",
      date: "15th August 2024",
    };
    setSpace([...spaces, newSpace]);
  };

  const handleEditSpace = (id) => {
    const updatedSpaces = spaces.map((space) =>
      space.id === id ? { ...space, location: "Updated Location" } : space
    );
    setSpace(updatedSpaces);
  };

  const handleDeleteSpace = (id) => {
    const updatedSpaces = spaces.filter((space) => space.id !== id);
    setSpace(updatedSpaces);
  };
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-main">
        <Topbar />
        {/* <button className="add-space-btn" onClick={handleAddSpace}>Add Parking Space</button> */}
        <table>
          <caption>Parking Spaces Management</caption>
          <thead>
            <tr>
              <th>Space ID</th>
              <th>Location</th>
              <th>Distance</th>
              <th>Price</th>
              <th>Time Booked</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {spaces
              .filter((space) => space.status === "available")
              .map((space) => (
                <tr key={space.id}>
                  <td>{space.id}</td>
                  <td>{space.location}</td>
                  <td>{space.distance} km</td>
                  <td>${space.price}</td>
                  <td>{space.date}</td>
                  <td>{space.status}</td>
                  <td>
                    <button
                      className="btn edit-btn"
                      onClick={() => handleEditSpace(space.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn delete-btn"
                      onClick={() => handleDeleteSpace(space.id)}
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
  );
};

export default ParkingSpaces;
