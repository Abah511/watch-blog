import React from "react";
import WatchSlider from "../components/WatchSlider";
import PromoBanner from "../components/PromoBanner";
import NewsletterForm from "../components/NewsletterForm";
import SocialLinks from "../components/SocialLinks";
import WhyChooseUs from "../components/WhyChooseUs";

const Home = () => (
  <div className="home-container">
    <div className="intro-section">
      <h1 className="title">Welcome to the New Watch Blog</h1>
      <p className="description">Explore top brands, blogs, and more.</p>
    </div>

    <WatchSlider />
    <PromoBanner />
    <WhyChooseUs />
    <NewsletterForm />
    <SocialLinks />
  </div>
);

export default Home;
