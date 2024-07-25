import React from 'react';
import '../../Styles/Herosection.css'

function HeroSection() {
  return (
    <section className="hero-section">
      <img
        loading="lazy"
        src="https://papers.co/wallpaper/papers.co-od37-nature-city-sunset-skyscraper-building-35-3840x2160-4k-wallpaper.jpg"
        alt="Background image showing sustainable development"
        className="background-image"
      />
      <div className="content">
        <h1>Connecting Partnerships for a Sustainable Future</h1>
        <p>
          Join a global network dedicated to fostering collaboration and
          achieving the Sustainable Development Goals.
        </p>
        <div className="buttons">
          <button className="join-button">Join Now</button>
          <button className="learn-button">Learn More</button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
