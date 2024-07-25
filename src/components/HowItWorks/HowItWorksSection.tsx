import React from 'react';
import StepCard from './StepCard.tsx';
import '../../Styles/Howit.css'

interface Step {
    number: string;
    description: string;
}

function HowItWorksSection() {
    const steps: Step[] = [
        { number: "1", description: "Create Your Profile – Sign up and provide information about your organization or individual expertise." },
        { number: "2", description: "Find Partners – Use our AI-powered matching tool to find potential partners." },
        { number: "3", description: "Collaborate – Use our tools to communicate, manage projects, and share resources." },
        { number: "4", description: "Track Progress – Monitor your impact and contribute to achieving the SDGs." }
    ];

    return (
        <section className="how-it-works-section">
            <div className="how-it-works-section__content">
                <h2 className="how-it-works-section__title">Steps: How it Works</h2>
                {steps.map((step, index) => (
                    <StepCard key={index} number={step.number} description={step.description} />
                ))}
            </div>
        </section>
    );
}

export default HowItWorksSection;
