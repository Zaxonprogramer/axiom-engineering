import { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Projects.css'
import useReveal from '../../hooks/useReveal'

import aerospaceImage from '../../assets/images/projects/aerospace.jpg'
import driveModuleImage from '../../assets/images/projects/drive-module.jpg'
import turbineImage from '../../assets/images/projects/turbine.jpg'

const projects = [
  {
    number: '01',
    title: 'Aerospace Actuation System',
    category: 'Precision Mechanics',
    year: '2026',
    image: aerospaceImage,
    slug: 'aerospace-actuation-system',
    description:
      'High-precision mechanical actuation architecture developed for extreme loads, tight tolerances and repeatable performance.',
  },
  {
    number: '02',
    title: 'Autonomous Drive Module',
    category: 'Mobility Systems',
    year: '2026',
    image: driveModuleImage,
    slug: 'autonomous-drive-module',
    description:
      'Compact drive platform integrating mechanical engineering, thermal management and intelligent control systems.',
  },
  {
    number: '03',
    title: 'Industrial Turbine Assembly',
    category: 'Energy Systems',
    year: '2025',
    image: turbineImage,
    slug: 'industrial-turbine-assembly',
    description:
      'Performance-focused turbine architecture engineered around reliability, serviceability and demanding operating conditions.',
  },
]

function Project({ project, index, isOpen, onToggle }) {
  const projectRef = useRef(null)
  const navigate = useNavigate()

  const handleMouseMove = (event) => {
    if (window.matchMedia('(max-width: 600px)').matches) return

    const projectElement = projectRef.current
    if (!projectElement) return

    const bounds = projectElement.getBoundingClientRect()
    const x = (event.clientX - bounds.left) / bounds.width - 0.5
    const y = (event.clientY - bounds.top) / bounds.height - 0.5

    projectElement.style.setProperty('--image-x', `${x * 18}px`)
    projectElement.style.setProperty('--image-y', `${y * 12}px`)
  }

  const handleMouseLeave = () => {
    const projectElement = projectRef.current
    if (!projectElement) return

    projectElement.style.setProperty('--image-x', '0px')
    projectElement.style.setProperty('--image-y', '0px')
  }

  const handleClick = () => {
    if (window.matchMedia('(max-width: 600px)').matches) {
      onToggle()
      return
    }

    navigate(`/projects/${project.slug}`)
  }

  return (
    <article
      className={`project ${isOpen ? 'project--open' : ''}`}
      ref={projectRef}
      style={{ '--project-delay': `${500 + index * 240}ms` }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div className="project__image">
        <img src={project.image} alt={project.title} />
      </div>

      <div className="project__number">
        <span>{project.number}</span>
        <span className="project__number-line"></span>
      </div>

      <div className="project__main">
        <span className="project__category">{project.category}</span>

        <h3>{project.title}</h3>

        <p>{project.description}</p>
      </div>

      <div className="project__meta">
        <span>{project.year}</span>

        <span className="project__view">
          <Link
  className="project__view-desktop"
  to={`/projects/${project.slug}`}
  onClick={(event) => event.stopPropagation()}
>
  View project ↗
</Link>

          <span className="project__view-mobile">
            {isOpen ? 'Close image ↑' : 'View image ↓'}
          </span>
        </span>
      </div>
    </article>
  )
}

function Projects() {
  const [openProject, setOpenProject] = useState(null)

  const projectsRef = useReveal({
    threshold: 0.1,
    rootMargin: '0px 0px -8% 0px',
  })

  const toggleProject = (index) => {
    setOpenProject((current) => (current === index ? null : index))
  }

  return (
    <section
      className="projects projects--animated"
      id="projects"
      ref={projectsRef}
    >
      <div className="projects__header">
        <div>
          <span className="projects__index projects__reveal">
            01 / Selected Work
          </span>

          <h2 className="projects__title">
            <span className="projects__title-main projects__reveal">
              Engineered for
            </span>

            <span className="projects__title-muted projects__reveal">
              real-world impact.
            </span>
          </h2>
        </div>

        <p className="projects__intro projects__reveal">
          From first principles to production-ready systems, every project is
          developed around performance, precision and purpose.
        </p>
      </div>

      <div className="projects__list">
        {projects.map((project, index) => (
          <Project
            project={project}
            index={index}
            isOpen={openProject === index}
            onToggle={() => toggleProject(index)}
            key={project.number}
          />
        ))}
      </div>

      <div className="projects__footer projects__reveal">
        <span>AXIOM / Selected Engineering Systems</span>

        <Link to="/projects">
          View all projects
          <span>↗</span>
        </Link>
      </div>
    </section>
  )
}

export default Projects