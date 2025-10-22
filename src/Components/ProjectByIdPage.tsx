import React from 'react';
import { useParams } from 'react-router-dom';
import { ProjectType } from './Projects';

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
   
  );
};

export default ProjectByIdPage;