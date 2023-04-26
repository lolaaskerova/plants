import React from "react";
import "./AboutComponent.scss";
const AboutComponent = (props) => {
  const { image, heading, text } = props;
  return (
    <div className="content">
      <div className="img">{image}</div>
      <div className="title">
        <h2>{heading}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default AboutComponent;
