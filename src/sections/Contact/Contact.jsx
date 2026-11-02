import './Contact.css'

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact__top">
        <span>06 / Start a Project</span>
        <span>New engineering challenges / Open</span>
      </div>

      <div className="contact__main">
        <p className="contact__eyebrow">
          Have something difficult in mind?
        </p>

        <h2>
          Let's engineer
          <span>what comes next.</span>
        </h2>

        <a
          className="contact__cta"
          href="mailto:hello@axiom.engineering"
        >
          <span>Start a project</span>
          <span className="contact__arrow">↗</span>
        </a>
      </div>

      <div className="contact__info">
        <div className="contact__info-item">
          <span>Project type</span>
          <strong>Mechanical / Systems</strong>
        </div>

        <div className="contact__info-item">
          <span>Typical timeline</span>
          <strong>03 — 06 Months</strong>
        </div>

        <div className="contact__info-item">
          <span>Location</span>
          <strong>Luxembourg / Europe</strong>
        </div>

        <div className="contact__info-item">
          <span>Contact</span>
          <strong>hello@axiom.engineering</strong>
        </div>
      </div>
    </section>
  )
}

export default Contact