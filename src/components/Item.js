import React from "react";
import "./Item.css";
import Button from "./Button";

function Item({ title, desc, backgroundImg, button }) {
  return (
    <div className="item" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <div className="item_container">
        <div className="item_text">
          <p className="title">{title}</p>
          <div className="item_textDesc">
            <p>{desc}</p>
          </div>
          {button && (
          <div className="item_button">
            <Button link="#"/>
          </div>
        )}
        </div>
      </div>
    </div>
  );
}

export default Item;
