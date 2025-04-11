import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      {/* Hero Section */}
      <div className="contact-hero">
        <h1>Get in Touch</h1>
        <p>We'd love to hear from you! Reach out for inquiries, support, or just to say hello.</p>
      </div>

      {/* Main Content */}
      <div className="contact-content">
        {/* Contact Form */}
        <div className="contact-form-container">
          <h2>Send Us a Message</h2>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" placeholder="John Doe" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="john@example.com" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" placeholder="How can we help?" />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea id="message" rows="5" placeholder="Type your message here..." required></textarea>
            </div>
            
            <button type="submit" className="submit-btn">
              <FaPaperPlane /> Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="contact-info">
          <h2>Contact Information</h2>
          
          <div className="info-card">
            <FaPhone className="info-icon" />
            <div>
              <h3>Phone</h3>
              <p>+1 (555) 123-4567</p>
              <p>+1 (555) 987-6543</p>
            </div>
          </div>
          
          <div className="info-card">
            <FaEnvelope className="info-icon" />
            <div>
              <h3>Email</h3>
              <p>info@watchblog.com</p>
              <p>support@watchblog.com</p>
            </div>
          </div>
          
          <div className="info-card">
            <FaMapMarkerAlt className="info-icon" />
            <div>
              <h3>Address</h3>
              <p>123 Horology Street</p>
              <p>Watchville, WC 10001</p>
            </div>
          </div>
          
          <div className="info-card">
            <FaClock className="info-icon" />
            <div>
              <h3>Business Hours</h3>
              <p>Monday - Friday: 9am - 6pm</p>
              <p>Saturday: 10am - 4pm</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="map-container">
        <h2>Find Us On Map</h2>
        <div className="map-placeholder">
          {/* Replace with actual map embed code */}
          <p>Map would be displayed here</p>
        </div>
      </div>

      {/* FAQ Preview */}
      <div className="faq-preview">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h3>How do I track my order?</h3>
            <p>Once shipped, you'll receive a tracking number via email to monitor your package.</p>
          </div>
          <div className="faq-item">
            <h3>What's your return policy?</h3>
            <p>We accept returns within 30 days of purchase in original condition.</p>
          </div>
          <div className="faq-item">
            <h3>Do you offer international shipping?</h3>
            <p>Yes, we ship worldwide with calculated shipping costs at checkout.</p>
          </div>
          <div className="faq-item">
            <h3>How can I authenticate my watch?</h3>
            <p>All our watches come with certificates of authenticity.</p>
          </div>
        </div>
        <a href="/faqs" className="view-all-btn">View All FAQs →</a>
      </div>
    </div>
  );
};

export default Contact;