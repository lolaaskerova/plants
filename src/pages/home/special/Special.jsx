import React from "react";
import plantImg from "../../../assets/images/plantImg.jpg";
import aloe from "../../../assets/images/aloe.jpg";
import { BsFillBasketFill } from "react-icons/bs";
import { FaEye } from "react-icons/fa";

import "./Special.scss";
const Special = () => {
  return (
    <div className="special">
      <div className="title">
        <h4>Special Offers</h4>
        <h1>Unique deals & offers every single day</h1>
      </div>
      <div className="main">
        <div className="left-side">
          <img src={plantImg} alt="plant" />
        </div>
        <div className="right-side">
          <div className="card">
            <div className="image">
              <img src={aloe} alt="aloe" />
              <div className="icons">
                <BsFillBasketFill />
                <FaEye />
              </div>
            </div>
            <div className="card-titles">
              <span>Cacti</span>
              <h2>Aloe Juvenna Plant</h2>
              <h5>$85.00</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Special;
