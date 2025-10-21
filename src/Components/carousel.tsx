import React, { useState } from 'react';
import './Carousel.css';

interface CarouselProps {
  listOfProjects: React.ReactNode[];
}

const Carousel: React.FC<CarouselProps> = ({ listOfProjects }) => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const handleNext = () => {
    setCurrentProjectIndex((prevIndex) => 
      prevIndex === listOfProjects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentProjectIndex((prevIndex) => 
      prevIndex === 0 ? listOfProjects.length - 1 : prevIndex - 1
    );
  };

  const getPreviousIndex = () => {
    return currentProjectIndex === 0 
      ? listOfProjects.length - 1 
      : currentProjectIndex - 1;
  };

  const getNextIndex = () => {
    return currentProjectIndex === listOfProjects.length - 1 
      ? 0 
      : currentProjectIndex + 1;
  };

  return (
    <div id="carousel-container">
      <div id="carousel-view">
        <div id="previous-item" className="carousel-side-item">
          {listOfProjects[getPreviousIndex()]}
        </div>
        <div id="current-item" className="carousel-current-item">
          {listOfProjects[currentProjectIndex]}
        </div>
        <div id="next-item" className="carousel-side-item">
          {listOfProjects[getNextIndex()]}
        </div>
        <button 
          className="carousel-button" 
          id="button-previous" 
          onClick={handlePrevious}
          aria-label="Previous project"
        >
          <i className="fa">&#xf100;</i>
        </button>
        <button 
          className="carousel-button" 
          id="button-next" 
          onClick={handleNext}
          aria-label="Next project"
        >
          <i className="fa">&#xf101;</i>
        </button>
      </div>
      <div id="carousel-info-box">
        <p>Project {currentProjectIndex + 1} of {listOfProjects.length}</p>
      </div>
    </div>
  );
};

export default Carousel;