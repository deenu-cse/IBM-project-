import React from 'react';
import TestimonialCard from './TestimonialCard.tsx';
import '../../Styles/Testimonialsection.css'

function TestimonialsSection() {
    return (
        <section className="testimonials-section">
            <h2 className="testimonials-section__title">Testimonials: Success Stories</h2>
            <div className="testimonials-section__content">
                <img loading="lazy" src="https://img.icons8.com/?size=100&id=99985&format=png&color=000000" alt="" className="testimonials-section__image" />
                <TestimonialCard
                    quote="We've successfully launched multiple projects through partnerships formed here, significantly advancing our SDG goals."
                    author="USER 1"
                />
                <img loading="lazy" src="https://img.icons8.com/?size=100&id=98971&format=png&color=#ff9900" alt="" className="testimonials-section__image" />
            </div>
        </section>
    );
}

export default TestimonialsSection;
