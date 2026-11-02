import './Manufacturing.css'
import useReveal from '../../hooks/useReveal'
import engineerImage from '../../assets/images/heroEngineer.png'

const manufacturingData = [
  {
    label: 'Precision',
    value: '± 0.02 mm',
  },
  {
    label: 'Validation',
    value: '100%',
  },
  {
    label: 'Workflow',
    value: 'CAD → BUILD',
  },
]

function Manufacturing() {
  const manufacturingRef = useReveal({
    threshold: 0.18,
    rootMargin: '0px 0px -8% 0px',
  })

  return (
    <section
      className="manufacturing manufacturing--animated"
      id="manufacturing"
      ref={manufacturingRef}
    >
      <div className="manufacturing__image" aria-hidden="true">
        <img src={engineerImage} alt="" />
      </div>

      <div className="manufacturing__overlay"></div>

      <div className="manufacturing__top manufacturing__reveal">
        <span>04 / Manufacturing</span>
        <span>Physical systems / Production</span>
      </div>

      <div className="manufacturing__content">
        <div className="manufacturing__status manufacturing__reveal">
          <span className="manufacturing__status-dot"></span>
          <span>Production capability active</span>
        </div>

        <h2>
          <span className="manufacturing__title-line manufacturing__reveal">
            Built beyond
          </span>

          <span className="manufacturing__title-line manufacturing__title-line--muted manufacturing__reveal">
            the screen.
          </span>
        </h2>

        <div className="manufacturing__bottom">
          <p className="manufacturing__description manufacturing__reveal">
            Engineering does not end with a digital model. AXIOM transforms
            validated designs into precise physical systems through advanced
            manufacturing, assembly and testing.
          </p>

          <div className="manufacturing__data">
            {manufacturingData.map((item, index) => (
              <div
                className="manufacturing__data-item"
                style={{ '--data-delay': `${1000 + index * 250}ms` }}
                key={item.label}
              >
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="manufacturing__side manufacturing__reveal">
        <span>AX / MFG-04</span>
        <span>Precision manufacturing</span>
      </div>
    </section>
  )
}

export default Manufacturing