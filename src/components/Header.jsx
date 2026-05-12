// Hero/Header Component with profile picture and introduction
import MatrixRain from './MatrixRain'
function Header() {
  return (
    <section className="hero" id="home">
      <MatrixRain />
      <div className="hero-container">
        <div className="hero-content">
          <h2>Hello, My name is</h2>
          <h1 className="glitch" data-text="Malika Nishnatha">Malika Nishnatha</h1>
          <h3 className="hero-title">FULL STACK DEVELOPER | COMPETITIVE PROGRAMMER</h3>
          <p className="hero-description">
            A passionate second-year undergraduate at the University of Colombo School of Computing,
            dedicated to crafting innovative solutions and turning complex challenges into elegant code.
            I love competitive programming and building seamless user experiences.
          </p>
          <div className="hero-actions">
            <a href="#achievements" className="btn-primary">
              VIEW ACHIEVEMENTS
              <span>→</span>
            </a>
            <a href="/my-cv.pdf" download="Malika_Nishnatha_CV.pdf" className="btn-secondary">
              DOWNLOAD CV
              <span>↓</span>
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="profile-wrapper">
            <div className="profile-img">
              <img src="/profile.jpeg" alt="Malika Nishnatha" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
