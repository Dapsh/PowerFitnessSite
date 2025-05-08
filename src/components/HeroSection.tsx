import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HeroSection.css';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            ТРЕНИРУЙСЯ ЛУЧШЕ.<br />
            СТАНОВИСЬ СИЛЬНЕЕ.
          </h1>
          <p className="hero-text">
            Трансформируйте свое тело, обретите силу и достигните своих фитнес-целей 
            вместе с лучшими тренерами и современным оборудованием.
          </p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn btn-primary">Начать тренировки</Link>
            <Link to="/about" className="btn btn-secondary">Узнать больше</Link>
          </div>
          <div className="hero-features">
            <div className="hero-feature">
              <span className="feature-number">24/7</span>
              <span className="feature-text">Доступ в клуб</span>
            </div>
            <div className="hero-feature">
              <span className="feature-number">50+</span>
              <span className="feature-text">Тренажеров</span>
            </div>
            <div className="hero-feature">
              <span className="feature-number">20+</span>
              <span className="feature-text">Программ</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;