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
    <div id="carousel-container" className="w-full max-w-[1800px] mx-auto flex flex-col items-center gap-8 py-16 min-h-[50vh]">
      <div id="carousel-view" className="relative w-full max-w-[1800px] h-[650px] grid grid-cols-[1fr_1.8fr_1fr] items-center justify-items-center gap-12 px-8">
        
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

      <div id="carousel-info-box" className="bg-[rgba(255,255,255,0.15)] backdrop-blur-[10px] 
                      border-2 border-[rgba(255,255,255,0.3)] 
                      rounded-[20px] 
                      px-12 py-6
                      text-white text-center
                      max-w-[800px] w-[90%]
                      shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
        <p className="m-0 font-semibold tracking-wider mb-4">
          Project {currentProjectIndex + 1} of {projects.length}
        </p>
        <h2 className="text-2xl font-bold mb-4">{projects[currentProjectIndex].title}</h2>
        <div className="flex flex-wrap gap-2 justify-center mb-4">
          {projects[currentProjectIndex].stack.map((tech, index) => (
            <span key={index} className="bg-[rgba(137,43,226,0.3)] px-2 py-1 rounded text-sm">
              {tech}
            </span>
          ))}
        </div>
        <p className="text-lg mb-4">{projects[currentProjectIndex].info}</p>
        <div className="flex gap-4 justify-center">
          <a 
            href={projects[currentProjectIndex].github_link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[rgba(137,43,226,0.3)] px-4 py-2 rounded hover:bg-[rgba(137,43,226,0.5)]"
          >
            GitHub
          </a>
          <a 
            href={projects[currentProjectIndex].demo_link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[rgba(137,43,226,0.3)] px-4 py-2 rounded hover:bg-[rgba(137,43,226,0.5)]"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Carousel;