const Topbar = () => (
  <div className="topbar">
    <div className="welcome">
      <span>Welcome,</span>
      <span className="username">Kuamides</span>
    </div>
    <input
      type="search"
      placeholder="search anything here"
      className="searchbar"
    />

    <div className="user-profile">
      <i className="fa fa-bell"></i>
      <div className="profile-pic"></div>
    </div>
  </div>
);

export default Topbar;
