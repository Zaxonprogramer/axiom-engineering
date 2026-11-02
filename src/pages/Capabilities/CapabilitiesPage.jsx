import './CapabilitiesPage.css'
import EngineeringRing from '../../components/EngineeringRing/EngineeringRing'

const capabilities = [
  {
    number: '01',
    code: 'ME-01',
    title: 'Mechanical Engineering',
    description:
      'Mechanical systems developed around structural integrity, controlled motion and precision interfaces.',
    services: ['System Architecture', 'Mechanism Design', 'Tolerance Analysis'],
    output: 'Physical Systems',
  },
  {
    number: '02',
    code: 'SIM-02',
    title: 'Simulation',
    description:
      'Digital validation used to understand structural, thermal and dynamic behavior before physical production.',
    services: ['FEA', 'Thermal Analysis', 'Motion Studies'],
    output: 'Validated Models',
  },
  {
    number: '03',
    code: 'PRO-03',
    title: 'Prototyping',
    description:
      'Functional prototypes built to expose problems early, validate decisions and accelerate engineering iteration.',
    services: ['CNC', 'Additive Manufacturing', 'Functional Testing'],
    output: 'Working Hardware',
  },
  {
    number: '04',
    code: 'MFG-04',
    title: 'Manufacturing',
    description:
      'Production engineering focused on repeatability, controlled tolerances and reliable physical execution.',
    services: ['Precision Machining', 'Assembly', 'Quality Control'],
    output: 'Production Systems',
  },
  {
    number: '05',
    code: 'AUT-05',
    title: 'Automation',
    description:
      'Integrated mechanical and control architectures engineered to improve speed, accuracy and reliability.',
    services: ['Robotics', 'Control Systems', 'System Integration'],
    output: 'Automated Systems',
  },
]

function CapabilitiesPage() {
  return (
    <main className="capabilities-page">
      <section className="capabilities-page__hero">
        <div className="capabilities-page__hero-meta">
          <span>02 / Capabilities</span>
          <span>Integrated Engineering / 05 Disciplines</span>
        </div>

        <div className="capabilities-page__hero-content">
          <span className="capabilities-page__eyebrow">
            AXIOM / Engineering Architecture
          </span>

          <h1>
            Engineering
            <span>Capabilities.</span>
          </h1>
        </div>

        <div className="capabilities-page__hero-bottom">
          <p>
            Five connected engineering disciplines operating as one continuous
            development system — from first principles to validated physical
            hardware.
          </p>

          <div>
            <span>Concept</span>
            <span>→</span>
            <span>Validation</span>
            <span>→</span>
            <span>Production</span>
          </div>
        </div>
      </section>

      <section className="capabilities-page__system">
        <div className="capabilities-page__system-header">
          <span>Engineering System / 001</span>
          <span>Disciplines / 05</span>
        </div>

        <div className="capabilities-page__system-heading">
          <h2>
            One process.
            <span>Multiple disciplines.</span>
          </h2>

          <p>
            AXIOM connects mechanical design, simulation, prototyping,
            manufacturing and automation into a single engineering workflow.
          </p>
        </div>

        <div className="capabilities-page__list">
          {capabilities.map((capability) => (
            <article
              className="capabilities-page__item"
              key={capability.number}
            >
              <div className="capabilities-page__item-number">
                {capability.number}
              </div>

              <div className="capabilities-page__item-main">
                <span>{capability.code}</span>
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
              </div>

              <div className="capabilities-page__item-services">
                <span>Core disciplines</span>

                {capability.services.map((service) => (
                  <strong key={service}>{service}</strong>
                ))}
              </div>

              <div className="capabilities-page__item-output">
                <span>Output</span>
                <strong>{capability.output}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="capabilities-page__instrument">
        <div className="capabilities-page__instrument-heading">
          <span>AX / Precision Standard</span>

          <h2>
            Defined by
            <span>measurement.</span>
          </h2>

          <p>
            Engineering decisions become meaningful when they can be measured,
            validated and repeated.
          </p>
        </div>

        <EngineeringRing />
      </section>

      <section className="capabilities-page__metrics">
        <div className="capabilities-page__metrics-header">
          <span>System Parameters</span>
          <span>AX / Engineering Standard</span>
        </div>

        <div className="capabilities-page__metrics-grid">
          <div>
            <span>Nominal Tolerance</span>
            <strong>± 0.02</strong>
            <small>MM</small>
          </div>

          <div>
            <span>Disciplines</span>
            <strong>05</strong>
            <small>CONNECTED</small>
          </div>

          <div>
            <span>Validation</span>
            <strong>100</strong>
            <small>% TARGET</small>
          </div>

          <div>
            <span>Workflow</span>
            <strong>01</strong>
            <small>INTEGRATED</small>
          </div>
        </div>
      </section>

      <section className="capabilities-page__closing">
        <span>AXIOM / Engineering Capability</span>

        <h2>
          From an idea
          <span>to a system.</span>
        </h2>

        <p>
          Every discipline exists for the same reason: turning complex
          engineering problems into controlled, measurable physical results.
        </p>
      </section>
    </main>
  )
}

export default CapabilitiesPage