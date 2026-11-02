import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import ProjectsPage from './pages/Projects/ProjectsPage'
import ProjectDetail from './pages/Projects/ProjectDetail/ProjectDetail'
import StartProject from './pages/StartProject/StartProject'
import IntroLoader from './components/IntroLoader/IntroLoader'
import './App.css'

function App() {
  return (
    <>
    <IntroLoader />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:projectSlug" element={<ProjectDetail />} />
        <Route path="/start-project" element={<StartProject />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App