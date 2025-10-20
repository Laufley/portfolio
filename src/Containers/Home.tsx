import React from 'react';
import './Home.css';
import Header from '../Components/Header';
import { Link } from 'react-router-dom';
import profile_pic from '../Components/Assets/profile_pic.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);
const profilePic = profile_pic;

const Home = () => {
  return (
    <>
      <Header/>
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="overline">Software Engineer</div>
            <h1 className="title">
              Hi, I'm <span className="accent">Indira Borras Gonzalez</span>
            </h1>
            <p className="subtitle">
              And I have fun coding as a fullstack developer.
            </p>
            <div className="actions">
              <Link className="btn btn-primary" to="/Projects">View Projects</Link>
              <Link className="btn btn-secondary" to="/CV">Résumé</Link>
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
              {['JavaScript','TypeScript','React','Node.js','Python','Flask','MongoDB','SQL','Cypress','Jest'].map(s => (
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
        </div>
      </section>
    </>
  );
};

export default Home;