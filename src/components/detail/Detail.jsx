import React from "react";
import "./Detail.scss";
import { data } from "../../data/data";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/CartSlice";

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const greens = data.find((green) => green.id === id);

  const { name, image, category, price, oldPrice } = greens;

  return (
    <div className="container detail">
      <div className="img">
        <img src={image} alt="plant" />
      </div>
      <div className="content">
        <span>Category : {category}</span>
        <h1>{name}</h1>
        {oldPrice ? (
          <div className="price">
            <del>${oldPrice}.00</del> <h3>${price}.00</h3>
          </div>
        ) : (
          <h3>${price}.00</h3>
        )}

        <button onClick={() => dispatch(addToCart(greens))}>Add to cart</button>
      </div>
    </div>
  );
};

export default Detail;
