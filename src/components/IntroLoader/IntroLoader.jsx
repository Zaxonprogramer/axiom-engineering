import { useEffect, useState } from 'react'
import './IntroLoader.css'

function IntroLoader() {
  const [scene, setScene] = useState('boot')
  const [isLeaving, setIsLeaving] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    const timers = [
      setTimeout(() => setScene('lock'), 2500),
      setTimeout(() => setScene('pause'), 4000),
      setTimeout(() => setScene('brand'), 4550),
      setTimeout(() => setIsLeaving(true), 7000),
      setTimeout(() => {
        setIsVisible(false)
        document.body.style.overflow = ''
      }, 7600),
    ]

    return () => {
      timers.forEach(clearTimeout)
      document.body.style.overflow = ''
    }
  }, [])

  if (!isVisible) return null

  return (
    <div
      className={`intro-loader intro-loader--${scene} ${
        isLeaving ? 'intro-loader--leaving' : ''
      }`}
      aria-hidden="true"
    >
      <div className="intro-loader__grid"></div>

      <div className="intro-loader__frame">
        <span>AXIOM / ENGINEERING</span>
        <span>AX / SYSTEM 042</span>
      </div>

      <div className="intro-system">
        <div className="intro-system__ring">
          <div className="intro-system__orbit intro-system__orbit--outer">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="intro-system__orbit intro-system__orbit--middle">
            <span></span>
            <span></span>
          </div>

          <div className="intro-system__orbit intro-system__orbit--inner"></div>

          <div className="intro-system__axis intro-system__axis--x"></div>
          <div className="intro-system__axis intro-system__axis--y"></div>

          <div className="intro-system__core">
            <span>AX</span>
          </div>

          <span className="intro-system__code intro-system__code--top">
            042
          </span>

          <span className="intro-system__code intro-system__code--right">
            01
          </span>

          <span className="intro-system__code intro-system__code--bottom">
            SYS
          </span>
        </div>

        <div className="intro-system__data">
          <div className="intro-system__progress">
            <span></span>
          </div>

          <div className="intro-system__data-row">
            <span className="intro-system__status">
              {scene === 'boot' && 'Initializing mechanical system'}
              {scene === 'lock' && 'System alignment confirmed'}
              {(scene === 'pause' || scene === 'brand') && 'System ready'}
            </span>

            <span>AX / 042</span>
          </div>
        </div>

        <div className="intro-system__locked">
          <span>AX / 042</span>
          <strong>SYSTEM</strong>
          <strong>LOCKED</strong>
          <i></i>
          <small>Mechanical alignment confirmed</small>
        </div>
      </div>

      <div className="intro-brand">
        <div className="intro-brand__rule"></div>

        <span className="intro-brand__code">AX / 001</span>

        <div className="intro-brand__title-mask">
          <h1>AXIOM</h1>
        </div>

        <div className="intro-brand__meta">
          <span>ENGINEERING</span>
          <span>PRECISION / PERFORMANCE / PURPOSE</span>
        </div>
      </div>

      <div className="intro-loader__side">
        <span>PRECISION SYSTEMS</span>
        <span>MECHANICAL / 042</span>
      </div>

      <div className="intro-loader__footer">
        <span>ENGINEERING BEYOND LIMITS</span>
        <span>PRECISION SYSTEMS</span>
      </div>
    </div>
  )
}

export default IntroLoader