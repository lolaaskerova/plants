import React from "react";
import "./ShopLink.scss";
import { Link } from "react-router-dom";
const ShopLink = () => {
  return (
    <div className="container">
      <Link to="/">Home </Link>
      <span>/ Shop</span>
    </div>
  );
};

export default ShopLink;
