import React, { useState } from 'react';
import ProjectByIdPage from './ProjectByIdPage';
import { Link } from 'react-router-dom';

interface ProjectProps {
  id: number;
  title: string;
  image: string;
  github_link: string;
  demo: string;
  stack: string[];
  nature: string;
  duration: string;
  info: string;
  challenge: string;
  solution: string;
  features: string[];
}

const Project: React.FC<ProjectProps> = ({
  id,
  title,
  image,
  github_link,
  demo,
  stack,
  nature,
  duration,
  info,
  challenge,
  solution,
  features
}) => {
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);

  const handleClick = (evt: React.MouseEvent<HTMLAnchorElement>): void => {
    setSelectedProjectId(id);
  };

  return (
    <>
      <li id="wrapper">
        <img id="pic" src={image} alt={title} />
        <div id="details">
          <div id="project-title">
            <i className="fa" style={{ color: '#5999E8' }}>&#xf02b;</i> {title}
          </div>
          <p id="stack">
            <i className="fa fa-code" style={{ color: '#5999E8' }}></i>{' '}
            {stack.join(', ')}
          </p>
          <Link id='infoitem' to={`/Projects/${id}`} onClick={handleClick}>
            Click here to visit this project
          </Link>
          {/* <span id="info"> 
              <a href={github_link} id="link-text">
                <i className="fa fa-github" style={{color: '#5999E8'}}></i> Github Link
              </a>
          </span> */}
        </div>
      </li>
    </>
  );
};

export default Project;




