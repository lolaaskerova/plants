import React from "react";
import hero from "../../../assets/images/hero.png";
import "./Hero.scss";
const Hero = () => {
  return (
    <div className="hero">
      <div className="container hero-content">
        <div className="hero-left-side">
          <div className="titles">
            <h3>Plants</h3>
            <h1>Bird of Paradise Plant</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              mattis nulla in mauris efficitur elementum.
            </p>
          </div>
          <div className="price">
            <del>$65.00</del>
            <span>$50.00</span>
            <button>add to cart</button>
          </div>
        </div>
        <div className="hero-right-side">
          <img src={hero} alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
