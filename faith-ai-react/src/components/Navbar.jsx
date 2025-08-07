import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <h2>Faith AI</h2>
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>
          <div className={isOpen ? 'hamburger open' : 'hamburger'}></div>
        </div>
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li><a href="#home" onClick={toggleMenu}>Home</a></li>
          <li><a href="#features" onClick={toggleMenu}>Features</a></li>
          <li><a href="#about" onClick={toggleMenu}>About</a></li>
          <li><a href="#" className="cta-button">Try it out</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
