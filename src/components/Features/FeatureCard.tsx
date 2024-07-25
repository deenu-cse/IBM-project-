import React from 'react';
import '../../Styles/Featurecard.css'


function FeatureCard ({ title, description }) {
    return (
        <div className="feature-card">
            <h3 className="feature-card__title">{title}</h3>
            <p className="feature-card__description">{description}</p>
        </div>
    );
};

export default FeatureCard;
