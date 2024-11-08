import React from 'react';
import '../style.css';

export const Newslatter = () => {
  return (
    <div className="mealsurplus-container">
      <h2 className="heading">Never miss a deal</h2>
      <div className="input-container">
        <input type="email" placeholder="Your email, please" className="email-input" />
        <button className="signup-button">Sign me up!</button>
      </div>
      <h1 className="brand">Mealsurplus</h1>
    </div>
  );
};

export default Newslatter;
