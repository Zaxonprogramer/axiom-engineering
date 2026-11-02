import './Hero.css'
import heroBlueprint from '../../assets/images/heroBlueprint.png'

function Hero() {
  return (
    <section className="hero" id="home">
   <div className="hero__blueprint" aria-hidden="true">
  <img src={heroBlueprint} alt="" />
</div>
      <div className="hero__content">
        <p className="hero__eyebrow">
            <div className="hero__status">
  <span className="hero__status-dot"></span>
  <span>System / Prototype 01</span>
</div>
<div className="hero__specs">
  <div>
    <span>Material</span>
    <strong>Ti-6Al-4V</strong>
  </div>

  <div>
    <span>Tolerance</span>
    <strong>± 0.02 mm</strong>
  </div>

  <div>
    <span>Assembly</span>
    <strong>AX-042</strong>
  </div>
</div>
          Precision Engineering / Luxembourg
        </p>

        <h1 className="hero__title">
          <span>Engineering</span>
          <span>Beyond</span>
          <span>Limits.</span>
        </h1>
   

        <div className="hero__bottom">
          <p className="hero__description">
            We design and engineer high-performance systems built for
            demanding environments and ambitious ideas.
          </p>

          <a className="hero__link" href="#projects">
            Explore projects
            <span aria-hidden="true">↘</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero