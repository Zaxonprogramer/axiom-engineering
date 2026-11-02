import './Capabilities.css'
import useReveal from '../../hooks/useReveal'

const capabilities = [
  {
    number: '01',
    title: 'Mechanical Engineering',
    code: 'ME-01',
    description:
      'Advanced mechanical systems developed around structural integrity, precision and real-world performance.',
    details: ['System Design', 'Mechanisms', 'Tolerance Analysis'],
  },
  {
    number: '02',
    title: 'Simulation',
    code: 'SIM-02',
    description:
      'Digital validation of complex systems before physical production begins.',
    details: ['FEA', 'Thermal Analysis', 'Motion Studies'],
  },
  {
    number: '03',
    title: 'Prototyping',
    code: 'PRO-03',
    description:
      'Rapid development of functional prototypes for testing, validation and iteration.',
    details: ['CNC', 'Additive', 'Functional Testing'],
  },
  {
    number: '04',
    title: 'Manufacturing',
    code: 'MFG-04',
    description:
      'Production-focused engineering built around repeatability, quality and demanding tolerances.',
    details: ['Precision Machining', 'Assembly', 'Quality Control'],
  },
  {
    number: '05',
    title: 'Automation',
    code: 'AUT-05',
    description:
      'Integrated mechanical and control systems designed to increase speed, accuracy and reliability.',
    details: ['Robotics', 'Control Systems', 'Integration'],
  },
]

function Capabilities() {
  const capabilitiesRef = useReveal({
    threshold: 0.1,
    rootMargin: '0px 0px -8% 0px',
  })

  return (
    <section
      className="capabilities capabilities--animated"
      id="capabilities"
      ref={capabilitiesRef}
    >
      <div className="capabilities__top capabilities__reveal">
        <span>02 / Capabilities</span>
        <span>Engineering disciplines / 05</span>
      </div>

      <div className="capabilities__heading">
        <h2>
          <span className="capabilities__heading-line capabilities__reveal">
            From concept
          </span>

          <span className="capabilities__heading-line capabilities__heading-line--muted capabilities__reveal">
            to physical system.
          </span>
        </h2>

        <p className="capabilities__reveal">
          AXIOM combines engineering, simulation and manufacturing into one
          continuous development process.
        </p>
      </div>

      <div className="capabilities__grid">
        {capabilities.map((capability, index) => (
          <article
            className="capability"
            style={{ '--capability-delay': `${500 + index * 180}ms` }}
            key={capability.number}
          >
            <div className="capability__number">
              {capability.number}
            </div>

            <div className="capability__content">
              <span className="capability__code">
                {capability.code}
              </span>

              <h3>{capability.title}</h3>

              <p>{capability.description}</p>

              <div className="capability__details">
                {capability.details.map((detail) => (
                  <span key={detail}>{detail}</span>
                ))}
              </div>
            </div>

            <div className="capability__arrow">↗</div>
          </article>
        ))}
      </div>

      <div className="capabilities__footer capabilities__reveal">
        <span>AXIOM / Integrated Engineering</span>
        <span>Concept → Validation → Production</span>
      </div>
    </section>
  )
}

export default Capabilities