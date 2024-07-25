import React from 'react';
import QuickLinks from './QuickLinks.tsx';
import SocialLinks from './SocialLinks.tsx';
import ContactInfo from './ContactInfo.tsx';
import NewsletterSubscription from './NewsletterSubscription.tsx';
import '../../Styles/Footer.css'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__links">
                    <QuickLinks />
                    <SocialLinks />
                </div>
                <ContactInfo />
            </div>
            <NewsletterSubscription />
        </footer>
    );
};

export default Footer;
