import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, Clock, Users, Heart } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import TrainerCard from '../components/TrainerCard';
import TestimonialCard from '../components/TestimonialCard';
import FaqAccordion from '../components/FaqAccordion';
import '../styles/HomePage.css';

const HomePage: React.FC = () => {
  const services = [
    {
      id: 1,
      icon: <Dumbbell size={40} />,
      title: 'Силовые тренировки',
      description: 'Профессиональное силовое оборудование и персональное сопровождение для достижения максимальных результатов.'
    },
    {
      id: 2,
      icon: <Users size={40} />,
      title: 'Групповые занятия',
      description: 'Разнообразные групповые программы: йога, пилатес, зумба, степ-аэробика, функциональный тренинг.'
    },
    {
      id: 3,
      icon: <Clock size={40} />,
      title: 'Кардио тренировки',
      description: 'Современные кардио-тренажеры для эффективной тренировки сердечно-сосудистой системы и сжигания калорий.'
    },
    {
      id: 4,
      icon: <Heart size={40} />,
      title: 'Персональные программы',
      description: 'Индивидуальный подход к вашим целям. Персональная программа питания и тренировок от наших экспертов.'
    }
  ];

  const trainers = [
    {
      id: 1,
      name: 'Хубларян Давид',
      role: 'Главный тренер',
      image: 'https://i.postimg.cc/t473cDT7/Chat-GPT-Image-8-2025-00-54-34.png',
      description: 'Мастер спорта по пауэрлифтингу, 10 лет опыта тренерской работы.'
    },
    {
      id: 2,
      name: 'Акоб Манучарян',
      role: 'Инструктор групповых программ',
      image: 'https://i.postimg.cc/jqFdXhGM/Chat-GPT-Image-8-2025-01-03-25.png',
      description: 'Сертифицированный тренер по йоге и пилатесу, 8 лет опыта работы.'
    },
    {
      id: 3,
      name: 'Арсений Наумов',
      role: 'Диетолог',
      image: 'https://i.postimg.cc/rwYB6hNH/Chat-GPT-Image-8-2025-01-11-06.png',
      description: 'Эксперт по спортивному питанию, составляет индивидуальные планы питания.'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Сергей Иванов',
      text: 'Занимаюсь в POWERFIT уже год. Отличные тренажеры, профессиональные тренеры и дружелюбная атмосфера. Результаты превзошли все ожидания!',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 2,
      name: 'Мария Кузнецова',
      text: 'Групповые тренировки просто супер! Елена - прекрасный тренер, который всегда мотивирует и помогает достичь лучших результатов.',
      image: 'https://images.pexels.com/photos/38554/girl-people-landscape-sun-38554.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 3,
      name: 'Дмитрий Соколов',
      text: 'Благодаря персональным тренировкам я смог достичь своей цели - набрать мышечную массу и улучшить выносливость. Спасибо команде POWERFIT!',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const faqs = [
    {
      id: 1,
      question: 'Какие у вас часы работы?',
      answer: 'Мы открыты ежедневно с 7:00 до 23:00 в будние дни и с 9:00 до 21:00 в выходные.'
    },
    {
      id: 2,
      question: 'Предоставляете ли вы индивидуальные тренировки?',
      answer: 'Да, мы предлагаем персональные тренировки с опытными тренерами. Вы можете забронировать сессию через наш сайт или на стойке администратора.'
    },
    {
      id: 3,
      question: 'Какие виды абонементов вы предлагаете?',
      answer: 'Мы предлагаем различные типы абонементов: дневные, месячные, квартальные и годовые. Также есть специальные предложения для студентов и пенсионеров.'
    },
    {
      id: 4,
      question: 'Есть ли у вас душевые и раздевалки?',
      answer: 'Да, в нашем клубе есть комфортные раздевалки с индивидуальными шкафчиками, душевые кабины, фены и другие удобства.'
    }
  ];

  return (
    <div className="home-page">
      <HeroSection />
      
      {/* Услуги */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">НАШИ УСЛУГИ</span>
            <h2 className="section-title">Тренировки для достижения ваших целей</h2>
          </div>
          <div className="services-grid">
            {services.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="btn btn-primary">Все услуги</Link>
          </div>
        </div>
      </section>

      {/* О нас */}
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <span className="section-subtitle">О POWERFIT</span>
              <h2 className="section-title">Почему выбирают нас</h2>
              <p>POWERFIT - современный фитнес-клуб, оснащенный новейшим оборудованием и укомплектованный командой опытных тренеров. Мы создаем идеальную атмосферу для тренировок, которая мотивирует и вдохновляет на достижение результатов.</p>
              <ul className="about-features">
                <li>Современное оборудование ведущих брендов</li>
                <li>Профессиональные сертифицированные тренеры</li>
                <li>Просторные тренировочные зоны</li>
                <li>Удобное расположение и график работы</li>
                <li>Доступные цены и гибкая система абонементов</li>
              </ul>
              <Link to="/about" className="btn btn-secondary">Подробнее о нас</Link>
            </div>
            <div className="about-image">
              <img src="https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Тренажерный зал POWERFIT" />
            </div>
          </div>
        </div>
      </section>

      {/* Тренеры */}
      <section className="trainers-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">НАША КОМАНДА</span>
            <h2 className="section-title">Профессиональные тренеры</h2>
          </div>
          <div className="trainers-grid">
            {trainers.map(trainer => (
              <TrainerCard key={trainer.id} trainer={trainer} />
            ))}
          </div>
        </div>
      </section>

      {/* Статистика */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">лет опыта</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">1000+</span>
              <span className="stat-label">довольных клиентов</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">20+</span>
              <span className="stat-label">профессиональных тренеров</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">40+</span>
              <span className="stat-label">групповых программ</span>
            </div>
          </div>
        </div>
      </section>

      {/* Отзывы */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">ОТЗЫВЫ</span>
            <h2 className="section-title">Что говорят наши клиенты</h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.map(testimonial => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Запись на тренировку */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Готовы начать свой путь к идеальной форме?</h2>
            <p className="cta-text">Запишитесь на бесплатную ознакомительную тренировку прямо сейчас!</p>
            <Link to="/contact" className="btn btn-primary">Записаться на тренировку</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">ВОПРОСЫ И ОТВЕТЫ</span>
            <h2 className="section-title">Часто задаваемые вопросы</h2>
          </div>
          <div className="faq-container">
            {faqs.map(faq => (
              <FaqAccordion key={faq.id} faq={faq} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;