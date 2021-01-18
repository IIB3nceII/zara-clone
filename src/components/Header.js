import React from "react";
import "./Header.css";
import ZaraLogo from "../assets/zara-clone-logo.png";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import MenuIcon from "@material-ui/icons/Menu";

function Header() {
  return (
    <div className="header">
      <div className="header_menu">
        <MenuIcon />
      </div>
      <div className="header_logo">
        <img src={ZaraLogo} alt="" />
      </div>

      <div className="header_center">
        <p>Search</p>
        <span></span>
      </div>

      <div className="header_nav">
        <div className="header_option">
          <span>Log In</span>
          <span>Help</span>
        </div>
      </div>

      <div className="header_optionBasket">
        <div className="basket_icon">
          <WorkOutlineIcon />
        </div>
        <span className="header_basketCount">0</span>
      </div>
    </div>
  );
}

export default Header;