import React, { useState } from "react";
import "./Navbar.scss";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { BsFillBasketFill } from "react-icons/bs";
import { RiAccountCircleFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import Hamburger from "./hamburger/Hamburger";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  const [toggle, setToggle] = useState(false);
  let inactiveNav = {
    display: "none",
  };
  let activeHamburger = {
    display: "block",
  };

  const getTotalQuantity = () => {
    let total = 0;
    cart.cart.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };
  return (
    <>
      <nav style={toggle ? inactiveNav : undefined} className="container">
        <div className="nav-left-side">
          <Link to="">
            <img src={logo} alt="logo" />
          </Link>
          <Link className="nav-link" to="shop">
            shop all
          </Link>
          <Link className="nav-link" to="plant">
            plants
          </Link>
          <Link className="nav-link" to="cactus">
            cacti
          </Link>
        </div>
        <div className="nav-right-side">
          <Link className="nav-link" to="story">
            our story
          </Link>
          <Link className="nav-link" to="questions">
            questions?
          </Link>
          <Link className="cart" to="cart">
            <BsFillBasketFill /> <span>{getTotalQuantity()}</span>
          </Link>
          <Link className="account" to="account">
            <RiAccountCircleFill />
          </Link>
          <div onClick={() => setToggle(!toggle)} className="hamburger">
            <GiHamburgerMenu />
          </div>
        </div>
      </nav>
      <Hamburger
        toggle={toggle}
        setToggle={setToggle}
        className="hambuger"
        style={toggle ? activeHamburger : undefined}
      />
    </>
  );
};

export default Navbar;
