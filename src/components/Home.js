import React, { useState } from "react";
import "./Home.css";
import Item from "./Item";
import WomanFirstImg from "../assets/woman-first-bg.jpg";
import WomanSecondImg from "../assets/woman-second-bg.jpg";
import WomanThirdImg from "../assets/woman-third-bg.jpg";
import WomanFourthImg from "../assets/woman-fourth-bg.jpg";
import WomanFifthImg from "../assets/woman-fifth-bg.jpg";
import WomanSixthImg from "../assets/woman-sixth-bg.jpg";

function Home() {
  const [margin, setMargin] = useState(0);

  return (
    <div className="home">
      <div className="home_container" style={{ scrollPaddingLeft:{margin} }}>
        <div className="man">
          <Item
            title="Sale"
            desc="Online and in stores"
            backgroundImg={WomanFirstImg}
            button={true}
          />

          <Item
            title="New in"
            desc="Explore this week's latest menwear pieces of the season curated for you Man Collection"
            backgroundImg={WomanSecondImg}
            button={true}
          />

          <Item
            title="Collection"
            desc="Discover this week's pices from our latest collection Man Collection"
            backgroundImg={WomanThirdImg}
            button="true"
          />

          <Item
            title="Shoes & Bags"
            desc="Explore the new collection of Shoes & Bags Man Collection"
            backgroundImg={WomanFifthImg}
            button={true}
          />

          <Item
            title="Join Life"
            desc="Working different programmes to reduce the environmental impact of our products"
            backgroundImg={WomanSixthImg}
            button={true}
          />
        </div>

        {/* ---------------------------------------------------------------------------------------------------------- */}

        <div className="woman">
          <Item title="" desc="" backgroundImg={WomanFirstImg} button={false} />

          <Item
            title="Collection"
            desc="Discover this week's pieces from our latest collection Woman Collection"
            backgroundImg={WomanSecondImg}
            button={true}
          />

          <Item
            title="Sale"
            desc="Online and in stores"
            backgroundImg={WomanThirdImg}
            button="true"
          />

          <Item
            title="Lingerie"
            desc=""
            backgroundImg={WomanFourthImg}
            button={true}
          />

          <Item
            title="Shoes & Bags"
            desc="Explore the new collection of Shoes & Bags Woman Collection"
            backgroundImg={WomanFifthImg}
            button={true}
          />

          <Item
            title="Join Life"
            desc="Working different programmes to reduce the environmental impact of our products"
            backgroundImg={WomanSixthImg}
            button={true}
          />
        </div>

        {/* ---------------------------------------------------------------------------------------------------------- */}

        <div className="kids">
          <Item
            title="New In"
            desc="Explore this week's kidswear pieces of the season curated for xou Kids Collection"
            backgroundImg={WomanFirstImg}
            button={true}
          />

          <Item
            title="Collection"
            desc="Discover this week's pices from our latest collection Kids Collection"
            backgroundImg={WomanThirdImg}
            button="true"
          />

          <Item
            title="Sale"
            desc="Online and in stores"
            backgroundImg={WomanFifthImg}
            button={true}
          />

          <Item
            title="Shoes & Bags"
            desc="Explore the new collection of Shoes & Bags Kids Collection"
            backgroundImg={WomanFifthImg}
            button={true}
          />

          <Item
            title="Join Life"
            desc="Working different programmes to reduce the environmental impact of our products"
            backgroundImg={WomanSixthImg}
            button={true}
          />
        </div>
        <div className="home_controls">
          <button className="home_controlsLeft">Left</button>
          <button className="home_controlsRight" onClick={()=>setMargin(margin+1000)}>
            Right
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
