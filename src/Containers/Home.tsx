
import './Home.css';
import { Link } from 'react-router-dom';
import profile_pic from '../Components/Assets/profile_pic.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import quack_audio from '../Components/Assets/quack1.mp3';
import ducky from '../Components/Assets/duck.jpeg';
import Projects from '../Components/Projects';
import projectsData from '../Data/projectsData';

library.add(fab);
const profilePic = profile_pic;
const duck = ducky

const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="overline">Software Developer</div>
            <h1 className="title">
              Hi, I'm <span className="accent">Indira Borràs González</span>
            </h1>
            <p className="subtitle">
            I'm a fullstack developer. I build stuff. It's fun.
            </p>
            <div className="actions">
              <Link className="btn btn-primary" to="/Projects">View Projects</Link>
              <Link className="btn btn-secondary" to="/CV">CV</Link>
            </div>
            <div className="socials desktop-socials">
              <a href="https://github.com/Laufley" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={["fab","github"]} />
              </a>
              <a href="https://www.linkedin.com/in/indira-borras/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={["fab","linkedin"]} />
              </a>
            </div>
            <div className="skills desktop-skills">
              {['Typescript', 'Javascript','Go','Python','Java','React','Redux','Terraform', 'AWS cdk', 'AWS services', 'CI/CD', 'Jest'].map(s => (
                <span className="chip" key={s}>{s}</span>
              ))}
            </div>
          </div>
          
          <div className="hero-image">
            <div className="card">
              <img className="avatar" src={profilePic} alt="Profile" />
            </div>
            <div className="socials mobile-socials">
              <a href="https://github.com/Laufley" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={["fab","github"]} />
              </a>
              <a href="https://www.linkedin.com/in/indira-borras/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={["fab","linkedin"]} />
              </a>
            </div>
            <div className="skill-chips mobile-skills">
              {['JavaScript','TypeScript','React','Node.js','Python','Flask','MongoDB','SQL','Cypress','Jest'].map(s => (
                <span className="chip" key={s}>{s}</span>
              ))}
            </div>
          </div>
          <div className="quacker">
            <button className="quacker-button" onClick={() => {
              const quacker = document.getElementById('quacker-audio') as HTMLAudioElement;
              quacker.play();
            }}>
              <img src={duck} alt="duck" width="30" height="30"/>
            </button>
            <audio id="quacker-audio" src={quack_audio} />
          </div>
        </div>
      </section>
      <section className="carousel-section" id="projects-carousel">
        <div className="scroll-trigger">
          <div 
            onClick={() => {
              document.getElementById('projects-display')?.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
              });
            }}
          >
            <div className="arrow-bounce">
              <span className="arrow-down">↓</span>
            </div>
            <div className="scroll-text"> View Projects</div>
          </div>
        </div>
        
        <div id="projects-display">
          <Projects projects={projectsData} />
        </div>
      </section>
    </>
  );
};

export default Home;