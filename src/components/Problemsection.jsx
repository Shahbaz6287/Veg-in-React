import React from "react";
import "../style.css";

const ProblemSection = () => {
  return (
    <div className="section-container">
      <h1 className="section-title">What we are solving</h1>
      <div className="section-content">
        <div className="image-wrapper">
          <img
            src="https://foodtechnotes.com/wp-content/uploads/2020/06/fruits-and-vegetables.jpg"
            alt="Basket of vegetables"
            className="section-image"
          />
        </div>
        <p className="section-text">
          In India, 40% of the food wasted is equivalent to nearly 92,000 crore/year.
        </p>
      </div>
    </div>
  );
};

export default ProblemSection;
