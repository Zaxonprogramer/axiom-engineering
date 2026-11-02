import './Process.css'
import useReveal from '../../hooks/useReveal'

const steps = [
  {
    number: '01',
    title: 'Discover',
    code: 'REQ',
    text: 'Requirements, constraints and performance targets are defined.',
  },
  {
    number: '02',
    title: 'Design',
    code: 'CAD',
    text: 'Engineering concepts become precise mechanical architectures.',
  },
  {
    number: '03',
    title: 'Simulate',
    code: 'FEA',
    text: 'Loads, motion and thermal behavior are validated digitally.',
  },
  {
    number: '04',
    title: 'Prototype',
    code: 'PRO',
    text: 'Physical systems are manufactured, assembled and tested.',
  },
  {
    number: '05',
    title: 'Validate',
    code: 'VAL',
    text: 'Final performance is measured against real operating conditions.',
  },
]

function Process() {
  const processRef = useReveal({
    threshold: 0.18,
    rootMargin: '0px 0px -10% 0px',
  })

  return (
    <section
      className="process process--animated"
      id="process"
      ref={processRef}
    >
      <div className="process__top process__reveal">
        <span>03 / Engineering Process</span>
        <span>Development sequence / 01—05</span>
      </div>

      <div className="process__heading">
        <h2>
          <span className="process__heading-line process__reveal">
            From first sketch
          </span>

          <span className="process__heading-line process__heading-line--muted process__reveal">
            to final system.
          </span>
        </h2>

        <p className="process__reveal">
          Every AXIOM project moves through a structured engineering process
          designed to reduce uncertainty before production.
        </p>
      </div>

      <div className="process__timeline">
        <div className="process__line" aria-hidden="true">
          <div className="process__line-progress"></div>
        </div>

        {steps.map((step, index) => (
          <article
            className="process__step"
            style={{ '--step-delay': `${650 + index * 280}ms` }}
            key={step.number}
          >
            <div className="process__point"></div>

            <div className="process__step-content">
              <div className="process__step-top">
                <span>{step.number}</span>
                <span>{step.code}</span>
              </div>

              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="process__footer process__reveal">
        <span>Requirements</span>
        <span>Engineering</span>
        <span>Physical validation</span>
      </div>
    </section>
  )
}

export default Process