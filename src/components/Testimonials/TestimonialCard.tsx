import React from 'react';
import '../../Styles/Testimonialcard.css'



const TestimonialCard = ({ quote, author }) => {
    return (
        <div className="testimonial-card">
            <div className="testimonial-card__content">
                <img
                    loading="lazy"
                    src="https://i.pinimg.com/564x/f0/eb/f7/f0ebf73d8a27ecdc689423fe87cf937c.jpg"
                    alt="User avatar"
                    className="testimonial-card__image"
                />
                <div className="testimonial-card__text">{quote}</div>
            </div>
            <div className="testimonial-card__author">-- {author}</div>
        </div>
    );
};

export default TestimonialCard;
