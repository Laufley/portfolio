import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Containers/Home'
import Projects from './Components/Projects'
import About from './Components/About'
import CV from './Components/CV'
import ProjectByIdPage from './Components/ProjectByIdPage'
import ErrorPage from './Components/ErrorPage'
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './Components/Header'

function App() {
  return (
    <Router basename="/portfolio">
      <div className="App">
        <Header/>
        <main>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/projects" element={<Projects projects={[]} />} />
            <Route path="/projects/:id" element={<ProjectByIdPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/cv" element={<CV />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App