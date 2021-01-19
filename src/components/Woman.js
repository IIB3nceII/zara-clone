import React from "react";
import "./Woman.css";
import Item from './Item';
import WomanFirstImg from "../assets/woman-first-bg.jpg";
import WomanSecondImg from "../assets/woman-second-bg.jpg";
import WomanThirdImg from "../assets/woman-third-bg.jpg";
import WomanFourthImg from "../assets/woman-fourth-bg.jpg";
import WomanFifthImg from "../assets/woman-fifth-bg.jpg";
import WomanSixthImg from "../assets/woman-sixth-bg.jpg";

function Woman() {
  return (
    <div className="woman">
      <Item title="" desc="" backgroundImg={WomanFirstImg} button={false} />

      <Item title="Collection" desc="Discover this week's pieces from our latest collection Woman Collection" backgroundImg={WomanSecondImg} button={true} />

      <Item title="Sale" desc="Online and in stores" backgroundImg={WomanThirdImg} button="true" />

      <Item title="Lingerie" desc="" backgroundImg={WomanFourthImg} button={true} />

      <Item title="Shoes & Bags" desc="Explore the new collection of Shoes & Bags Woman Collection" backgroundImg={WomanFifthImg} button={true} />

      <Item title="Join Life" desc="Working different programmes to reduce the environmental impact of our products" backgroundImg={WomanSixthImg} button={true} />
    </div>
  );
}

export default Woman;
