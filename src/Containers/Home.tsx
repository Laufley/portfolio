import React from 'react'
import './Home.css';
import Header from '../Components/Header';
import { Link } from 'react-router-dom';
import profile_pic from '../Components/Assets/profile_pic.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab); // for the JS fontAwesome icon in the languages section
const profilePic = profile_pic

const Home = () =>{
  return (
    <>
      <Header/>
      <section className="hero">
        <div className="hero-inner">
          <div>
            <div className="overline">Software Engineer</div>
            <h1 className="title">
              Hi, I'm <span className="accent">Indira Borras Gonzalez</span>
            </h1>
            <p className="subtitle">
              I design and build clean, accessible, and performant web apps with a strong eye for UX and detail.
            </p>
            <div className="actions">
              <Link className="btn btn-primary" to="/Projects">View Projects</Link>
              <Link className="btn btn-secondary" to="/CV">Résumé</Link>
            </div>
            <div className="socials">
              <a href="https://github.com/Laufley" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={["fab","github"]} />
              </a>
              <a href="https://www.linkedin.com/in/indira-borras/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={["fab","linkedin"]} />
              </a>
            </div>
            <div className="skill-chips">
              {['JavaScript','TypeScript','React','Node.js','Python','Flask','MongoDB','SQL','Cypress','Jest'].map(s => (
                <span className="chip" key={s}>{s}</span>
              ))}
            </div>
          </div>
          <div>
            <div className="card">
              <img className="avatar" src={profilePic} alt="Profile" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home;
