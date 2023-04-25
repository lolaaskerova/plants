import React, { useState } from "react";
import "./Navbar.scss";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { BsFillBasketFill } from "react-icons/bs";
import { RiAccountCircleFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import Hamburger from "./hamburger/Hamburger";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  let inactiveNav = {
    display: "none",
  };
  let activeHamburger = {
    display: "block",
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
            cactus
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
            <BsFillBasketFill /> <span>0</span>
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
