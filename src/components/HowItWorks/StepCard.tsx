import React from 'react';
import '../../Styles/Stepcard.css'

interface StepCardProps {
    number: string;
    description: string;
}

const StepCard: React.FC<StepCardProps> = ({ number, description }) => {
    return (
        <div className="step-card">
            <div className="step-card__number">{number}</div>
            <div className="step-card__description">{description}</div>
        </div>
    );
};

export default StepCard;
