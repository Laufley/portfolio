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
      back: [
        "I grew up in a <strong>very impoverished</strong> neighborhood outside BCN.",
        "An IT career was unheard of (there) by that time. But I loved science!",
        "<strong>High school:</strong> I pursued Bachillerato Científico.",
        "<strong>Uni:</strong> Worked and studied hard to obtain grants.",
        "<strong>Clinical psychology:</strong> I graduated and worked in a hostpital, and discovered how tainted the field was with pharma. I could not morally continue down that path.",
        "<strong>Moved to Edinburgh</strong>: for love, with 200€ in my pocket, and with a earnt contact to do a doctorate in Scotland. A new begining!",
      ]
    },
    {
      front: "Life in Edinburgh",
      back: [
        "5+ years of web development",
      ]
    },
    {
      front: "Hobbies & Interests",
      back: [
        "Bachelor's in Computer Science",
      ]
    },
    {
      front: "Flip me (?)",
      back: "Peekaboo!"
    },
  ];

  const renderListItem = (text: string) => { // this is what allows me to render HTML inside list items
    return <span dangerouslySetInnerHTML={{ __html: text }} />;
  };

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
                {Array.isArray(card.back) ? (
                  <ul>
                    {card.back.map((item, i) => (
                      <li key={i}>{renderListItem(item)}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{card.back}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;