import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Heart, Clock, Users } from 'lucide-react';
import '../styles/AboutPage.css';

const AboutPage: React.FC = () => {
  return (
    <div className="about-page">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">О нас</h1>
          <p className="page-description">Узнайте больше о фитнес-клубе POWERFIT и нашей миссии</p>
        </div>
      </div>
      
      <section className="story-section">
        <div className="container">
          <div className="story-content">
            <div className="story-image">
              <img src="https://images.pexels.com/photos/4162487/pexels-photo-4162487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="История POWERFIT" />
            </div>
            <div className="story-text">
              <span className="section-subtitle">НАША ИСТОРИЯ</span>
              <h2 className="section-title">Как всё начиналось</h2>
              <p>POWERFIT был основан в 2018 году группой энтузиастов фитнеса, которые хотели создать место, где каждый человек будет чувствовать себя комфортно и мотивированно для достижения своих фитнес-целей.</p>
              <p>Начав с небольшого зала, мы постепенно расширялись, добавляя новое оборудование и программы тренировок. Сегодня POWERFIT - это современный фитнес-клуб с полным спектром услуг для поддержания здорового образа жизни.</p>
              <p>Наша цель - помочь каждому клиенту достичь желаемых результатов, предоставляя профессиональную поддержку, мотивацию и необходимые знания.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="vision-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-subtitle">НАША МИССИЯ</span>
            <h2 className="section-title">Вдохновлять на здоровый образ жизни</h2>
            <p className="section-description">Мы стремимся создать сообщество единомышленников, где каждый может развиваться, становиться сильнее и здоровее. Наша миссия - сделать фитнес доступным и приятным для всех.</p>
          </div>
          
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <Users size={40} />
              </div>
              <h3 className="value-title">Сообщество</h3>
              <p className="value-description">Мы создаем дружелюбную атмосферу, где все чувствуют себя частью команды, поддерживают и мотивируют друг друга.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <Award size={40} />
              </div>
              <h3 className="value-title">Качество</h3>
              <p className="value-description">Мы предлагаем только лучшее оборудование, программы и сервис, постоянно совершенствуя наши услуги.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <Heart size={40} />
              </div>
              <h3 className="value-title">Здоровье</h3>
              <p className="value-description">Мы пропагандируем целостный подход к здоровью, включающий физические упражнения, правильное питание и отдых.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <Clock size={40} />
              </div>
              <h3 className="value-title">Доступность</h3>
              <p className="value-description">Мы делаем фитнес доступным для всех, предлагая гибкие графики работы и разнообразные программы.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="equipment-section">
        <div className="container">
          <div className="equipment-content">
            <div className="equipment-text">
              <span className="section-subtitle">ОБОРУДОВАНИЕ</span>
              <h2 className="section-title">Современные тренажеры</h2>
              <p>В POWERFIT мы гордимся нашим первоклассным оборудованием от ведущих мировых производителей. Наш клуб оснащен новейшими тренажерами для кардио и силовых тренировок, а также специализированным оборудованием для функциональных тренировок.</p>
              <ul className="equipment-features">
                <li>Профессиональные силовые тренажеры</li>
                <li>Свободные веса и грузоблочные тренажеры</li>
                <li>Современные кардио-тренажеры с мониторами</li>
                <li>Оборудование для функционального тренинга</li>
                <li>Зона для стретчинга и восстановления</li>
              </ul>
            </div>
            <div className="equipment-gallery">
              <div className="gallery-item">
                <img src="https://images.pexels.com/photos/4162579/pexels-photo-4162579.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Силовые тренажеры" />
              </div>
              <div className="gallery-item">
                <img src="https://images.pexels.com/photos/4162451/pexels-photo-4162451.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Кардио зона" />
              </div>
              <div className="gallery-item">
                <img src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Функциональная зона" />
              </div>
              <div className="gallery-item">
                <img src="https://images.pexels.com/photos/39671/physiotherapy-weight-training-dumbbell-exercise-39671.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Зона свободных весов" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="team-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-subtitle">НАША КОМАНДА</span>
            <h2 className="section-title">Профессиональные тренеры</h2>
            <p className="section-description">Наши тренеры - это сертифицированные специалисты с богатым опытом работы, которые помогают клиентам достигать их целей безопасно и эффективно.</p>
          </div>
          
          <div className="team-grid">
            <div className="team-member">
              <img src="https://i.postimg.cc/t473cDT7/Chat-GPT-Image-8-2025-00-54-34.png" alt="Давид Хубларян" className="member-image" />
              <div className="member-info">
                <h3 className="member-name">Давид Хубларян</h3>
                <p className="member-role">Главный тренер</p>
                <p className="member-bio">Мастер спорта по пауэрлифтингу с 10-летним опытом работы. Специализируется на силовых тренировках и работе с профессиональными спортсменами.</p>
              </div>
            </div>
            
            <div className="team-member">
              <img src="https://i.postimg.cc/jqFdXhGM/Chat-GPT-Image-8-2025-01-03-25.png" alt="Акоб Манучарян" className="member-image" />
              <div className="member-info">
                <h3 className="member-name">Акоб Манучарян</h3>
                <p className="member-role">Инструктор групповых программ</p>
                <p className="member-bio">Сертифицированный тренер по йоге и пилатесу с 8-летним опытом. Помогает клиентам улучшить гибкость, координацию и общее самочувствие.</p>
              </div>
            </div>
            
            <div className="team-member">
              <img src="https://i.postimg.cc/rwYB6hNH/Chat-GPT-Image-8-2025-01-11-06.png" alt="Арсений Наумов" className="member-image" />
              <div className="member-info">
                <h3 className="member-name">Арсений Наумов</h3>
                <p className="member-role">Диетолог</p>
                <p className="member-bio">Эксперт по спортивному питанию с медицинским образованием. Разрабатывает индивидуальные планы питания для достижения оптимальных результатов.</p>
              </div>
            </div>
            
            <div className="team-member">
              <img src="https://i.postimg.cc/63x1wF2M/Chat-GPT-Image-8-2025-01-12-52.png" alt="Степан Корка" className="member-image" />
              <div className="member-info">
                <h3 className="member-name">Степан Корка</h3>
                <p className="member-role">Персональный тренер</p>
                <p className="member-bio">Специалист по функциональным тренировкам и реабилитации после травм. Помогает клиентам восстановить физическую форму и укрепить тело.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Готовы присоединиться к нашему клубу?</h2>
            <p className="cta-text">Запишитесь на бесплатную ознакомительную тренировку и ощутите преимущества POWERFIT</p>
            <Link to="/contact" className="btn btn-primary">Записаться сейчас</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;