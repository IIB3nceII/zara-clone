import React from "react";
import "./MoveButton.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function MoveButton() {
  return (
    <div className="movebutton">
      <div className="movebutton_container">
        <div className="home_controlsLeft">
          <ArrowBackIosIcon />
          <p>Man</p>
        </div>
        <div className="home_controlsRight">
          <ArrowForwardIosIcon />
          <p>Kids</p>
        </div>
      </div>
    </div>
  );
}

export default MoveButton;
