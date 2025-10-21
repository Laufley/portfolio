import React, { useState } from 'react';
import { ProjectType } from './Projects';
import './carousel.css';

interface CarouselProps {
  projects: ProjectType[];
}

const ProjectCard: React.FC<{ project: ProjectType }> = ({ project }) => {
  return (
    <div className="w-full h-full rounded-lg overflow-hidden">
      <img 
        src={project.projectImg} 
        alt={project.title} 
        className="w-full h-full object-cover"
      />
    </div>
  );
};

const Carousel: React.FC<CarouselProps> = ({ projects }) => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);

  const handleNext = () => {
    setDirection('left');
    setCurrentProjectIndex((prevIndex) => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setDirection('right');
    setCurrentProjectIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const getPreviousIndex = () => {
    return currentProjectIndex === 0 
      ? projects.length - 1 
      : currentProjectIndex - 1;
  };

  const getNextIndex = () => {
    return currentProjectIndex === projects.length - 1 
      ? 0 
      : currentProjectIndex + 1;
  };

  return (
    <div id="carousel-container">
      <div id="carousel-view">
        <div 
          id="previous-item" 
          className={`carousel-side-item ${direction === 'right' ? 'slide-left' : ''}`}
          onClick={handlePrevious}
          role="button"
          tabIndex={0}
          aria-label="Previous project"
        >
          <ProjectCard project={projects[getPreviousIndex()]} />
        </div>

        <div 
          id="current-item" 
          className={`carousel-current-item ${direction ? 'slide-center' : ''}`}
        >
          <ProjectCard project={projects[currentProjectIndex]} />
        </div>

        <div 
          id="next-item" 
          className={`carousel-side-item ${direction === 'left' ? 'slide-right' : ''}`}
          onClick={handleNext}
          role="button"
          tabIndex={0}
          aria-label="Next project"
        >
          <ProjectCard project={projects[getNextIndex()]} />
        </div>
      </div>

      <div id="carousel-info-box">
        <p className="project-counter">
          Project {currentProjectIndex + 1} of {projects.length}
        </p>
        <h2 className="project-title">{projects[currentProjectIndex].title}</h2>
        <div className="tech-stack">
          {projects[currentProjectIndex].stack.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
        <p className="project-info">{projects[currentProjectIndex].info}</p>
        <div className="project-links">
          <a 
            href={projects[currentProjectIndex].github_link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="project-link"
          >
            GitHub
          </a>
          <a 
            href={projects[currentProjectIndex].demo_link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="project-link"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Carousel;