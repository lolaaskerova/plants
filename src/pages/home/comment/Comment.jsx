import React from "react";
import "./Comment.scss";
import { comment } from "../../../data/data";

const Comment = () => {
  return (
    <div className="container testimonial">
      {comment.map((c) => (
        <div className="comment" key={c.id}>
          <div className="photo">
            <img src={c.profile} alt="comment" />
          </div>
          <div className="comment-content">
            <h1>{c.comment}</h1>
            <h4>{c.name}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comment;
