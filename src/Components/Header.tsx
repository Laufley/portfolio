import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/personal">Personal</Link>
        <Link to="/cv">CV</Link>
      </nav>
    </header>
  )
}

export default Header