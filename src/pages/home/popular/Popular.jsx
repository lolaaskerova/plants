import React from "react";
import { BsFillBasketFill } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import { data } from "../../../data/data";
import "./Popular.scss";
import { Link } from "react-router-dom";
const Popular = () => {
  return (
    <div className="container most-popular">
      <div className="titles">
        <h4>Shop</h4>
        <h1>Most Popular Plants</h1>
      </div>
      <div className="row">
        {data.map((d) =>
          d.oldPrice ? (
            <div key={d.id} className=" card">
              <div className="image">
                <img src={d.image} alt="logo" />
                <span id="sale">Sale!</span>

                <div className="icons">
                  <BsFillBasketFill />
                  <Link to={`/product/${d.id}`}>
                    <FaEye />
                  </Link>
                </div>
              </div>
              <div className="card-content">
                <span>{d.category}</span>
                <h2>{d.name}</h2>
                <div className="svg">
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                </div>
                <div className="price">
                  <del>${d.oldPrice}.00</del>
                  <h4>${d.price}.00</h4>
                </div>
              </div>
            </div>
          ) : (
            <React.Fragment key={d.id}></React.Fragment>
          )
        )}
      </div>
    </div>
  );
};

export default Popular;
