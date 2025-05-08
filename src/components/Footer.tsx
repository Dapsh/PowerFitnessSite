import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-column">
          <Link to="/" className="logo">
            <span className="logo-text">POWER<span className="accent">FIT</span></span>
          </Link>
          <p className="footer-description">
            Трансформируйте свое тело, обретите силу и достигните своих целей вместе с нашим фитнес клубом.
          </p>
          <div className="social-links">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><Instagram size={20} /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><Facebook size={20} /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><Twitter size={20} /></a>
          </div>
        </div>
        
        <div className="footer-column">
          <h3 className="footer-heading">Меню</h3>
          <ul className="footer-links">
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/about">О нас</Link></li>
            <li><Link to="/services">Услуги</Link></li>
            <li><Link to="/schedule">Расписание</Link></li>
            <li><Link to="/contact">Контакты</Link></li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h3 className="footer-heading">Услуги</h3>
          <ul className="footer-links">
            <li><Link to="/services">Персональные тренировки</Link></li>
            <li><Link to="/services">Групповые занятия</Link></li>
            <li><Link to="/services">Кардио зона</Link></li>
            <li><Link to="/services">Силовая зона</Link></li>
            <li><Link to="/services">Консультации диетолога</Link></li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h3 className="footer-heading">Контакты</h3>
          <ul className="contact-info">
            <li><Phone size={16} /> <a href="tel:+79001234567">+7 (900) 123-45-67</a></li>
            <li><Mail size={16} /> <a href="mailto:info@powerfit.ru">info@powerfit.ru</a></li>
            <li><MapPin size={16} /> <address>г. Москва, ул. Спортивная, д. 10</address></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">© {new Date().getFullYear()} POWERFIT. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;