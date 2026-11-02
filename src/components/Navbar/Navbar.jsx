import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const goToHomeSection = (sectionId) => {
    closeMenu()

    if (location.pathname === '/') {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: 'smooth',
      })

      return
    }

    navigate(`/#${sectionId}`)
  }

  return (
    <>
      <header
        className={`navbar ${isScrolled ? 'navbar--scrolled' : ''} ${
          isMenuOpen ? 'navbar--menu-open' : ''
        }`}
      >
        <Link className="navbar__brand" to="/" onClick={closeMenu}>
          <span className="navbar__logo">AXIOM</span>
          <span className="navbar__label">ENGINEERING</span>
        </Link>

        <nav className="navbar__nav" aria-label="Main navigation">
          <Link to="/projects" onClick={closeMenu}>
            Projects
          </Link>

          <button
            type="button"
            onClick={() => goToHomeSection('capabilities')}
          >
            Capabilities
          </button>

          <button type="button" onClick={() => goToHomeSection('about')}>
            About
          </button>

          <button type="button" onClick={() => goToHomeSection('contact')}>
            Contact
          </button>
        </nav>

        <Link
          className="navbar__cta"
          to="/start-project"
          onClick={closeMenu}
        >
          <span>Start a project</span>

          <span className="navbar__cta-arrow" aria-hidden="true">
            ↗
          </span>
        </Link>

        <button
          className={`navbar__menu-button ${
            isMenuOpen ? 'navbar__menu-button--active' : ''
          }`}
          type="button"
          aria-label={isMenuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span></span>
          <span></span>
        </button>
      </header>

      <div
        className={`mobile-menu ${isMenuOpen ? 'mobile-menu--open' : ''}`}
        aria-hidden={!isMenuOpen}
      >
        <div className="mobile-menu__meta">
          <span>AX / Navigation</span>
          <span>Luxembourg / Europe</span>
        </div>

        <nav className="mobile-menu__nav" aria-label="Mobile navigation">
          <Link to="/projects" onClick={closeMenu}>
            <span>01</span>
            <strong>Projects</strong>
            <span>↘</span>
          </Link>

          <button
            type="button"
            onClick={() => goToHomeSection('capabilities')}
          >
            <span>02</span>
            <strong>Capabilities</strong>
            <span>↘</span>
          </button>

          <button type="button" onClick={() => goToHomeSection('about')}>
            <span>03</span>
            <strong>About</strong>
            <span>↘</span>
          </button>

          <button type="button" onClick={() => goToHomeSection('contact')}>
            <span>04</span>
            <strong>Contact</strong>
            <span>↘</span>
          </button>
        </nav>

        <div className="mobile-menu__bottom">
          <span>Engineering beyond limits.</span>

          <Link to="/start-project" onClick={closeMenu}>
            Start a project
            <span>↗</span>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Navbar