import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Logo/Brand */}
          <Link to="/" className="logo" onClick={closeMenu}>
            <span className="logo-icon">🔧</span>
            <span className="logo-text">
              <span className="logo-primary">ProPlumb</span>
              <span className="logo-secondary">Canada</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <Link 
              to="/" 
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className={`nav-link ${isActive('/services') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Services
            </Link>
            <Link 
              to="/about" 
              className={`nav-link ${isActive('/about') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Contact
            </Link>
            
            {/* Mobile CTA in menu */}
            <a href="tel:+1-800-555-PLUMB" className="btn btn-primary btn-mobile">
              <span className="btn-icon">📞</span>
              Call Now
            </a>
          </nav>

          {/* Desktop CTA Button */}
          <a href="tel:+1-800-555-PLUMB" className="btn btn-primary btn-desktop">
            <span className="btn-icon">📞</span>
            Call Now
          </a>

          {/* Mobile Menu Toggle */}
          <button 
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className="menu-bar"></span>
            <span className="menu-bar"></span>
            <span className="menu-bar"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
