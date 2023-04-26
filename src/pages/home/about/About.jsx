import React from "react";
import "./About.scss";
import AboutComponent from "./aboutComponent/AboutComponent";
import { FaTruck, FaPercent } from "react-icons/fa";
import { MdOutlineSecurity, MdLocationOn } from "react-icons/md";
const About = () => {
  return (
    <div className="container">
      <div className="about">
        <AboutComponent
          image={<FaTruck />}
          heading={"Fast Delivery"}
          text={
            "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor consectetur"
          }
        />
        <AboutComponent
          image={<MdLocationOn />}
          heading={"Order Tracking"}
          text={
            "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor consectetur"
          }
        />
        <AboutComponent
          image={<MdOutlineSecurity />}
          heading={"Secure Payment"}
          text={
            "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor consectetur"
          }
        />
        <AboutComponent
          image={<FaPercent />}
          heading={"Big Discounts"}
          text={
            "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor consectetur"
          }
        />
      </div>
    </div>
  );
};

export default About;
