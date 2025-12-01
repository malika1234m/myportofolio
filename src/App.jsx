// Main App Component - brings everything together
import Particles from './components/Particles'
import MatrixRain from './components/MatrixRain'
import HackerOverlay from './components/HackerOverlay'
import Navigation from './components/Navigation'
import Header from './components/Header'
import About from './components/About'
import Achievements from './components/Achievements'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('section'))
    sections.forEach((s) => s.classList.add('reveal'))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.15 }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Animated background particles */}
      <Particles />
      <MatrixRain />
      <HackerOverlay />

      {/* Fixed navigation bar */}
      <Navigation />

      <div className="container">
        {/* Each component is a section of the portfolio */}
        <Header />
        <About />
        <Achievements />
        <Education />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
