import React from "react";
import "./Gift.scss";
import giftCard from "../../../assets/images/giftCard.jpg";
const Gift = () => {
  return (
    <div className="gift">
      <div className="container gift-part">
        <div className="left-side">
          <h1>Give the Gift of Plants</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            mattis nulla in mauris efficitur elementum. Donec mollis eleifend ex
            vitae vulputate. Nam sodales, lorem ac tempus lorem ipsum dolor si
            amet.
          </p>
          <button>buy gift card</button>
        </div>
        <div className="right-side">
          <img src={giftCard} alt="gift" />
        </div>
      </div>
    </div>
  );
};

export default Gift;
