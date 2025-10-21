import React from 'react';
import './Projects.css';
import Carousel from './carousel'

export interface ProjectType {
  title: string;
  projectImg: string;
  github_link: string;
  demo_link: string;
  stack: string[];
  nature: string;
  duration: string;
  info: string;
  challenge: string;
  solution: string;
  features: string[];
}

interface ProjectsProps {
  projects: ProjectType[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <>
    <h1 style={{ color: 'white' }}>:)</h1>
    <div id="page-wrapper">
      <Carousel projects={projects} />
    </div></>
    
  );
};

export default Projects;