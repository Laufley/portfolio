import { useState } from 'react';
import './About.css';
import hallelujah from './Assets/hallelujah.mp3';

function About() {
  const [flipped, setFlipped] = useState([false, false, false, false]);
  const audio = new Audio(hallelujah);

  const handleFlip = (index: number) => {
    const newFlipped = [...flipped];
    newFlipped[index] = !newFlipped[index];
    setFlipped(newFlipped);
  };

  const handleClick = (event: React.MouseEvent<HTMLDivElement>, index: number) => {
    const target = event.target as HTMLElement;
    if (target.textContent === 'Developer') {
      audio.play();
    }
    handleFlip(index);
  };

  const cards = [
    {
      front: "Life in Barcelona",
      back: [
        "I grew up in a <strong>very impoverished</strong> neighborhood outside BCN.",
        "An IT career was unheard of (there) by that time. But I loved science!",
        "<strong>High school:</strong> I pursued Bachillerato Científico.",
        "<strong>Uni:</strong> Worked and studied hard to obtain grants for Clinical Psychology.",
        "<strong>The turn point:</strong> I graduated, worked in a hostpital, and discovered how tainted the field was with pharma. I could not morally continue that path.",
        "<strong>Moved to Edinburgh</strong>: For love, with 200€ in my pocket, and with a earnt contact to do a doctorate programme in Scotland. A new begining!",
      ]
    },
    {
      front: "Life in Edinburgh",
      back: [
        "<strong>Bad news:</strong> Qualified for the doctorate, but the salary would be too low.",
        "I worked as a <strong>waitress in a kebab shop</strong>. I had to learn English anyway.",
        "I leveled up to <strong>Customer Service Agent</strong> to boost my English.",
        "I got promoted to <strong>Social Media Engagement Coordinator</strong>. My first Client meetings were nerve-wracking!",
        "I wanted to grow. By then, I knew about IT as a career, but I didn't have the education. I wish I had. So I decided to watch as an <strong>IT Recruiter</strong>.",
        "I got promoted to Senior. I also helped to design our website and logo! ;)",
        "But through befriending devs, I got jealous of their skills.",
        "So I did a bootcamp. Again, investing all my savings. It changed EVERYTHING",
        "<strong>Good news!:</strong> I found a job as a <strong><u>Developer</u></strong> in 2023 and I'm loving every second!",
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
            onClick={(e) => handleClick(e, index)}
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


// the best gamble you can do, is against yourself
// life is hard, but so are you
// poverty chases you your whole life, the fact that I don't have an IT degree is a scar I will always carry. BUT hey, news! i'm now taking a master's in Software development so that will fix it a bit (?)
// when life gives you lemons... ask yourself, what would indira do? and then do the opposite.