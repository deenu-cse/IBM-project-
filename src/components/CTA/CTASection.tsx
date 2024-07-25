import React from 'react';
import '../../Styles/CTAsection.css'

function CTASection() {
    return (
        <section className="cta-section">
            <div className="cta-section__container">
                <h2 className="cta-section__title">Join Our Community</h2>
                <p className="cta-section__description">
                    Ready to make a difference? Join our community of changemakers today.
                </p>
                <button className="cta-section__button">Get Started</button>
            </div>
        </section>
    );
}

export default CTASection;
