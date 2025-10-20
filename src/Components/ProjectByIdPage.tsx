import { useParams, Link } from 'react-router-dom'

function ProjectByIdPage() {
  const { id } = useParams<{ id: string }>()

  return (
    <div className="project-detail">
      <h1>Project {id}</h1>
      <p>Details for project {id} go here</p>
      <Link to="/projects">← Back to Projects</Link>
    </div>
  )
}

export default ProjectByIdPage