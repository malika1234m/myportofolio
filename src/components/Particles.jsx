// Animated background particles component
import { useEffect } from 'react';

function Particles() {
  useEffect(() => {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;

    function computeCount() {
      const w = window.innerWidth;
      if (w < 480) return 16;
      if (w < 768) return 28;
      return 50;
    }

    function renderParticles() {
      const particleCount = computeCount();
      particlesContainer.innerHTML = '';
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = (Math.random() * 20).toFixed(2) + 's';
        particle.style.animationDuration = (15 + Math.random() * 15).toFixed(2) + 's';
        particle.style.opacity = (Math.random() * 0.5 + 0.1).toString();
        particlesContainer.appendChild(particle);
      }
    }

    renderParticles();
    const onResize = () => renderParticles();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return <div className="particles" id="particles"></div>;
}

export default Particles;
