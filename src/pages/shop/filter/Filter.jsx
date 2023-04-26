import React from "react";
import "./Filter.scss";
import { MdOutlineCancel } from "react-icons/md";
import cacti from "../../../assets/images/cacti.jpg";
import plant from "../../../assets/images/plant.jpg";
import { useNavigate } from "react-router-dom";
import { data } from "../../../data/data";

const Filter = ({ setProducts, close, setClose }) => {
  const navigate = useNavigate();

  const filterByCategory = (category) => {
    const newProducts = data.filter((item) => {
      return item.category === category;
    });
    setProducts(newProducts);
    navigate("");
  };
  let style = {
    display: "none",
  };
  return (
    <div style={close ? undefined : style} className="filter">
      <MdOutlineCancel onClick={() => setClose(false)} />
      <div className="content">
        <div className="filter-by-category">
          <h1>categories</h1>
          <div className="cacti" onClick={() => filterByCategory("Cacti")}>
            <img src={cacti} alt="cacti" />
            <span>Cacti</span>
          </div>
          <div className="plant" onClick={() => filterByCategory("Plants")}>
            <img src={plant} alt="plant" />
            <span>Plants</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
