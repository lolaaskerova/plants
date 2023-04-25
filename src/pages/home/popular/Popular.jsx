import React from "react";
import { BsFillBasketFill } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import { data } from "../../../data/data";
import "./Popular.scss";
const Popular = () => {
  return (
    <div className="container most-popular">
      <div className="titles">
        <h4>Shop</h4>
        <h1>Most Popular Plants</h1>
      </div>
      <div className="row">
        {data.map((d, index) =>
          d.discount ? (
            <div
              key={index}
              className="col-3 card d-flex justify-content-between"
            >
              <div className="image">
                <img src={d.image} alt="image" />
                <span id="sale">Sale!</span>

                <div className="icons">
                  <BsFillBasketFill />
                  <FaEye />
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
                  <del>${d.price}.00</del>
                  <h4>${d.price - (d.price * d.discount) / 100}.00</h4>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )
        )}
      </div>
    </div>
  );
};

export default Popular;
