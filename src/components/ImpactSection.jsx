import React from "react";
import "../style.css";

const ImpactSection = () => {
  return (
    <div className="impact-wrapper">
      <div className="impact-image-container">
        <img
          src="https://i.ndtvimg.com/i/2017-02/fruits-and-vegetables_650x366_41486465566.jpg?im=FaceCrop,algorithm=dnn,width=345,height=250"
          alt="Fruit Basket"
          className="impact-main-image"
        />
      </div>
      <div className="impact-content">
        <h2 className="impact-description">
          We’ve rerouted millions of pounds of food heading to landfills to dinner tables across the US & Canada.
        </h2>
        <div className="impact-buttons">
          <button className="btn-learn-more">Learn More</button>
          <button className="btn-download">
            <span className="download-icon">⬇️</span> Download our 2024 Impact Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImpactSection;
