import React from "react";
import testimonial from "../../../assets/images/testimonial.jpg";
import "./Comment.scss";

const Comment = () => {
  return (
    <div className="container testimonial">
      <div className="comment">
        <div className="photo">
          <img src={testimonial} alt="comment" />
        </div>
        <div className="comment-content">
          <h1>
            “ Really good service and good quality plants, lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua quis ipsum! ”
          </h1>
          <h4>Maria Oliver</h4>
        </div>
      </div>
    </div>
  );
};

export default Comment;
