import React from "react";
import "./Header.css";
import ZaraLogo from "../assets/zara-clone-logo-nobg.png";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import MenuIcon from "@material-ui/icons/Menu";

function Header() {
  return (
    <div className="header">
      <div className="header_menu">
        <MenuIcon />

        <ul className="header_sidebar">
          <li>
            <p>Woman</p>
          </li>
          <li>
            <p>Man</p>
          </li>
          <li>
            <p>Kids</p>
          </li>
          <li>
            <p>Shoes & Bags</p>
          </li>
          <li>
            <p>Join Life</p>
          </li>
          <li>
            <p>+info</p>
          </li>
        </ul>
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
