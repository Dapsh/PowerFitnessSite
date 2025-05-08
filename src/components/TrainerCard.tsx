import React from 'react';
import '../styles/TrainerCard.css';

interface TrainerProps {
  trainer: {
    id: number;
    name: string;
    role: string;
    image: string;
    description: string;
  };
}

const TrainerCard: React.FC<TrainerProps> = ({ trainer }) => {
  return (
    <div className="trainer-card">
      <div className="trainer-image-container">
        <img src={trainer.image} alt={trainer.name} className="trainer-image" />
      </div>
      <div className="trainer-info">
        <h3 className="trainer-name">{trainer.name}</h3>
        <p className="trainer-role">{trainer.role}</p>
        <p className="trainer-description">{trainer.description}</p>
      </div>
    </div>
  );
};

export default TrainerCard;