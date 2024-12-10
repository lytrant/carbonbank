// src/components/Footer.js
// import React from 'react';
// Footer.jsx
import React from "react";
import "./Footer.scss";
import logo from '../assets/logo.png'


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Logo and Address */}
        <div className="footer__section">
          <img src={logo} alt="Carbon Bank Logo" className="footer__logo" />
          <p className="footer__company-name">THATA GROUP CO.,LTD</p>
          <p className="footer__company-id">((03 16776448))</p>
          <address className="footer__address">
          161A Tan Quy, Tan Quy Ward, Tan Phu District, Ho Chi Minh city, Viet Nam<br />
          </address>
        </div>
        <div style={{display: "flex"}}>
        {/* About Links */}
        <div className="footer__section">
          <h3 className="footer__heading">About</h3>
          <ul className="footer__links">
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Other Links */}
        <div className="footer__section">
          <h3 className="footer__heading">Others</h3>
          <ul className="footer__links">
            <li>
              <a href="#faq">FAQ</a>
            </li>
            <li>
              <a href="#career">Career</a>
            </li>
            <li>
              <a href="#privacy-policy">Privacy Policy</a>
            </li>
          </ul>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
