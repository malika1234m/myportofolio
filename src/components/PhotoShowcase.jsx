// PhotoShowcase - creative photo grid with lightbox
import { useEffect, useState } from 'react'

function PhotoShowcase() {
  const photos = [
    {
      src: '/reidxtreme.jpg',
      title: 'ReidXtreme — Champions',
      description: 'Intense algorithmic challenge hosted at UCSC. Teamwork, speed and precision.',
      focus: 'center',
    },
    {
      src: '/codequest.jpg',
      title: 'CodeQuest CTF — Champions',
      description: 'Security, reverse engineering and puzzle solving under pressure.',
      focus: 'center',
    },
    // stylistic repeats for a fuller grid
    {
      src: '/reidxtreme.jpg',
      title: 'On the clock',
      description: 'Rapid problem solving with clean, reliable code.',
      focus: 'top',
    },
    {
      src: '/codequest.jpg',
      title: 'CTF moments',
      description: 'Finding signals in noisy data and crafting exploits responsibly.',
      focus: 'bottom',
    },
  ]

  const [isOpen, setIsOpen] = useState(false)
  const [current, setCurrent] = useState(0)

  const open = (index) => {
    setCurrent(index)
    setIsOpen(true)
  }

  const close = () => setIsOpen(false)

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') setCurrent((c) => (c + 1) % photos.length)
      if (e.key === 'ArrowLeft') setCurrent((c) => (c - 1 + photos.length) % photos.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, photos.length])

  return (
    <section id="gallery" className="showcase">
      <h2>Gallery</h2>
      <p className="section-lead">A glimpse into competitions and the craft behind the wins.</p>

      <div className="showcase-grid">
        {photos.map((p, idx) => (
          <button
            key={idx}
            className="photo-card"
            onClick={() => open(idx)}
            aria-label={`Open ${p.title}`}
          >
            <img src={p.src} alt={p.title} style={{ objectPosition: p.focus }} />
            <div className="photo-overlay">
              <span>{p.title}</span>
            </div>
          </button>
        ))}
      </div>

      {isOpen && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={close}>
          <div className="lightbox-body" onClick={(e) => e.stopPropagation()}>
            <img src={photos[current].src} alt={photos[current].title} />
            <div className="lightbox-caption">
              <h3>{photos[current].title}</h3>
              <p>{photos[current].description}</p>
            </div>
            <button className="lightbox-close" onClick={close} aria-label="Close">×</button>
            <button
              className="lightbox-nav prev"
              onClick={() => setCurrent((c) => (c - 1 + photos.length) % photos.length)}
              aria-label="Previous"
            >
              ‹
            </button>
            <button
              className="lightbox-nav next"
              onClick={() => setCurrent((c) => (c + 1) % photos.length)}
              aria-label="Next"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

export default PhotoShowcase


