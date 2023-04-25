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
          <RiAccountCircleFill />
        </div>
        <div className="pages">
          <ul>
            <li>
              <Link>shop all</Link>
            </li>
            <li>
              <Link>plants</Link>
            </li>
            <li>
              <Link>cactus</Link>
            </li>
            <li>
              <Link>our story</Link>
            </li>
            <li>
              <Link>questions</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
