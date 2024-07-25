import React from 'react';
import FeatureCard from './FeatureCard.tsx';
import '../../Styles/FeaturesSection.css'

interface Feature {
    title: string;
    description: string;
}

function FeaturesSection() {
    const features: Feature[] = [
        {
            title: "Partnership Matching",
            description: "Connect with like-minded organizations and individuals to collaborate on impactful projects."
        },
        {
            title: "Collaboration Tools",
            description: "Utilize our communication and project management tools to streamline your collaborative efforts."
        },
        {
            title: "Resource Hub",
            description: "Access a curated collection of best practices, case studies, and research to support your initiatives."
        },
        {
            title: "Impact Tracking",
            description: "Monitor your progress and report on the impact of your collaborative projects towards achieving the SDGs."
        }
    ];

    return (
        <section className="features-section">
            <h2 className="features-section__title">KEY FEATURES :</h2>
            <div className="features-section__cards">
                {features.map((feature, index) => (
                    <FeatureCard key={index} title={feature.title} description={feature.description} />
                ))}
            </div>
        </section>
    );
}

export default FeaturesSection;
