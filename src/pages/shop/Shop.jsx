import React from "react";
import ShopLink from "./shoplink/ShopLink";
import Products from "./products/Products";

const Shop = () => {
  return (
    <>
      <div style={{ padding: "60px 0px", borderTop: "1px solid lightgray" }}>
        <ShopLink />
        <Products />
      </div>
    </>
  );
};

export default Shop;
