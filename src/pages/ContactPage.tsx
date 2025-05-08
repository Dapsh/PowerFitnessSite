import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import '../styles/ContactPage.css';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Имитация отправки формы на сервер
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Успешный ответ
      setSubmitStatus({
        success: true,
        message: 'Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.'
      });
      
      // Сброс формы
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'Произошла ошибка при отправке формы. Пожалуйста, попробуйте снова позже.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Контакты</h1>
          <p className="page-description">Свяжитесь с нами для получения дополнительной информации или записи на тренировку</p>
        </div>
      </div>
      
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2 className="contact-heading">Информация для связи</h2>
              <p className="contact-text">У вас есть вопросы? Мы всегда рады помочь. Свяжитесь с нами любым удобным способом.</p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <Phone className="contact-icon" size={24} />
                  <div>
                    <h3>Телефон</h3>
                    <a href="tel:+79001234567">+7 (900) 123-45-67</a>
                  </div>
                </div>
                
                <div className="contact-item">
                  <Mail className="contact-icon" size={24} />
                  <div>
                    <h3>Электронная почта</h3>
                    <a href="mailto:info@powerfit.ru">info@powerfit.ru</a>
                  </div>
                </div>
                
                <div className="contact-item">
                  <MapPin className="contact-icon" size={24} />
                  <div>
                    <h3>Адрес</h3>
                    <address>г. Самара, ул. Дачная, д. 2</address>
                  </div>
                </div>
                
                <div className="contact-item">
                  <Clock className="contact-icon" size={24} />
                  <div>
                    <h3>Часы работы</h3>
                    <p>Пн-Пт: 7:00 - 23:00<br />Сб-Вс: 9:00 - 21:00</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="contact-form-container">
              <h2 className="contact-heading">Отправить сообщение</h2>
              
              {submitStatus && (
                <div className={`form-status ${submitStatus.success ? 'success' : 'error'}`}>
                  {submitStatus.message}
                </div>
              )}
              
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Ваше имя</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Телефон</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Сообщение</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="btn btn-primary btn-block"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Отправка...' : 'Отправить сообщение'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      <section className="map-section">
        <div className="container">
          <h2 className="section-title text-center">Наше расположение</h2>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2389.8922457565077!2d50.139073777436295!3d53.20184867224769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41661e8994917cf5%3A0x6fb76a47f471ab62!2z0YPQuy4g0JTQsNGH0L3QsNGPLCAyLCDQodCw0LzQsNGA0LAsINCh0LDQvNCw0YDRgdC60LDRjyDQvtCx0LsuLCDQoNC-0YHRgdC40Y8sIDQ0MzAxMw!5e0!3m2!1sru!2sfr!4v1746656266179!5m2!1sru!2sfr"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Карта расположения POWERFIT"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;