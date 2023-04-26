import React from "react";
import "./Hamburger.scss";
import { RiAccountCircleFill } from "react-icons/ri";
import { ImCancelCircle } from "react-icons/im";
import { Link } from "react-router-dom";
const Hamburger = ({ toggle, setToggle }) => {
  let inactHam = {
    display: "none",
  };
  return (
    <div style={toggle ? undefined : inactHam} className="hamburger-menu">
      <div onClick={() => setToggle(false)} className="exit">
        <ImCancelCircle />
      </div>
      <div className="hamburger-content">
        <div className="account">
          <Link to="account" onClick={() => setToggle(!toggle)}>
            <RiAccountCircleFill />
          </Link>
        </div>
        <div className="pages">
          <ul>
            <li>
              <Link to="shop" onClick={() => setToggle(!toggle)}>
                shop all
              </Link>
            </li>
            <li>
              <Link to="plant" onClick={() => setToggle(!toggle)}>
                plants
              </Link>
            </li>
            <li>
              <Link to="cactus" onClick={() => setToggle(!toggle)}>
                cacti
              </Link>
            </li>
            <li>
              <Link to="story" onClick={() => setToggle(!toggle)}>
                our story
              </Link>
            </li>
            <li>
              <Link to="questions" onClick={() => setToggle(!toggle)}>
                questions
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
