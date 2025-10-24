import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Containers/Home'
import Projects from './Components/Projects'
import About from './Components/About'
import ErrorPage from './Components/ErrorPage'
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './Components/Header'
import projectsData from './Data/projectsData';
import ProjectByIdPage from './Components/ProjectByIdPage';

function App() {
  return (
    <Router basename="/portfolio">
      <div className="App">
        <Header/>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/projects" element={<Projects projects={projectsData} />} />
            <Route path="/projects/:id" element={<ProjectByIdPage projects={projectsData} />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App