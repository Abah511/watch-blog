// components/PromoBanner.jsx
import "./PromoBanner.css";

const PromoBanner = () => {
  return (
    <div className="promo-banner">
      <div className="promo-text">
        <h2>🔥 Big Sale on Luxury Watches! 🔥</h2>
        <p>Up to 40% off on selected brands. Limited time offer!</p>
        <a
          href="https://example.com/sale" // Replace with your link
          target="_blank"
          rel="noopener noreferrer"
          className="promo-button"
        >
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default PromoBanner;
