import React from "react";
import logo from "../../assets/images/logo.png";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import "./Footer.scss";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <div className="container footer">
        <div className="logo">
          <img src={logo} alt="logo" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
        </div>
        <div className="pages">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <Link to="shop">Shop</Link>
            </li>
            <li>
              <Link to="plant">Plants</Link>
            </li>
            <li>
              <Link to="cactus">Cacti</Link>
            </li>
            <li>
              <Link to="cart">Cart</Link>
            </li>
            <li>
              <Link to="account">My account</Link>
            </li>
          </ul>
        </div>
        <div className="socials">
          <h2>Our Socials</h2>
          <div className="svg">
            <a href="https://websitedemos.net/egrow-plants-04/#">
              <FaFacebookF />
            </a>
            <a href="https://websitedemos.net/egrow-plants-04/#">
              <AiOutlineInstagram />
            </a>
            <a href="https://websitedemos.net/egrow-plants-04/#">
              <AiOutlineTwitter />
            </a>
          </div>
        </div>
        <div className="subscribe">
          <h2>Subscribe to Our Newsletter</h2>
          <form>
            <input type="email" placeholder="Your email address..." />
            <button type="submit">subscribe</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
