// components/NewsletterForm.jsx
import React, { useState } from 'react';
import './NewsletterForm.css';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      localStorage.setItem('newsletterEmail', email);
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <div className="newsletter-container">
      <h2>Never Miss a Watch Update!

</h2>
      <p>Get updates about the latest watches and offers.</p>
      <form onSubmit={handleSubscribe} className="newsletter-form">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Subscribe</button>
      </form>
      {subscribed && <p className="success-msg">Thanks for subscribing!</p>}
    </div>
  );
};

export default NewsletterForm;
