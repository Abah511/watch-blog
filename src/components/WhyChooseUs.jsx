import React from "react";
import "./WhyChooseUs.css";
import { FaShieldAlt, FaGlobe, FaHeadset, FaLock } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <h2>Why Choose Us</h2>
      <div className="features">
        <div className="feature-card">
          <FaShieldAlt className="icon" />
          <h4>100% Authentic Watches</h4>
          <p>We only sell genuine products from trusted brands.</p>
        </div>
        <div className="feature-card">
          <FaGlobe className="icon" />
          <h4>Worldwide Shipping</h4>
          <p>We deliver to over 150 countries globally.</p>
        </div>
        <div className="feature-card">
          <FaHeadset className="icon" />
          <h4>24/7 Customer Support</h4>
          <p>We're here to help, anytime you need us.</p>
        </div>
        <div className="feature-card">
          <FaLock className="icon" />
          <h4>Secure Payment</h4>
          <p>Your information is safe with us.</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
