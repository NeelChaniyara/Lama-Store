import React from 'react';

import './aboutus.css';

const About = () => {
  return (
    <div className="home-root">
      <h1 className="why-choose-us">About us</h1>
      <div className="middle">
        <div className="video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/U-HLXNK-r84?si=VDuGA9FfaOiUFsZ4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="we-are-a">
          <p>
            At LamaStore, we believe that everyone deserves to look and feel great without breaking the bank. That's why we offer our entire collection at a jaw-dropping discount of 80-90% off retail prices. Whether you're looking for casual everyday wear, elegant evening attire, or anything in between, we have you covered with our diverse selection of clothing options.
          </p>
          <br />
          <p>
            Shopping with us is not just about getting amazing deals; it's also about enjoying a hassle-free experience. Join the countless satisfied customers who have transformed their wardrobes with our affordable and fashionable clothing. Explore our collection today and discover the perfect outfits to express your unique style at prices that won't break the bank!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
