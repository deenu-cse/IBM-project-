import React from 'react';
import '../../Styles/Sociallink.css'

function SocialLinks() {
    const socialPlatforms = ['Facebook', 'Instagram', 'LinkedIn', 'YouTube', 'Twitter'];

    return (
        <div className="social-links">
            <div className="social-links__container">
                <h3 className="social-links__title">Follow Us</h3>
                <nav className="social-links__nav">
                    {socialPlatforms.map((platform, index) => (
                        <div key={index}>{platform}</div>
                    ))}
                </nav>
            </div>
        </div>
    );
}

export default SocialLinks;
