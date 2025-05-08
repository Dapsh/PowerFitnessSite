import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import '../styles/FaqAccordion.css';

interface FaqProps {
  faq: {
    id: number;
    question: string;
    answer: string;
  };
}

const FaqAccordion: React.FC<FaqProps> = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`faq-item ${isOpen ? 'active' : ''}`}>
      <button 
        className="faq-question" 
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {faq.question}
        <span className="faq-icon">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </span>
      </button>
      <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
        <p>{faq.answer}</p>
      </div>
    </div>
  );
};

export default FaqAccordion;