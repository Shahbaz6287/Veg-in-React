// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
import Qrcode from "../assets/Qrcode.png";
import React from "react";
import "../style.css";

export const Footer = () => {
  return (
    <footer className="custom-footer">
      <div className="custom-container">
        <div className="custom-row">
          <div className="custom-col-md-4">
            <h5>About Us</h5>
            <p>
              Mealsurplus is dedicated to reducing food waste by rerouting
              excess food to those in need. Join us in making a difference!
            </p>
          </div>
          <div className="custom-col-md-4">
            <h5>Contact Us</h5>
            <ul className="custom-list-unstyled">
              <li>Email: Shahbaz.anjoom@nprservices.in</li>
              <li>Phone: 6287011200</li>
            </ul>
          </div>
          <div className="custom-col-md-4">
            <h5>Follow Us</h5>
            <ul className="custom-list-unstyled">
              <li>
                <a href="https://facebook.com">Facebook</a>
              </li>
              <li>
                <a href="https://twitter.com">Twitter</a>
              </li>
              <li>
                <a href="https://instagram.com">Instagram</a>
              </li>
              <li>
                <a href="https://linkedin.com">LinkedIn</a>
              </li>
            </ul>
          </div>
          <div className="custom-col-md-4">
            <h5>Mealsurplus</h5>
            <h6>Our Impact</h6>
            <h6>Press</h6>
            <h6>Careers</h6>
          </div>
          <div className="custom-col-md-4">
            <h5>Scan this QR code to download the resource code</h5>
            <img src={Qrcode} alt="QR Code" className="custom-qr-code" />
          </div>
        </div>
        <div className="custom-text-center custom-py-3">
          <small>2024 Mealsurplus. All rights reserved.</small>
          <small>Thank you NPRS</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
