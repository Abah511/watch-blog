// src/components/Footer.jsx
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="footer">
    <div className="footer-links">
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/faqs">FAQs</Link>
      <Link to="/privacy">Privacy Policy</Link>
      <Link to="/terms">Terms & Conditions</Link>
    </div>
    <p className="footer-text">© 2025 Watch Blog. All rights reserved.</p>
  </footer>
);

export default Footer;
