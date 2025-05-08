import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, Users, Heart, Clock, Utensils, Brain } from 'lucide-react';
import '../styles/ServicesPage.css';

const ServicesPage: React.FC = () => {
  return (
    <div className="services-page">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Наши услуги</h1>
          <p className="page-description">Выберите подходящую программу тренировок для достижения ваших целей</p>
        </div>
      </div>
      
      <section className="services-overview">
        <div className="container">
          <div className="services-grid">
            <div className="service-item">
              <div className="service-icon">
                <Dumbbell size={48} />
              </div>
              <h2 className="service-title">Силовые тренировки</h2>
              <p className="service-description">
                Наши силовые тренировки помогут вам нарастить мышечную массу, увеличить силу и улучшить общую физическую форму. 
                Мы предлагаем как персональные, так и групповые занятия под руководством опытных тренеров.
              </p>
              <ul className="service-features">
                <li>Профессиональное силовое оборудование</li>
                <li>Индивидуальные программы тренировок</li>
                <li>Техники для всех уровней подготовки</li>
                <li>Отслеживание прогресса и результатов</li>
              </ul>
              <Link to="/contact" className="btn btn-secondary">Записаться</Link>
            </div>
            
            <div className="service-item">
              <div className="service-icon">
                <Users size={48} />
              </div>
              <h2 className="service-title">Групповые занятия</h2>
              <p className="service-description">
                Наши групповые занятия сочетают эффективные тренировки с веселой и мотивирующей атмосферой. 
                Выбирайте из множества программ, включая йогу, пилатес, зумбу и многое другое.
              </p>
              <ul className="service-features">
                <li>Более 20 различных программ</li>
                <li>Занятия для всех уровней подготовки</li>
                <li>Опытные и энергичные инструкторы</li>
                <li>Гибкое расписание занятий</li>
              </ul>
              <Link to="/schedule" className="btn btn-secondary">Расписание</Link>
            </div>
            
            <div className="service-item">
              <div className="service-icon">
                <Heart size={48} />
              </div>
              <h2 className="service-title">Кардио тренировки</h2>
              <p className="service-description">
                Улучшите свою выносливость, сожгите калории и укрепите сердечно-сосудистую систему с нашими кардио тренировками. 
                Мы предлагаем современные кардио-тренажеры и специализированные программы.
              </p>
              <ul className="service-features">
                <li>Новейшие кардио-тренажеры</li>
                <li>Программы интервальных тренировок</li>
                <li>Мониторинг сердечного ритма</li>
                <li>Персонализированные цели тренировок</li>
              </ul>
              <Link to="/contact" className="btn btn-secondary">Записаться</Link>
            </div>
            
            <div className="service-item">
              <div className="service-icon">
                <Utensils size={48} />
              </div>
              <h2 className="service-title">Консультации по питанию</h2>
              <p className="service-description">
                Правильное питание - ключевой фактор в достижении ваших фитнес-целей. Наши диетологи помогут вам разработать 
                персонализированный план питания, идеально дополняющий вашу программу тренировок.
              </p>
              <ul className="service-features">
                <li>Индивидуальные планы питания</li>
                <li>Анализ текущего рациона</li>
                <li>Рекомендации по спортивному питанию</li>
                <li>Регулярные консультации и корректировки</li>
              </ul>
              <Link to="/contact" className="btn btn-secondary">Консультация</Link>
            </div>
            
            <div className="service-item">
              <div className="service-icon">
                <Brain size={48} />
              </div>
              <h2 className="service-title">Персональные тренировки</h2>
              <p className="service-description">
                Получите максимальные результаты с персональными тренировками. Наши опытные тренеры разработают программу, 
                учитывающую ваши уникальные цели, уровень подготовки и предпочтения.
              </p>
              <ul className="service-features">
                <li>Индивидуальный подход к каждому клиенту</li>
                <li>Коррекция техники выполнения упражнений</li>
                <li>Гибкий график тренировок</li>
                <li>Максимальная эффективность и безопасность</li>
              </ul>
              <Link to="/contact" className="btn btn-secondary">Записаться</Link>
            </div>
            
            <div className="service-item">
              <div className="service-icon">
                <Clock size={48} />
              </div>
              <h2 className="service-title">Свободное посещение</h2>
              <p className="service-description">
                Занимайтесь в своем собственном темпе с нашими абонементами на свободное посещение. Получите доступ ко всему оборудованию
                клуба 24/7 и тренируйтесь когда вам удобно.
              </p>
              <ul className="service-features">
                <li>Доступ 24/7 к тренажерному залу</li>
                <li>Все зоны и оборудование клуба</li>
                <li>Гибкие условия членства</li>
                <li>Специальные акции для постоянных клиентов</li>
              </ul>
              <Link to="/contact" className="btn btn-secondary">Выбрать абонемент</Link>
            </div>
          </div>
        </div>
      </section>
      
      <section className="membership-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-subtitle">АБОНЕМЕНТЫ</span>
            <h2 className="section-title">Выберите подходящий тариф</h2>
            <p className="section-description">Мы предлагаем различные варианты членства, которые подойдут как новичкам, так и опытным спортсменам.</p>
          </div>
          
          <div className="membership-plans">
            <div className="plan-card">
              <div className="plan-header">
                <h3 className="plan-name">Базовый</h3>
                <div className="plan-price">
                  <span className="price-amount">2 500 ₽</span>
                  <span className="price-period">/ месяц</span>
                </div>
              </div>
              <div className="plan-features">
                <ul>
                  <li>Доступ в тренажерный зал</li>
                  <li>Базовая вводная тренировка</li>
                  <li>Доступ с 8:00 до 22:00</li>
                  <li className="not-available">Групповые занятия</li>
                  <li className="not-available">Персональные тренировки</li>
                  <li className="not-available">Консультации диетолога</li>
                </ul>
              </div>
              <div className="plan-footer">
                <Link to="/contact" className="btn btn-outline">Выбрать</Link>
              </div>
            </div>
            
            <div className="plan-card featured">
              <div className="plan-badge">Популярный</div>
              <div className="plan-header">
                <h3 className="plan-name">Стандартный</h3>
                <div className="plan-price">
                  <span className="price-amount">3 900 ₽</span>
                  <span className="price-period">/ месяц</span>
                </div>
              </div>
              <div className="plan-features">
                <ul>
                  <li>Доступ в тренажерный зал 24/7</li>
                  <li>Вводная персональная тренировка</li>
                  <li>8 групповых занятий</li>
                  <li>2 персональные тренировки</li>
                  <li className="not-available">Консультации диетолога</li>
                </ul>
              </div>
              <div className="plan-footer">
                <Link to="/contact" className="btn btn-primary">Выбрать</Link>
              </div>
            </div>
            
            <div className="plan-card">
              <div className="plan-header">
                <h3 className="plan-name">Премиум</h3>
                <div className="plan-price">
                  <span className="price-amount">5 500 ₽</span>
                  <span className="price-period">/ месяц</span>
                </div>
              </div>
              <div className="plan-features">
                <ul>
                  <li>Доступ в тренажерный зал 24/7</li>
                  <li>Расширенная программа тренировок</li>
                  <li>Неограниченные групповые занятия</li>
                  <li>4 персональные тренировки</li>
                  <li>1 консультация диетолога</li>
                </ul>
              </div>
              <div className="plan-footer">
                <Link to="/contact" className="btn btn-outline">Выбрать</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Не уверены, что выбрать?</h2>
            <p className="cta-text">Запишитесь на бесплатную ознакомительную тренировку и проконсультируйтесь с нашими специалистами</p>
            <Link to="/contact" className="btn btn-primary">Записаться на консультацию</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;