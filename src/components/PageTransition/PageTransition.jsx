import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import './PageTransition.css'

function PageTransition() {
  const location = useLocation()
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    setIsActive(true)

    const timer = setTimeout(() => {
      setIsActive(false)
    }, 700)

    return () => clearTimeout(timer)
  }, [location.pathname])

  return (
    <div
      className={`page-transition ${
        isActive ? 'page-transition--active' : ''
      }`}
      aria-hidden="true"
    >
      <div className="page-transition__panel"></div>

      <div className="page-transition__meta">
        <span>AXIOM</span>
        <span>ENGINEERING / SYSTEM</span>
      </div>
    </div>
  )
}

export default PageTransition