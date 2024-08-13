import React from "react";
import Topbar from "../components/Header";
import Sidebar from "../components/Sidebar";

const Reports = () => {
  return (
    <div className="dashboard-container">
      {/* <h2>Reports and Analytics</h2> */}
      <Sidebar />
      <div className="dashboard-main">
        <Topbar />
        <div className="report-filters">
          <label>Date Range: </label>
          <input type="date" />
          <input type="date" />
          <label>Report Type: </label>
          <select>
            <option value="revenue">Revenue</option>
            <option value="occupancy">Occupancy</option>
          </select>
        </div>
        <div className="report-content">
          <h3>Revenue Report</h3>
          <p>Total Revenue: $10,000</p>
          {/* More report details */}
        </div>
      </div>
    </div>
  );
};

export default Reports;
