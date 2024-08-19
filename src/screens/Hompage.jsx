import React from "react";
import Topbar from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Line } from "react-chartjs-2";

const data = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      label: "Revenue",
      data: [5000, 6000, 7000, 8000, 9000, 10000],
      borderColor: "rgba(75, 192, 192, 1)",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-main">
        <Topbar />
        <div className="dashboard-content">
          <CardContainer />
          <WidgetContainer />
        </div>
      </div>
    </div>
  );
};

const CardContainer = () => (
  <div className="cardContainer">
    <div className="card">
      <p>Total Users</p>
      <div className="cardDetails">
        <span>3</span>
        <i className="fa fa-user"></i>
      </div>
    </div>

    {/* second card */}
    <div className="card">
      <p>Total Parking Spaces</p>
      <div className="cardDetails">
        <span>3</span>
        <i className="fa fa-car"></i>
      </div>
    </div>

    {/* third card  */}

    <div className="card">
      <p>Total Reservations</p>
      <div className="cardDetails">
        <span>2</span>
        <i className="fa fa-clipboard"></i>
      </div>
    </div>
  </div>
);

const WidgetContainer = () => {
  return <div className="widgetContainer">
    <ReservationWidget/>
  </div>;
};

const ReservationWidget = () => {
  return (
    <div className="reservation-widget">
      <div className="reservation-widget-header">
        <h4>Current Reservations</h4>
        <div>
          <input type="search" placeholder="searh by id" />
          <select name="" id="">
            <option value="">January</option>
            <option value="">Febuary</option>
          </select>
        </div>
      </div>
      <div className="reservation-widget-content">
        <table className="reservation-table">
          <thead>
            <tr>
              <th>Reservation ID</th>
              <th>Parking Space</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>001</td>
              <td>Space A1</td>
              <td>2024-08-13</td>
              <td>Confirmed</td>
            </tr>
            <tr>
              <td>002</td>
              <td>Space B2</td>
              <td>2024-08-14</td>
              <td>Pending</td>
            </tr>
            <tr>
              <td>003</td>
              <td>Space C3</td>
              <td>2024-08-15</td>
              <td>Canceled</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
