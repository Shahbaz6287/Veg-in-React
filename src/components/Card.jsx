
import FreshImageA from "../assets/FreshImageA.jpg";
import React from "react";
import "../style.css";

const Card = () => {
  return (
    <div className="banner">
      <div className="image-container">
        <img src={FreshImageA} alt="Fresh vegetables in a crate" className="background-image" />
        <div className="text-overlay">
          <h1>The app for grocery’s best kept deals</h1>
          <p>India produces the second highest food waste in the world.</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
