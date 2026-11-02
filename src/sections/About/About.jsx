import './About.css'
import useReveal from '../../hooks/useReveal'
import Counter from '../../components/Counter/Counter'

const stats = [
  {
    end: 120,
    suffix: '+',
    label: 'Engineered Systems',
  },
  {
    end: 0.02,
    decimals: 2,
    prefix: '±',
    unit: 'mm',
    label: 'Precision Capability',
  },
  {
    end: 18,
    label: 'Industry Applications',
  },
  {
    end: 96,
    suffix: '%',
    label: 'Validation Success',
  },
]

function About() {
  const aboutRef = useReveal({
    threshold: 0.12,
  })

  return (
    <section className="about reveal-section" id="about" ref={aboutRef}>
      <div className="about__top reveal-item">
        <span>05 / About AXIOM</span>
        <span>Engineering / Development / Production</span>
      </div>

      <div className="about__statement">
        <span className="about__eyebrow reveal-item">
          Built around engineering
        </span>

        <h2>
          <span className="about__line reveal-item">We don't design</span>
          <span className="about__line about__line--muted reveal-item">
            for appearance.
          </span>
          <span className="about__line reveal-item">We design</span>
          <span className="about__line about__line--muted reveal-item">
            for performance.
          </span>
        </h2>
      </div>

      <div className="about__content">
        <div className="about__copy reveal-item">
          <p>
            AXIOM is an independent engineering studio focused on turning
            ambitious technical ideas into systems that can be manufactured,
            tested and used in the real world.
          </p>

          <p>
            Our work connects mechanical design, simulation, prototyping and
            production into one continuous engineering process.
          </p>

          <a className="about__link" href="#contact">
            Discover AXIOM
            <span>↗</span>
          </a>
        </div>

        <div className="about__stats">
          {stats.map((stat, index) => (
            <div
              className="about__stat reveal-item"
              style={{ '--reveal-delay': `${index * 90}ms` }}
              key={stat.label}
            >
             <div className="about__value">
  <Counter
    end={stat.end}
    decimals={stat.decimals}
    prefix={stat.prefix}
    suffix={stat.suffix}
  />

  {stat.unit && <small>{stat.unit}</small>}
</div>

              <span className="about__label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="about__footer reveal-item">
        <span>AXIOM Engineering</span>
        <span>Luxembourg / Europe</span>
        <span>Est. 2026</span>
      </div>
    </section>
  )
}

export default About