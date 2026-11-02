import { Link } from 'react-router-dom'
import './ProjectsPage.css'

import aerospaceImage from '../../assets/images/projects/aerospace.jpg'
import driveModuleImage from '../../assets/images/projects/drive-module.jpg'
import turbineImage from '../../assets/images/projects/turbine.jpg'

const projects = [
  {
    number: '01',
    code: 'AX-ACT / 01',
    category: 'Precision Mechanics',
    title: 'Aerospace Actuation System',
    description:
      'High-precision mechanical actuation architecture developed for extreme loads, tight tolerances and repeatable performance.',
    image: aerospaceImage,
    year: '2026',
    tolerance: '± 0.02 mm',
    status: 'Validated',
    slug: 'aerospace-actuation-system',
  },
  {
    number: '02',
    code: 'AX-DRV / 02',
    category: 'Mobility Systems',
    title: 'Autonomous Drive Module',
    description:
      'Compact electric drive platform integrating mechanical engineering, thermal management and intelligent control systems.',
    image: driveModuleImage,
    year: '2026',
    tolerance: '± 0.05 mm',
    status: 'Prototype',
    slug: 'autonomous-drive-module',
  },
  {
    number: '03',
    code: 'AX-TRB / 03',
    category: 'Energy Systems',
    title: 'Industrial Turbine Assembly',
    description:
      'Performance-focused turbine architecture engineered around reliability, serviceability and demanding operating conditions.',
    image: turbineImage,
    year: '2025',
    tolerance: '± 0.03 mm',
    status: 'Production',
    slug: 'industrial-turbine-assembly',
  },
]

function ProjectsPage() {
  return (
    <main className="projects-page">
      <section className="projects-page__hero">
        <div className="projects-page__meta">
          <span>01 / Projects</span>
          <span>Selected Engineering Systems</span>
        </div>

        <h1>
          Selected
          <span>Engineering</span>
          Systems.
        </h1>

        <div className="projects-page__bottom">
          <p>
            A selection of precision engineering systems developed around
            performance, reliability and demanding real-world conditions.
          </p>

          <span>AX / Project Index 001—003</span>
        </div>
      </section>

      <section className="projects-showcase">
        <div className="projects-showcase__header">
          <span>Selected systems / 03</span>
          <span>2025 — 2026</span>
        </div>

        <div className="projects-showcase__list">
          {projects.map((project) => (
            <article className="project-case" key={project.number}>
              <div className="project-case__top">
                <span>{project.number}</span>
                <span>{project.code}</span>
                <span>{project.category}</span>
              </div>

              <div className="project-case__image">
                <img src={project.image} alt={project.title} />

                <div className="project-case__image-meta">
                  <span>AXIOM / {project.code}</span>
                  <span>{project.year}</span>
                </div>
              </div>

              <div className="project-case__content">
                <div className="project-case__title">
                  <span>{project.category}</span>
                  <h2>{project.title}</h2>
                </div>

                <div className="project-case__details">
                  <p>{project.description}</p>

                  <div className="project-case__specs">
                    <div>
                      <span>Year</span>
                      <strong>{project.year}</strong>
                    </div>

                    <div>
                      <span>Tolerance</span>
                      <strong>{project.tolerance}</strong>
                    </div>

                    <div>
                      <span>Status</span>
                      <strong>{project.status}</strong>
                    </div>
                  </div>

                  <Link
                    className="project-case__link"
                    to={`/projects/${project.slug}`}
                  >
                    <span>View case study</span>
                    <span>↗</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="projects-showcase__footer">
          <span>AXIOM / Engineering Systems</span>
          <span>Precision / Performance / Validation</span>
        </div>
      </section>
    </main>
  )
}

export default ProjectsPage