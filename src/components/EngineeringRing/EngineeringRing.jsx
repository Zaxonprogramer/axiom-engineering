import './EngineeringRing.css'

const ticks = Array.from({ length: 36 }, (_, index) => index)

function EngineeringRing() {
  return (
    <section className="engineering-ring">
      <div className="engineering-ring__meta">
        <span>AX / SYSTEM INSTRUMENT</span>
        <span>CALIBRATION / ACTIVE</span>
      </div>

      <div className="engineering-ring__stage">
        <div className="engineering-ring__visual">
          <div className="engineering-ring__orbit">
            {ticks.map((tick) => (
              <span
                className={`engineering-ring__tick ${
                  tick % 3 === 0 ? 'engineering-ring__tick--major' : ''
                }`}
                style={{ '--tick': tick }}
                key={tick}
              />
            ))}

            <span className="engineering-ring__degree engineering-ring__degree--top">
              000°
            </span>

            <span className="engineering-ring__degree engineering-ring__degree--right">
              090°
            </span>

            <span className="engineering-ring__degree engineering-ring__degree--bottom">
              180°
            </span>

            <span className="engineering-ring__degree engineering-ring__degree--left">
              270°
            </span>
          </div>

          <div className="engineering-ring__inner">
            <div className="engineering-ring__cross engineering-ring__cross--horizontal" />
            <div className="engineering-ring__cross engineering-ring__cross--vertical" />

            <div className="engineering-ring__core">
              <span>AX</span>
              <strong>042</strong>
            </div>
          </div>

          <div className="engineering-ring__marker engineering-ring__marker--top">
            +
          </div>

          <div className="engineering-ring__marker engineering-ring__marker--right">
            +
          </div>

          <div className="engineering-ring__marker engineering-ring__marker--bottom">
            +
          </div>

          <div className="engineering-ring__marker engineering-ring__marker--left">
            +
          </div>
        </div>

        <div className="engineering-ring__copy">
          <span className="engineering-ring__label">
            Precision / Control
          </span>

          <h3>
            Engineered
            <span>to tolerance.</span>
          </h3>

          <p>
            Every physical system is defined by measurable constraints.
            Geometry, material, motion and tolerance are engineered as one
            connected system.
          </p>

          <div className="engineering-ring__specs">
            <div>
              <span>Tolerance</span>
              <strong>± 0.02 mm</strong>
            </div>

            <div>
              <span>Reference</span>
              <strong>AX-042</strong>
            </div>

            <div>
              <span>Rotation</span>
              <strong>360°</strong>
            </div>
          </div>
        </div>
      </div>

      <div className="engineering-ring__footer">
        <span>Mechanical reference system</span>
        <span>Continuous calibration / 01</span>
      </div>
    </section>
  )
}

export default EngineeringRing