import React from 'react';
import Header from '../src/components/layout/Header.tsx';
import HeroSection from '../src/components/Hero/HeroSection.tsx';
import WelcomeSection from '../src/components/Welcome/WelcomeSection.tsx';
import FeaturesSection from '../src/components/Features/FeaturesSection.tsx';
import HowItWorksSection from '../src/components/HowItWorks/HowItWorksSection.tsx';
import TestimonialsSection from '../src/components/Testimonials/TestimonialsSection.tsx';
import CTASection from '../src/components/CTA/CTASection.tsx';
import BlogSection from '../src/components/Blog/BlogSection.tsx';
import Footer from '../src/components/Footer/Footer.tsx';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <HeroSection />
        <WelcomeSection />
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <CTASection />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
