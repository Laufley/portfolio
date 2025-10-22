import { useState } from 'react';
import './About.css';

function About() {
  const [flipped, setFlipped] = useState([false, false, false, false]);

  const handleFlip = (index: number) => {
    const newFlipped = [...flipped];
    newFlipped[index] = !newFlipped[index];
    setFlipped(newFlipped);
  };

  const cards = [
    {
      front: "Life in Barcelona",
      back: "hoooot!"
    },
    {
      front: "Life in Edinburgh",
      back: "5+ years of web development"
    },
    {
      front: "Hobbies & Interests",
      back: "Bachelor's in Computer Science"
    },
    {
      front: "Flip me (?)",
      back: "Peekaboo!"
    }
  ];

  return (
    <div className="about-wrapper">
      <div className="cards-container">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`card ${flipped[index] ? 'flipped' : ''}`}
            onClick={() => handleFlip(index)}
          >
            <div className="card-inner">
              <div className="card-front">
                <h2>{card.front}</h2>
              </div>
              <div className="card-back">
                <p>{card.back}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
