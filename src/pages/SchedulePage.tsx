import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/SchedulePage.css';

interface ScheduleItem {
  id: number;
  time: string;
  class: string;
  trainer: string;
  duration: string;
  level: 'Начинающий' | 'Средний' | 'Продвинутый' | 'Все уровни';
}

type DaySchedule = ScheduleItem[];

type WeeklySchedule = {
  [key: string]: DaySchedule;
};

const SchedulePage: React.FC = () => {
  const weekDays = [
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
    'Воскресенье'
  ];
  
  const [activeDay, setActiveDay] = useState(weekDays[0]);
  
  // Пример расписания занятий
  const schedule: WeeklySchedule = {
    'Понедельник': [
      { id: 1, time: '07:00 - 08:00', class: 'Утренний кардио', trainer: 'Давид Х.', duration: '60 мин', level: 'Все уровни' },
      { id: 2, time: '09:30 - 10:30', class: 'Йога', trainer: 'Елена С.', duration: '60 мин', level: 'Начинающий' },
      { id: 3, time: '12:00 - 13:00', class: 'Силовая тренировка', trainer: 'Игорь В.', duration: '60 мин', level: 'Средний' },
      { id: 4, time: '16:00 - 17:00', class: 'Функциональный тренинг', trainer: 'Наталья К.', duration: '60 мин', level: 'Все уровни' },
      { id: 5, time: '18:30 - 19:30', class: 'Пилатес', trainer: 'Елена С.', duration: '60 мин', level: 'Все уровни' },
      { id: 6, time: '20:00 - 21:00', class: 'Вечерний кардио', trainer: 'Давид Х.', duration: '60 мин', level: 'Средний' },
    ],
    'Вторник': [
      { id: 7, time: '07:00 - 08:00', class: 'Круговая тренировка', trainer: 'Игорь В.', duration: '60 мин', level: 'Средний' },
      { id: 8, time: '09:30 - 10:30', class: 'Зумба', trainer: 'Наталья К.', duration: '60 мин', level: 'Все уровни' },
      { id: 9, time: '12:00 - 13:00', class: 'Стретчинг', trainer: 'Елена С.', duration: '60 мин', level: 'Все уровни' },
      { id: 10, time: '16:00 - 17:30', class: 'Силовая тренировка', trainer: 'Давид Х.', duration: '90 мин', level: 'Продвинутый' },
      { id: 11, time: '18:30 - 19:30', class: 'Кроссфит', trainer: 'Игорь В.', duration: '60 мин', level: 'Средний' },
      { id: 12, time: '20:00 - 21:00', class: 'Йога для расслабления', trainer: 'Елена С.', duration: '60 мин', level: 'Все уровни' },
    ],
    'Среда': [
      { id: 13, time: '07:00 - 08:00', class: 'Утренний кардио', trainer: 'Давид Х.', duration: '60 мин', level: 'Все уровни' },
      { id: 14, time: '09:30 - 10:30', class: 'Пилатес', trainer: 'Елена С.', duration: '60 мин', level: 'Начинающий' },
      { id: 15, time: '12:00 - 13:00', class: 'Функциональный тренинг', trainer: 'Наталья К.', duration: '60 мин', level: 'Средний' },
      { id: 16, time: '16:00 - 17:00', class: 'Силовая тренировка', trainer: 'Игорь В.', duration: '60 мин', level: 'Все уровни' },
      { id: 17, time: '18:30 - 19:30', class: 'Йога', trainer: 'Елена С.', duration: '60 мин', level: 'Средний' },
      { id: 18, time: '20:00 - 21:00', class: 'Вечерний кардио', trainer: 'Давид Х.', duration: '60 мин', level: 'Все уровни' },
    ],
    'Четверг': [
      { id: 19, time: '07:00 - 08:00', class: 'Круговая тренировка', trainer: 'Игорь В.', duration: '60 мин', level: 'Средний' },
      { id: 20, time: '09:30 - 10:30', class: 'Зумба', trainer: 'Наталья К.', duration: '60 мин', level: 'Все уровни' },
      { id: 21, time: '12:00 - 13:00', class: 'Стретчинг', trainer: 'Елена С.', duration: '60 мин', level: 'Все уровни' },
      { id: 22, time: '16:00 - 17:30', class: 'Силовая тренировка', trainer: 'Давид Х.', duration: '90 мин', level: 'Продвинутый' },
      { id: 23, time: '18:30 - 19:30', class: 'Кроссфит', trainer: 'Игорь В.', duration: '60 мин', level: 'Средний' },
      { id: 24, time: '20:00 - 21:00', class: 'Йога для расслабления', trainer: 'Елена С.', duration: '60 мин', level: 'Все уровни' },
    ],
    'Пятница': [
      { id: 25, time: '07:00 - 08:00', class: 'Утренний кардио', trainer: 'Давид Х.', duration: '60 мин', level: 'Все уровни' },
      { id: 26, time: '09:30 - 10:30', class: 'Йога', trainer: 'Елена С.', duration: '60 мин', level: 'Начинающий' },
      { id: 27, time: '12:00 - 13:00', class: 'Силовая тренировка', trainer: 'Игорь В.', duration: '60 мин', level: 'Средний' },
      { id: 28, time: '16:00 - 17:00', class: 'Функциональный тренинг', trainer: 'Наталья К.', duration: '60 мин', level: 'Все уровни' },
      { id: 29, time: '18:30 - 19:30', class: 'Пилатес', trainer: 'Елена С.', duration: '60 мин', level: 'Все уровни' },
      { id: 30, time: '20:00 - 21:00', class: 'Вечерний кардио', trainer: 'Давид Х.', duration: '60 мин', level: 'Средний' },
    ],
    'Суббота': [
      { id: 31, time: '09:00 - 10:00', class: 'Йога', trainer: 'Елена С.', duration: '60 мин', level: 'Все уровни' },
      { id: 32, time: '10:30 - 11:30', class: 'Силовая тренировка', trainer: 'Давид Х.', duration: '60 мин', level: 'Средний' },
      { id: 33, time: '12:00 - 13:00', class: 'Зумба', trainer: 'Наталья К.', duration: '60 мин', level: 'Все уровни' },
      { id: 34, time: '15:00 - 16:00', class: 'Функциональный тренинг', trainer: 'Игорь В.', duration: '60 мин', level: 'Средний' },
      { id: 35, time: '17:00 - 18:00', class: 'Стретчинг', trainer: 'Елена С.', duration: '60 мин', level: 'Все уровни' },
    ],
    'Воскресенье': [
      { id: 36, time: '10:00 - 11:00', class: 'Йога', trainer: 'Елена С.', duration: '60 мин', level: 'Все уровни' },
      { id: 37, time: '11:30 - 12:30', class: 'Пилатес', trainer: 'Наталья К.', duration: '60 мин', level: 'Начинающий' },
      { id: 38, time: '13:00 - 14:00', class: 'Силовая тренировка', trainer: 'Давид Х.', duration: '60 мин', level: 'Все уровни' },
      { id: 39, time: '15:30 - 16:30', class: 'Стретчинг', trainer: 'Елена С.', duration: '60 мин', level: 'Все уровни' },
    ],
  };
  
  const getLevelClass = (level: string) => {
    switch (level) {
      case 'Начинающий':
        return 'level-beginner';
      case 'Средний':
        return 'level-intermediate';
      case 'Продвинутый':
        return 'level-advanced';
      default:
        return 'level-all';
    }
  };
  
  return (
    <div className="schedule-page">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Расписание занятий</h1>
          <p className="page-description">Выберите день недели и запишитесь на групповые занятия</p>
        </div>
      </div>
      
      <section className="schedule-section">
        <div className="container">
          <div className="days-tabs">
            {weekDays.map(day => (
              <button
                key={day}
                className={`day-tab ${activeDay === day ? 'active' : ''}`}
                onClick={() => setActiveDay(day)}
              >
                {day}
              </button>
            ))}
          </div>
          
          <div className="schedule-table-container">
            <table className="schedule-table">
              <thead>
                <tr>
                  <th>Время</th>
                  <th>Занятие</th>
                  <th>Тренер</th>
                  <th>Длительность</th>
                  <th>Уровень</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {schedule[activeDay].map(item => (
                  <tr key={item.id}>
                    <td className="time-cell">{item.time}</td>
                    <td className="class-cell">{item.class}</td>
                    <td className="trainer-cell">{item.trainer}</td>
                    <td className="duration-cell">{item.duration}</td>
                    <td className="level-cell">
                      <span className={`level-badge ${getLevelClass(item.level)}`}>
                        {item.level}
                      </span>
                    </td>
                    <td className="action-cell">
                      <Link to="/contact" className="btn btn-small">Записаться</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="schedule-legend">
            <h3>Уровни сложности:</h3>
            <div className="legend-items">
              <div className="legend-item">
                <span className="level-badge level-beginner">Начинающий</span>
                <span className="legend-description">Подходит для новичков без опыта тренировок</span>
              </div>
              <div className="legend-item">
                <span className="level-badge level-intermediate">Средний</span>
                <span className="legend-description">Для тех, кто имеет базовый опыт тренировок</span>
              </div>
              <div className="legend-item">
                <span className="level-badge level-advanced">Продвинутый</span>
                <span className="legend-description">Для опытных с хорошей физической подготовкой</span>
              </div>
              <div className="legend-item">
                <span className="level-badge level-all">Все уровни</span>
                <span className="legend-description">Подходит для любого уровня подготовки</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="class-info-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-subtitle">ИНФОРМАЦИЯ О ЗАНЯТИЯХ</span>
            <h2 className="section-title">Наши групповые программы</h2>
          </div>
          
          <div className="class-info-grid">
            <div className="class-info-card">
              <h3>Йога</h3>
              <p>Комплекс упражнений для развития гибкости, силы и баланса. Помогает снять стресс и улучшить общее самочувствие.</p>
            </div>
            
            <div className="class-info-card">
              <h3>Пилатес</h3>
              <p>Система упражнений, направленная на укрепление мышц кора, улучшение осанки и гибкости тела.</p>
            </div>
            
            <div className="class-info-card">
              <h3>Силовая тренировка</h3>
              <p>Тренировка для развития силы и выносливости основных мышечных групп с использованием различного оборудования.</p>
            </div>
            
            <div className="class-info-card">
              <h3>Функциональный тренинг</h3>
              <p>Комплексная тренировка, направленная на развитие силы, выносливости, координации и гибкости всего тела.</p>
            </div>
            
            <div className="class-info-card">
              <h3>Зумба</h3>
              <p>Энергичная танцевальная фитнес-программа на основе латиноамериканских и мировых ритмов.</p>
            </div>
            
            <div className="class-info-card">
              <h3>Кроссфит</h3>
              <p>Высокоинтенсивная система функциональных тренировок, сочетающая элементы тяжелой атлетики, гимнастики и кардио.</p>
            </div>
            
            <div className="class-info-card">
              <h3>Стретчинг</h3>
              <p>Комплекс упражнений для развития гибкости, подвижности суставов и расслабления мышц.</p>
            </div>
            
            <div className="class-info-card">
              <h3>Кардио тренировка</h3>
              <p>Интенсивная тренировка, направленная на укрепление сердечно-сосудистой системы и сжигание калорий.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Хотите записаться на занятие?</h2>
            <p className="cta-text">Выберите удобное время и групповую тренировку</p>
            <Link to="/contact" className="btn btn-primary">Записаться на тренировку</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SchedulePage;