import { useEffect, useRef, useState } from 'react'

function Counter({
  end,
  duration = 1600,
  decimals = 0,
  prefix = '',
  suffix = '',
}) {
  const counterRef = useRef(null)
  const [value, setValue] = useState(0)

  useEffect(() => {
    const element = counterRef.current

    if (!element) return

    let animationFrame
    let startTime = null

    const animate = (time) => {
      if (!startTime) {
        startTime = time
      }

      const progress = Math.min((time - startTime) / duration, 1)
      const easedProgress = 1 - Math.pow(1 - progress, 4)
      const currentValue = end * easedProgress

      setValue(currentValue)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        cancelAnimationFrame(animationFrame)

        if (entry.isIntersecting) {
          startTime = null
          setValue(0)
          animationFrame = requestAnimationFrame(animate)
        } else {
          startTime = null
          setValue(0)
        }
      },
      {
        threshold: 0.4,
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
      cancelAnimationFrame(animationFrame)
    }
  }, [end, duration])

  return (
    <span ref={counterRef}>
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </span>
  )
}

export default Counter