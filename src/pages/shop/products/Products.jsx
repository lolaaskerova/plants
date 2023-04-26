import React, { useState } from "react";
import { BsFilter, BsFillBasketFill } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import { FaEye } from "react-icons/fa";
import { data } from "../../../data/data";
import "./Products.scss";
import Filter from "../filter/Filter";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/features/CartSlice";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Products = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([...data]);
  const [close, setClose] = useState(false);

  //

  //
  let filter = {
    display: "block",
  };
  //sort by price
  const sortByPrice = (e) => {
    if (e.target.value === "high") {
      setProducts([...data.sort((a, b) => (a.price > b.price ? 1 : -1))]);
    } else if (e.target.value === "low") {
      setProducts([...data.sort((a, b) => (a.price < b.price ? 1 : -1))]);
    } else {
      setProducts([...data.sort((a, b) => (a.id > b.id ? 1 : -1))]);
    }
  };

  //filter category
  const filterCacti = () => {
    return products.filter((item) => item.category === "Cacti");
  };

  return (
    <>
      <motion.div
        className="left-filter"
        style={close ? filter : undefined}
        key={close}
        initial={{ width: "0px" }}
        animate={{ width: "500px" }}
        transition={{ duration: 1, type: "spring" }}
      >
        <Filter
          filterCacti={filterCacti}
          close={close}
          setClose={setClose}
          products={products}
          setProducts={setProducts}
        />
      </motion.div>
      <div className="container">
        <div className="sort-filter">
          <div onClick={() => setClose(true)} className="left-side">
            <BsFilter />
            <span>Filter</span>
          </div>
          <div className="right-side">
            <select name="sorting" id="sorting" onClick={(e) => sortByPrice(e)}>
              <option value="">Default Sorting</option>
              <option value="high">Sort by price: High to low</option>
              <option value="low">Sort by price: Low to high</option>
            </select>
          </div>
        </div>
        <div className="products">
          {products.map((d, index) => (
            <div key={index} className=" card">
              <div className="image">
                <img src={d.image} alt="green" />
                {d.oldPrice ? <span id="sale">Sale!</span> : <></>}
                <div className="icons">
                  <BsFillBasketFill onClick={() => dispatch(addToCart(d))} />
                  <Link to={`/product/${d.id}`}>
                    {" "}
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

                {d.oldPrice ? (
                  <div className="price">
                    <del>${d.oldPrice}.00</del> <span>${d.price}.00</span>
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
    </>
  );
};

export default Products;
