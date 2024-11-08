import React from "react";
import "../style.css"; // Ensure this CSS file exists and is correctly set up

const EsayImage = () => {
  return (
    <div className="container">
      <h1 className="title">Easy as 1, 2, 3...</h1>
      <div className="steps">
        <div className="step">
          <img
            src="https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-2foodgroups_vegetables_detailfeature.jpg?sfvrsn=226f1bc7_6"
            alt="Basket of vegetables"
            className="image"
          />
          <div className="text-outside">
            <h2>Download the app</h2>
            <p>Get the Mealpurples app for iOS or Android.</p>
          </div>
        </div>
        <div className="step">
          <img
            src="https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-2foodgroups_vegetables_detailfeature.jpg?sfvrsn=226f1bc7_6"
            alt="Basket of vegetables"
            className="image"
          />
          <div className="text-outside">
            <h2>Browse for deals</h2>
            <p>Find local grocery deals for up to 50% off and check out in the app.</p>
          </div>
        </div>
        <div className="step">
          <img
            src="https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-2foodgroups_vegetables_detailfeature.jpg?sfvrsn=226f1bc7_6"
            alt="Basket of vegetables"
            className="image"
          />
          <div className="text-outside">
            <h2>Pick up in store</h2>
            <p>Pick up your haul from your local grocery store.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EsayImage;
