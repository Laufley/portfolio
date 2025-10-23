import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ProjectType } from './Projects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import './ProjectByIdPage.css';

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
      <Link to="/projects" className="back-link">← Back</Link>
      <div className="project-detail">
        <h1 className='ProjectIdTitle'>{project.title}</h1>
        
        {project.projectImg && (
          <div className="imageID-container">
            <img 
              src={project.projectImg} 
              className="project-image"
            />
          </div>
        )}
        
        {(project.github_link || project.demo_link) && (
          <div className="project-links">
            {project.github_link && (
              <a href={project.github_link} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} /> GitHub
              </a>
            )}
            {project.demo_link && (
              <a href={project.demo_link} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faVideo} /> Demo
              </a>
            )}
          </div>
        )}

        <div className="project-info">
          {project.duration && (
            <>
              <h3 style={{ color: 'white' }}>Duration:</h3>
              <p>{project.duration}</p>
            </>
          )}

          {project.nature && (
            <>
              <h3 style={{ color: 'white' }}>Nature:</h3>
              <p style={{ display: 'inline' }}>{project.nature}</p>
            </>
          )}

          {project.stack && project.stack.length > 0 && (
            <>
              <h3 style={{ color: 'white' }}>Stack:</h3>
              <p style={{ display: 'inline' }}>{project.stack.join(', ')}</p>
            </>
          )}

          {project.info && (
            <>
              <h3 style={{ color: 'white' }}>About</h3>
              <p>{project.info}</p>
            </>
          )}
          
          {project.challenge && (
            <>
              <h3 style={{ color: 'white' }}>Challenge</h3>
              <p>{project.challenge}</p>
            </>
          )}
          
          {project.solution && (
            <>
              <h3 style={{ color: 'white' }}>Solution</h3>
              <p>{project.solution}</p>
            </>
          )}
          
          {project.features && project.features.length > 0 && (
            <>
              <h3 style={{ color: 'white' }}>Features</h3>
              <ul>
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ProjectByIdPage;