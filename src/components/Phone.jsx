import React from "react";
import "../style.css"; // Ensure this CSS file exists and is correctly set up

const Phone = () => {
  return (
    <div className="phone-container-custom">
      <div className="left-section-custom">
        <h1>Solutions/<br /> What does Meal Surplus Do?</h1>
      </div>
      <div className="center-section-custom">
        <img 
          src="https://t4.ftcdn.net/jpg/02/97/35/11/360_F_297351123_gd71TTj4GzWtalft9fIQF8XcqsOnwj8S.jpg" 
          alt="Phone displaying app"
          className="phone-image-custom"
        />
      </div>
      <div className="right-section-custom">
        <p>
          Meal Surplus partners with cafes, grocery stores, local farmers to sell surplus or near-expiration food at discounted prices via our mobile app, reducing food waste by diverting these items from landfills and offering them to consumers at lower costs.
        </p>
      </div>
    </div>
  );
};

export default Phone;
