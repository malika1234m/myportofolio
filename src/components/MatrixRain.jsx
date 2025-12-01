import { useEffect, useRef } from 'react'

function MatrixRain() {
  const canvasRef = useRef(null)
  const animationRef = useRef(0)
  const cleanupRef = useRef(() => {})

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    let width = canvas.clientWidth
    let height = canvas.clientHeight
    let dpr = Math.max(1, Math.floor(window.devicePixelRatio || 1))

    function resizeToElement() {
      width = canvas.clientWidth
      height = canvas.clientHeight
      dpr = Math.max(1, Math.floor(window.devicePixelRatio || 1))
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = width + 'px'
      canvas.style.height = height + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    resizeToElement()

    const letters = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズヅブプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴ0123456789'
    const fontSize = 16
    let columns = Math.floor(width / fontSize)
    let drops = Array.from({ length: columns }, () => Math.floor(Math.random() * -100))

    function draw() {
      // Faint trailing effect
      ctx.fillStyle = 'rgba(10,14,39,0.08)'
      ctx.fillRect(0, 0, width, height)

      ctx.fillStyle = '#00d4ff'
      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const text = letters.charAt(Math.floor(Math.random() * letters.length))
        const x = i * fontSize
        const y = drops[i] * fontSize
        // Glow shadow
        ctx.shadowColor = 'rgba(0,212,255,0.4)'
        ctx.shadowBlur = 8
        ctx.fillText(text, x, y)

        if (y > height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }

      animationRef.current = requestAnimationFrame(draw)
    }

    const ro = new ResizeObserver(() => {
      cancelAnimationFrame(animationRef.current)
      resizeToElement()
      columns = Math.floor(width / fontSize)
      drops = Array.from({ length: columns }, () => Math.floor(Math.random() * -100))
      animationRef.current = requestAnimationFrame(draw)
    })
    ro.observe(canvas)
    animationRef.current = requestAnimationFrame(draw)

    cleanupRef.current = () => {
      cancelAnimationFrame(animationRef.current)
      ro.disconnect()
    }

    return () => cleanupRef.current()
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="matrix-canvas"
      aria-hidden="true"
    />
  )
}

export default MatrixRain


