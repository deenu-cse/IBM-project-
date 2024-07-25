import React from 'react';
import '../../Styles/Newsletter.css'

function NewsletterSubscription() {
  return (
    <div className="newsletter-subscription">
      <h3 className="newsletter-subscription__title">
        Subscribe to our newsletter for the latest updates and opportunities.
      </h3>
      <form className="newsletter-subscription__form">
        <input
          type="email"
          placeholder="Your Email Address"
          aria-label="Your Email Address"
          className="newsletter-subscription__input"
        />
        <button type="submit" className="newsletter-subscription__button">
          Get Started
        </button>
      </form>
    </div>
  );
}

export default NewsletterSubscription;
