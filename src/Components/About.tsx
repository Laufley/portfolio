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
        "I grew up in a an impoverished neighborhood outside Barcelona.",
        "A software development career was unheard of there and then.",
        "<strong>High school:</strong> I pursued Bachillerato Científico.",
        "<strong>University:</strong> The intrincacy of the brain and its networks fascinated me. So I worked and studied hard to earn grants for BSc Clinical Psychology.",
        "<strong>The turning point:</strong> I graduated, worked in a hospital, and discovered how tainted the field was with pharma. I could not morally continue that path.",
        "<strong>Moved to Edinburgh</strong>: With 200€ in my pocket, and with a hospital's contact to pursue a doctorate in Scotland. A new begining!",
      ],
    },
    {
      front: "Life in Edinburgh",
      back: [
        "Unfortunately, the doctorate's pay was too low to self-sustain.",
        "I saw no future on that path, so I decided to start from scratch.",
        "I boosted my english being a waitress and then a Customer Service Agent.",
        "I had my first client meetings after being promoted to <strong>Social Media Coord.</strong>",
        "I wanted to keep growing, so I changed jobs and became a <strong>IT recruiter</strong>.",
        "I got promoted to Senior. I also helped to design our website and logo! ;)",
        "I got jealous of the dev's I interviewed: Their skills, their type of challenges, and their power of creation. So I completed a Bootcamp investing all my savings and IT CHANGED EVERYTHING.",
        "<strong><u>Good news:</u></strong> I officially became a <span class='sound-trigger'><strong><u>Software Developer</u></strong></span>!",
      ],
    },
    {
      front: "Hobbies & Interests",
      back: [
        "<strong>Building</strong> my (secret) app as a side-project.",
        "<strong>Worldbuilding</strong> & <strong>writing</strong> stories cooperatively.",
        "<strong>Reading</strong> Hard Sci-fi, epic fantasy, philosophy, history.",
        "<strong>Puzzle-solving</strong>",
        "<strong>Painting</strong> Warhammer miniatures for tabletop games.",
        "<strong>Playing</strong> tabletop rpgs, boardgames and videogames.",
        "<strong>Piano playing</strong> - I'm not v good, but I try.",
        "<strong>Hiking </strong> & <strong>Exercising at the gym</strong>.",
        "<strong>Traveling</strong> - I finally went to Japan!",
      ],
    },
    {
      front: "Present, Future & Learnings",
      back: [
        "<strong><span class='lesson-2'>Present:</span></strong> Problem-solving and creation are what drive me as a developer. I will never get tired of it. It's what all my hobbies have in common!",
        "<strong><span class='lesson-2'>Future:</span></strong> I'll keep enjoying my job and expand on AWS. I am also pursuing a Master's in Software Development to extend my knowledge.",
        "<strong><span class='lesson-2'>Learnings:</span></strong>",
      ],
    },
  ];

  const learnings = [
     "<strong><span class='lesson-1'> 1:</strong> Life is unpredictable. Embrace change.",
        "<strong><span class='lesson-1'> 2:</strong> We can only make descisions with the information we have at that time... But we can always adjust later.</span>",
        "<strong><span class='lesson-1'> 3:</strong> The best gamble you can do, is on yourself.</span>",
        "<strong><span class='lesson-1'> 4:</strong>W hen life gives you lemons... first check if <span class='lesson-2'><i>lemons != null.</i></span></span>",
  ]

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
                  {index === 3 && (
                    <ul>
                      {learnings.map((learning, j) => (
                        <li key={j}>{renderListItem(learning)}</li>
                      ))}
                    </ul>
                  )}
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
