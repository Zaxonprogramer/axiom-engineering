import { useState } from 'react'
import './StartProject.css'

const projectTypes = [
  'Mechanical Engineering',
  'Product Development',
  'Mobility Systems',
  'Energy Systems',
  'Precision Manufacturing',
  'Other',
]

const budgetRanges = [
  '€10K — €25K',
  '€25K — €50K',
  '€50K — €100K',
  '€100K+',
]

function StartProject() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((current) => ({
      ...current,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <main className="start-project">
      <section className="start-project__hero">
        <div className="start-project__meta">
          <span>05 / Start a Project</span>
          <span>AXIOM / Project Intake</span>
        </div>

        <div className="start-project__hero-grid">
          <h1>
            Bring us
            <span>the difficult</span>
            problem.
          </h1>

          <div className="start-project__intro">
            <p>
              Tell us what you are building, where the engineering challenge
              begins and what success needs to look like.
            </p>

            <span>Precision starts with the right brief.</span>
          </div>
        </div>
      </section>

      <section className="project-form-section">
        <div className="project-form-section__aside">
          <span>Project Brief / 001</span>

          <div>
            <h2>Start the conversation.</h2>

            <p>
              Share the essential details. We use this information to
              understand the technical scope, project requirements and the
              right next step.
            </p>
          </div>

          <div className="project-form-section__contact">
            <span>AXIOM Engineering</span>
            <span>Luxembourg / Europe</span>
            <span>Engineering beyond limits.</span>
          </div>
        </div>

        <form className="project-form" onSubmit={handleSubmit}>
          <div className="project-form__row">
            <label className="project-field">
              <span>
                01
                <strong>Name</strong>
              </span>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                autoComplete="name"
                required
              />
            </label>

            <label className="project-field">
              <span>
                02
                <strong>Email</strong>
              </span>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@company.com"
                autoComplete="email"
                required
              />
            </label>
          </div>

          <label className="project-field">
            <span>
              03
              <strong>Company</strong>
            </span>

            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company / organization"
              autoComplete="organization"
            />
          </label>

          <div className="project-field project-field--options">
            <span>
              04
              <strong>Project Type</strong>
            </span>

            <div className="project-options">
              {projectTypes.map((type) => (
                <label
                  className={`project-option ${
                    formData.projectType === type
                      ? 'project-option--selected'
                      : ''
                  }`}
                  key={type}
                >
                  <input
                    type="radio"
                    name="projectType"
                    value={type}
                    checked={formData.projectType === type}
                    onChange={handleChange}
                  />

                  <span>{type}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="project-field project-field--options">
            <span>
              05
              <strong>Budget Range</strong>
            </span>

            <div className="project-options project-options--budget">
              {budgetRanges.map((budget) => (
                <label
                  className={`project-option ${
                    formData.budget === budget
                      ? 'project-option--selected'
                      : ''
                  }`}
                  key={budget}
                >
                  <input
                    type="radio"
                    name="budget"
                    value={budget}
                    checked={formData.budget === budget}
                    onChange={handleChange}
                  />

                  <span>{budget}</span>
                </label>
              ))}
            </div>
          </div>

          <label className="project-field">
            <span>
              06
              <strong>Timeline</strong>
            </span>

            <input
              type="text"
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              placeholder="Target start / delivery date"
            />
          </label>

          <label className="project-field project-field--textarea">
            <span>
              07
              <strong>Project Description</strong>
            </span>

            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe the system, challenge, requirements and what you need from AXIOM."
              rows="7"
              required
            />
          </label>

          <div className="project-form__submit">
            <div>
              <span>Project Intake</span>
              <span>AX / 2026</span>
            </div>

            <button type="submit">
              <span>Submit project</span>
              <span>↗</span>
            </button>
          </div>
        </form>
      </section>
    </main>
  )
}

export default StartProject