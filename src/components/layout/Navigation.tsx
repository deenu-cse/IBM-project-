import React, { useState, useEffect } from 'react';
import '../../Styles/Navigation.css';

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navItems = ['Home', 'About', 'Features', 'Partners', 'Resources', 'Community', 'Blog', 'Contact'];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 963);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navigation">
      {isMobile && (
        <button className="menu-button" onClick={handleMenuToggle}>
          Menu
        </button>
      )}
      {isMenuOpen && (
        <div className="menu-card">
          <div className="menu-card-header">
            <button className="close-button" onClick={handleMenuToggle}>
              ×
            </button>
          </div>
          <div className="menu-card-items">
            {navItems.map((item, index) => (
              <div key={index} className="menu-card-item">{item}</div>
            ))}
          </div>
        </div>
      )}
      <div className="navigation-items">
        {navItems.map((item, index) => (
          <div key={index} className={index === 0 ? 'navigation-item grow' : 'navigation-item'}>{item}</div>
        ))}
      </div>
    </nav>
  );
}

export default Navigation;