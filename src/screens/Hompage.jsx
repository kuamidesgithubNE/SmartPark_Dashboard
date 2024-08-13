import React from "react";
import Topbar from "../components/Header";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-main">
        <Topbar />
        <div className="dashboard-content">
          <Overview />
          <RecentActivity />
          <KeyMetrics />
          <Analytics />
        </div>
      </div>
    </div>
  );
};



const Overview = () => (
  <div className="widget">
    <h4>Parking Overview</h4>
    <p>Total Spaces: 100</p>
    <p>Available: 20</p>
    <p>Reserved: 30</p>
    <p>Occupied: 50</p>
  </div>
);

const RecentActivity = () => (
  <div className="widget">
    <h4>Recent Activity</h4>
    <ul>
      <li>Booking 1</li>
      <li>Booking 2</li>
      <li>Booking 3</li>
    </ul>
  </div>
);

const KeyMetrics = () => (
  <div className="widget">
    <h4>Key Metrics</h4>
    <p>Revenue: $10,000</p>
    <p>Occupancy Rate: 70%</p>
  </div>
);

const Analytics = () => (
  <div className="widget">
    <h4>Analytics</h4>
    <p>Peak Usage Times: 8am - 10am</p>
  </div>
);

export default Dashboard;
