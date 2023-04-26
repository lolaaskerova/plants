import React from "react";
import hero from "../../../assets/images/hero.png";
import { motion } from "framer-motion";
import "./Hero.scss";
const Hero = () => {
  return (
    <div className="hero">
      <div className="container hero-content">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, type: "plant" }}
          className="hero-left-side"
        >
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
        </motion.div>
        <div className="hero-right-side">
          <img src={hero} alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
