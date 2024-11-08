import React from 'react';
import '../style.css';

const DealSection = () => {
  return (
    <div className="deal-section">
      <h1 className="deal-title">Real families, real deals</h1>
      <div className="card-container">
        <div className="deal-card">
          <p className="card-text">
            <strong>Building Team:</strong> Hiring talents for the Tech & operations.
          </p>
        </div>
        <div className="deal-card">
          <p className="card-text">
            <strong>Operation cost:</strong> Day to Day Operations, Salaries, Cloud cost, etc.
          </p>
        </div>
        <div className="deal-card">
          <p className="card-text">
            <strong>Marketing & selling cost:</strong> Social Media marketing, SEOs, Influencer marketing cost, etc.
          </p>
          <img
            src="https://t3.ftcdn.net/jpg/03/98/61/96/360_F_398619615_g8iqFtDWH5gsKjE16H6iNQ6h8BhywuFS.jpg"
            alt="Marketing"
            className="card-image"
          />
        </div>
        <div className="deal-card">
          <p className="card-text">
            <strong>Capital Expenditure:</strong> App, Tech Infra, furniture & fixtures etc.
          </p>
          <img
            src="https://t3.ftcdn.net/jpg/03/98/61/96/360_F_398619615_g8iqFtDWH5gsKjE16H6iNQ6h8BhywuFS.jpg"
            alt="Capital Expenditure"
            className="card-image"
          />
        </div>
      </div>
    </div>
  );
};

export default DealSection;
