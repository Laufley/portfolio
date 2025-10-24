import { useState, useRef } from 'react';
import './About.css';
import hallelujah from './Assets/hallelujah.mp3';

function About() {
  const [flipped, setFlipped] = useState([false, false, false, false, false]);
  const audioRef = useRef(new Audio(hallelujah));

  const handleFlip = (index: number) => {
    const newFlipped = [...flipped];
    newFlipped[index] = !newFlipped[index];
    setFlipped(newFlipped);
  };

  const toggleSound = () => {
    const audio = audioRef.current;

    if (audio.paused) {
      audio.currentTime = 0;
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
  };

  const handleClick = (event: React.MouseEvent<HTMLDivElement>, index: number) => {
    const target = event.target as HTMLElement;

    if (target.classList.contains('sound-trigger')) {
      toggleSound();
      return;
    }

    handleFlip(index);
  };

  const cards = [
    {
      front: "Life in Barcelona",
      back: [
        "I grew up in a <strong>very impoverished</strong> neighborhood outside Barcelona.",
        "An IT career was unheard of (there) by that time.",
        "<strong>High school:</strong> I pursued Bachillerato Científico.",
        "<strong>Uni:</strong> Worked and studied hard to obtain grants for BSc Clinical Psychology.",
        "<strong>The turn point:</strong> I graduated, worked in a hospital, and discovered how tainted the field was with pharma. I could not morally continue that path.",
        "<strong>Moved to Edinburgh</strong>: For love, with 200€ in my pocket, and with a hospital's contact to pursue a doctorate in Scotland. A new begining!",
      ],
    },
    {
      front: "Life in Edinburgh",
      back: [
        "<strong><u>Bad news:</u></strong> Doctorate's pay was too low.",
        "So I started as a <strong>waitress</strong>.",
        "I changed to <strong>Customer Service Agent</strong> to boost my English.",
        "I got promoted to <strong>Social Media Coord.</strong> - Had my first client meetings!",
        "I wanted to grow. By then, I knew about IT as a career, but I didn't have the education. I wish I had. But I touched the field as <strong>IT Recruiter</strong>.",
        "I got promoted to Senior. I also helped to design our website and logo! ;)",
        "But I got jealous of the dev's skills and their power of creation. So I did a bootcamp. Again, investing all my savings. It changed EVERYTHING!",
        "<strong><u>Good news:</u></strong> I officially became a <span class='sound-trigger'><strong><u>Software Developer</u></strong></span>!",
      ],
    },
    {
      front: "Hobbies & Interests",
      back: [
        "<strong>Building</strong> my (secret) app as a side-project.",
        "<strong>Writing</strong> stories cooperatively & <strong>worldbuilding</strong> with others.",
        "<strong>Reading</strong> - My fav author is Brandon Sanderson.",
        "<strong>Painting</strong> Warhammer miniatures for tabletop games.",
        "<strong>Playing tabletop rpgs</strong>, boardgames and videogames.",
        "<strong>Piano playing</strong> - not well, but I try.",
        "<strong>Hiking.</strong>",
        "<strong>Traveling</strong> - I finally went to Japan!",
      ],
    },
    {
      front: "Present, Future & Learnings",
      back: [
        "<strong><span class='lesson-2'>Present:</span></strong> Have you noticed what my hobbies have in common? Creation and problem solving. Yes, this is what drives me as a Developer.",
        "<strong><span class='lesson-2'>Future:</span></strong> I'll keep enjoying front-end, back-end and AWS cloud. And I am pursuing a Master's in Software Development to expand my knowledge.",
        "<strong><span class='lesson-2'>Lesson 1:</strong> <span class='lesson-1'>Life is unpredictable. Embrace change.</span>",
        "<strong><span class='lesson-2'>Lesson 2:</strong> <span class='lesson-1'>The best gamble you can do, is on yourself.</span>",
        "<strong><span class='lesson-2'>Lesson 3:</strong> <span class='lesson-1'>We can only make descisions with the information we have at that time... But we can always adjust later.</span>",
        "<strong><span class='lesson-2'>Lesson 4:</strong> <span class='lesson-1'>When life gives you lemons... first check if <span class='lesson-2'><i>lemons != null.</i></span></span>",
      ],
    },
  ];

  const renderListItem = (text: string) => {
    // Line below is what allows HTML rendering inside list items omg!!
    return <span dangerouslySetInnerHTML={{ __html: text }} />;
  };

  return (
    <div className="about-wrapper">
      <div className="cardsAbout-container">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`cardAbout ${flipped[index] ? 'flipped' : ''}`}
            onClick={(e) => handleClick(e, index)}
          >
            <div className="cardAbout-inner">
              <div className="cardAbout-front">
                <h2>{card.front}</h2>
              </div>
              <div className="cardAbout-back">
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

        <div
          className={`mini-card ${flipped[4] ? 'flipped' : ''}`}
          onClick={() => handleFlip(4)}
        >
          <div className="mini-card-inner">
            <div className="mini-card-front">
              <h3>👀 ?</h3>
            </div>
            <div className="mini-card-back">
              <h3>🍋🍋🍋</h3>
            </div>
          </div>
        </div>
        <div className="i-love"> 
          <div id="i-love">
            <span className="i-letter">I</span>
            <span className="space1-letter">&nbsp;</span>
            <span className="l-letter">l</span>
            <span className="o-letter">o</span>
            <span className="v-letter">v</span>
            <span className="e-letter">e</span>
            <span className="space2-letter">&nbsp;</span>
            <span className="d-letter">d</span>
            <span className="u-letter">u</span>
            <span className="c-letter">c</span>
            <span className="k-letter">k</span>
            <span className="s-letter">s</span>
            <span className="excl-letter">!</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
