import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import '../styles/Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <Link to="/" className="logo">
          <span className="logo-text">POWER<span className="accent">FIT</span></span>
        </Link>
        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Главная</Link></li>
            <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>О нас</Link></li>
            <li><Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>Услуги</Link></li>
            <li><Link to="/schedule" className={location.pathname === '/schedule' ? 'active' : ''}>Расписание</Link></li>
            <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Контакты</Link></li>
          </ul>
        </nav>
        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <Link to="/contact" className="header-cta">Записаться</Link>
      </div>
    </header>
  );
};

export default Header;