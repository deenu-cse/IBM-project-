import React from 'react';
import '../../Styles/Quicklink.css'

function QuickLinks() {
    const links = ['Home', 'About', 'Features', 'Partners', 'Resources', 'Community', 'Blog', 'Contact'];

    return (
        <div className="quick-links">
            <div className="quick-links__container">
                <h3 className="quick-links__title">Quick Links</h3>
                <nav className="quick-links__nav">
                    {links.map((link, index) => (
                        <div key={index}>{link}</div>
                    ))}
                </nav>
            </div>
        </div>
    );
}

export default QuickLinks;
