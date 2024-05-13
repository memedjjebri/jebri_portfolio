import React from "react";
import moi from "../assets/images/moi.png";
import {} from "@ant-design/icons";

const HeaderComp = () => {
  return (
    <header>
      <div className="left">
        <img src={moi} alt="user" />
        <div className="user-infos">
          <h1>JEBRI Mohamed</h1>
          <h3>Junior developpeur web et web mobile</h3>
        </div>
      </div>
    </header>
  );
};

export default HeaderComp;
