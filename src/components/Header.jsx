import React from "react";
import img1 from "../assets/images/myImage.jpg";

const Topbar = () => (
  <div className="topbar">
    <input
      type="search"
      placeholder="search anything here"
      className="searchbar"
    />

    <div className="profile">
      <i className="fa fa-bell"></i>
      <div className="user-profile">
        <img src={img1} alt="" className="profile-pic" />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <span>Kuamides</span>
          <span style={{ color: "#3a7ca5", fontSize: 12 }}>admin</span>
        </div>
        <i class="fas fa-chevron-down"></i>
      </div>
    </div>
  </div>
);

export default Topbar;
