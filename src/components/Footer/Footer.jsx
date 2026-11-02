import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <a className="footer__brand" href="#home">
          AXIOM Engineering
        </a>

        <nav className="footer__nav" aria-label="Footer navigation">
          <a href="#projects">Projects</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <a
          className="footer__email"
          href="mailto:hello@axiom.engineering"
        >
          hello@axiom.engineering ↗
        </a>
      </div>

      <div className="footer__wordmark" aria-hidden="true">
        AXIOM
      </div>

      <div className="footer__bottom">
        <span>© 2026 AXIOM Engineering</span>
        <span>Luxembourg / Europe</span>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  )
}

export default Footer