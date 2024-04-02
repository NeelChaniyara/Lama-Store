import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Shirt</span>
          <span>T-shirt</span>
          <span>Jacket</span>
          <span>Pants</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
          Join the countless satisfied customers who have transformed their wardrobes with our affordable and fashionable clothing. Explore our collection today and discover the perfect outfits to express your unique style at prices that won't break the bank!
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
          No matter how you choose to reach out, we're committed to providing you with exceptional service and ensuring your shopping experience with us is enjoyable and seamless. We value your feedback and are here to assist you every step of the way.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Lamastore</span>
          <span className="copyright">
            © Copyright 2024. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
