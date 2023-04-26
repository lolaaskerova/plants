import React from "react";
import "./Category.scss";
import cacti from "../../../assets/images/cacti.jpg";
import plant from "../../../assets/images/plant.jpg";
const Category = () => {
  return (
    <div className="container category">
      <div className="left-side">
        <div className="img">
          <img src={cacti} alt="img" />
        </div>
        <div className="title">
          <h4>Cacti</h4>
        </div>
      </div>
      <div className="right-side">
        <div className="img">
          <img src={plant} alt="img" />
          <div className="title">
            <h4>Plants</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
