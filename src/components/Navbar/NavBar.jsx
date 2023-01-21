import React from "react";
import "./NavBar.css";
import kula_logo from "../../assets/kula_logo.png";
const NavBar = () => {
  return (
    <div className="container">
      <div className="img-container">
        <img src={kula_logo} alt="kula logo" height={35} />
      </div>

      <span className="nav-item">Product</span>
      <span className="nav-item">Our Story</span>
      <span className="nav-item">Resources</span>
    </div>
  );
};

export default NavBar;
