import React from "react";
import { Link, Outlet } from "react-router-dom";

const Sidebar = () => (
  <div className="sidebar">
    <h3> SMARTPARK DASHBORD</h3>
    <ul>
      <Link to="/">
        <a>
          <i className="fa fa-home"></i>
          <li>Dashboard</li>
        </a>
      </Link>
      <Link to="/parking_space">
        <a>
          <i className="fa fa-car"></i>
          <li>Parking Spaces</li>
        </a>
      </Link>
      <Link to="/reservation">
        <a>
          <i className="fa fa-clipboard-list"></i>
          <li> Reservations</li>
        </a>
      </Link>
      <Link to="/users">
        <a href="">
          <i className="fa fa-user"></i>
          <li> Users</li>
        </a>
      </Link>
      <Link to="/reports">
        <a href="">
          <i className="fa fa-chart-line"></i>
          <li> Reports</li>
        </a>
      </Link>
      <Link>
        <a href="">
          <i className="fa fa-cogs"></i>
          <li> Settings</li>
        </a>
      </Link>
    </ul>
  </div>
);

export default Sidebar;
