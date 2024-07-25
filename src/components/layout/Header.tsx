import React from 'react';
import SearchBar from './SearchBar.tsx';
import AuthButtons from './AuthButtons.tsx';
import Navigation from './Navigation.tsx';
import '../../Styles/Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-title">
          EcoConnect Hub
        </div>
        <SearchBar />
        <AuthButtons />
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
