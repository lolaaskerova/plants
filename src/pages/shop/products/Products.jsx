import React from "react";
import { BsFilter, BsFillBasketFill } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import { FaEye } from "react-icons/fa";
import { data } from "../../../data/data";
import "./Products.scss";

const Products = () => {
  return (
    <div className="container">
      <div className="sort-filter">
        <div className="left-side">
          <BsFilter />
          <span>Filter</span>
        </div>
        <div className="right-side">
          <div className="sort">Sort by price</div>
        </div>
      </div>
      <div className="products">
        {data.map((d) => (
          <div key={d.id} className=" card">
            <div className="image">
              <img src={d.image} alt="image" />
              {d.discount ? <span id="sale">Sale!</span> : <></>}
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

              {d.discount ? (
                <div className="price">
                  <del>${d.price}.00</del>{" "}
                  <span>${d.price - (d.price * d.discount) / 100}.00</span>
                </div>
              ) : (
                <span>${d.price}.00</span>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="bottom">
        <span>No more products to show</span>
      </div>
    </div>
  );
};

export default Products;
