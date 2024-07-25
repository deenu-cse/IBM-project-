import React from 'react';
import '../../Styles/Welcomsection.css'

function WelcomeSection() {
    return (
        <section className="welcome-section">
            <div className="orange-bar" />
            <div className="content">
                <h2>WELCOME to EcoConnect</h2>
                <p>
                    Our platform connects NGOs, government agencies, civil society organizations, and individual changemakers to foster collaboration, resource sharing, and knowledge exchange for achieving the Sustainable Development Goals (SDGs).
                </p>
            </div>
        </section>
    );
};

export default WelcomeSection;
