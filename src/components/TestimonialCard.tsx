import React from 'react';
import '../styles/TestimonialCard.css';

interface TestimonialProps {
  testimonial: {
    id: number;
    name: string;
    text: string;
    image: string;
  };
}

const TestimonialCard: React.FC<TestimonialProps> = ({ testimonial }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-content">
        <p className="testimonial-text">{testimonial.text}</p>
        <div className="testimonial-author">
          <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
          <span className="testimonial-name">{testimonial.name}</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;