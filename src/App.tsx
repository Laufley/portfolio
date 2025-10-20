import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Containers/Home'
import Projects from './Components/Projects'
import Personal from './Components/Personal'
import CV from './Components/CV'
import ProjectByIdPage from './Components/ProjectByIdPage'
import ErrorPage from './Components/ErrorPage'
import './App.css'

function App() {
  return (
    <Router basename="/portfolio">
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectByIdPage />} />
            <Route path="/personal" element={<Personal />} />
            <Route path="/cv" element={<CV />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App