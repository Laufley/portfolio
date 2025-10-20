import { Link } from 'react-router-dom'
import './Projects.css'

function Projects() {
  const projects = [
    { id: 1, title: 'Project 1', description: 'Description 1' },
    { id: 2, title: 'Project 2', description: 'Description 2' },
    { id: 3, title: 'Project 3', description: 'Description 3' },
  ]

  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projects.map(project => (
          <Link to={`/projects/${project.id}`} key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Projects