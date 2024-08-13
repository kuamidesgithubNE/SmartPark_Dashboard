import React from "react";
import Topbar from "../components/Header";

const Reservations = () => (
  <div className="reservations-container">
    <Sidebar />
    <div className="main-content">
      <Topbar />
      <h1>Reservations</h1>
      <div className="reservations-list">
        {/* Map through reservations here */}
      </div>
    </div>
  </div>
);

export default Reservations;
