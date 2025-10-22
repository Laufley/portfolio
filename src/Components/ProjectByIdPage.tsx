import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ProjectType } from './Projects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faVideo } from '@fortawesome/free-solid-svg-icons';

interface ProjectByIdPageProps {
  projects: ProjectType[];
}

const ProjectByIdPage: React.FC<ProjectByIdPageProps> = ({ projects }) => {
  const { id } = useParams<{ id: string }>();
  const project = projects[Number(id)];

  if (!project) {
    return <div>Project not found :(</div>;
  }

  return (
    <>
    <Link to="/projects" className="back-link">← Back to Projects</Link>
    <div className="project-detail">
      <h1>{project.title}</h1>
      <img src={project.projectImg} alt={project.title} className="project-image" />
      
      <div className="project-links">
        <a href={project.github_link} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} /> GitHub
        </a>
        {project.demo_link && (
          <a href={project.demo_link} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faVideo} /> Demo
          </a>
        )}
      </div>

      <div className="project-info">
        <p><strong>Duration:</strong> {project.duration}</p>
        <p><strong>Nature:</strong> {project.nature}</p>
        <p><strong>Stack:</strong> {project.stack.join(', ')}</p>
        
        <h2>About</h2>
        <p>{project.info}</p>
        
        <h2>Challenge</h2>
        <p>{project.challenge}</p>
        
        <h2>Solution</h2>
        <p>{project.solution}</p>
        
        <h2>Features</h2>
        <ul>
          {project.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
    </>
    
  );
};

export default ProjectByIdPage;