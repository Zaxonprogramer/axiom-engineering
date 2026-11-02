import { Link, Navigate, useParams } from 'react-router-dom'
import './ProjectDetail.css'
import projects from './projectData'

function ProjectDetail() {
  const { projectSlug } = useParams()
  const project = projects[projectSlug]

  if (!project) {
    return <Navigate to="/projects" replace />
  }

  return (
    <main className="project-detail">
      <section className="project-detail__hero">
        <div className="project-detail__meta">
          <span>Project / {project.number}</span>
          <span>{project.code}</span>
        </div>

        <div className="project-detail__heading">
          <span className="project-detail__category">
            {project.category} / {project.year}
          </span>

          <h1>
            {project.titleLine1}
            <span>{project.titleLine2}</span>
            {project.titleLine3}
          </h1>
        </div>

        <div className="project-detail__hero-bottom">
          <p>{project.heroDescription}</p>
          <span>{project.status} Engineering System</span>
        </div>
      </section>

      <section className="project-detail__visual">
        <img
          src={project.image}
          alt={`${project.titleLine1} ${project.titleLine2} ${project.titleLine3}`}
        />

        <div className="project-detail__visual-meta">
          <span>AXIOM / {project.imageCode}</span>
          <span>{project.visualLabel}</span>
        </div>
      </section>

      <section className="project-detail__overview">
        <div className="project-detail__section-index">
          <span>01 / Overview</span>
        </div>

        <div className="project-detail__overview-content">
          <h2>
            {project.overviewTitle}
            <span>{project.overviewMuted}</span>
          </h2>

          <div className="project-detail__overview-copy">
            <p>{project.overviewText1}</p>
            <p>{project.overviewText2}</p>
          </div>
        </div>
      </section>

      <section className="project-detail__technical">
        <div className="project-detail__technical-header">
          <span>02 / Technical Data</span>
          <span>{project.code} / System Parameters</span>
        </div>

        <div className="project-detail__spec-grid">
          <div>
            <span>Material</span>
            <strong>{project.material}</strong>
          </div>

          <div>
            <span>Tolerance</span>
            <strong>{project.tolerance}</strong>
          </div>

          <div>
            <span>System</span>
            <strong>{project.system}</strong>
          </div>

          <div>
            <span>Status</span>
            <strong>{project.status}</strong>
          </div>

          <div>
            <span>Discipline</span>
            <strong>{project.discipline}</strong>
          </div>

          <div>
            <span>Year</span>
            <strong>{project.year}</strong>
          </div>
        </div>
      </section>

      <section className="project-detail__challenge">
        <div className="project-detail__challenge-label">
          <span>03 / Engineering Challenge</span>
        </div>

        <div className="project-detail__challenge-content">
          <h2>
            {project.challengeTitle}
            <span>{project.challengeMuted}</span>
          </h2>

          <div className="project-detail__challenge-copy">
            <p>{project.challengeText1}</p>
            <p>{project.challengeText2}</p>
          </div>
        </div>
      </section>

      <section className="project-detail__result">
        <div className="project-detail__result-top">
          <span>04 / Result</span>
          <span>Validation / Complete</span>
        </div>

        <div className="project-detail__result-content">
          <h2>
            {project.resultLine1}
            <span>{project.resultLine2}</span>
            {project.resultLine3}
          </h2>

          <p>{project.resultText}</p>
        </div>
      </section>

      <section className="project-detail__next">
        <span>Next project / {project.nextNumber}</span>

        <Link to={`/projects/${project.nextSlug}`}>
          <div>
            <small>{project.nextCategory}</small>
            <strong>{project.nextTitle}</strong>
          </div>

          <span>↗</span>
        </Link>
      </section>
    </main>
  )
}

export default ProjectDetail