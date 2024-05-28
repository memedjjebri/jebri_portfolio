import React from "react";
import Mjebri from "../assets/images/mjebri.png";
import {} from "@ant-design/icons";

const HeaderComp = () => {
  return (
    <header>
      <div className="left">
        <img src={Mjebri} alt="user" />
        <div className="user-infos">
          <h1>JEBRI Mohamed</h1>
          <h3>Junior developpeur web et web mobile</h3>
        </div>
      </div>
    </header>
  );
};

export default HeaderComp;
