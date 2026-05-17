// Navigation component with scroll spy highlighting and mobile hamburger menu
import { useEffect, useState } from 'react'

function Navigation() {
  const [active, setActive] = useState('home')
  const [theme, setTheme] = useState('light')
  const [menuOpen, setMenuOpen] = useState(false)

  // Close menu when clicking outside the nav
  useEffect(() => {
    if (!menuOpen) return
    const close = (e) => { if (!e.target.closest('nav')) setMenuOpen(false) }
    document.addEventListener('click', close)
    return () => document.removeEventListener('click', close)
  }, [menuOpen])

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('section[id]'))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0.01 }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  // Initialize theme from saved preference or OS, then persist on change
  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    const initial = saved || (prefersDark ? 'dark' : 'light')
    setTheme(initial)
    document.documentElement.setAttribute('data-theme', initial)
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  function toggleTheme() {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
  }

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <nav>
      <div className="nav-container">
        <div className="logo">
          <span className="signature">Malika</span>
        </div>
        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          <li><a href="#home" className={active === 'home' ? 'active' : ''} onClick={closeMenu}>Home</a></li>
          <li><a href="#about" className={active === 'about' ? 'active' : ''} onClick={closeMenu}>About</a></li>
          <li><a href="#achievements" className={active === 'achievements' ? 'active' : ''} onClick={closeMenu}>Achievements</a></li>
          <li><a href="#education" className={active === 'education' ? 'active' : ''} onClick={closeMenu}>Education</a></li>
          <li><a href="#contact" className={active === 'contact' ? 'active' : ''} onClick={closeMenu}>Contact</a></li>
          <li>
            <a href="/my-cv.pdf" download="Malika_Nishnatha_CV.pdf" className="nav-cv-btn" onClick={closeMenu}>CV ↓</a>
          </li>
          <li>
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'dark' ? '🌙' : '☀️'}
            </button>
          </li>
        </ul>
        <button
          className={`hamburger${menuOpen ? ' active' : ''}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}

export default Navigation;
