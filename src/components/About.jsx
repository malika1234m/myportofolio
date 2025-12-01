// About Component with detailed information
function About() {
  return (
    <section className="about" id="about">
      <h2 className="section-title">About Malika</h2>
      <div className="about-container">
        <div className="about-image">
          <div className="about-image-inner">
            <img src="/profile.jpeg" alt="Malika Nishnatha" />
          </div>
        </div>
        <div className="about-content">
          <p className="about-description">
            Malika is a dedicated second-year undergraduate at the University of Colombo School of Computing,
            passionate about full stack development and competitive programming. With a strong foundation in
            both frontend and backend technologies, Malika strives to create innovative solutions that make
            a difference. A champion at ReidXtreme 2025 and CodeQuest CTF Challenge, Malika combines technical
            expertise with problem-solving skills to tackle real-world challenges.
          </p>
          <div className="about-info">
            <div className="info-item">
              <span className="info-label">Name:</span>
              <span className="info-value">Malika Nishnatha</span>
            </div>
            <div className="info-item">
              <span className="info-label">University:</span>
              <span className="info-value">University of Colombo</span>
            </div>
            <div className="info-item">
              <span className="info-label">Level:</span>
              <span className="info-value">2nd Year Undergraduate</span>
            </div>
            <div className="info-item">
              <span className="info-label">Faculty:</span>
              <span className="info-value">School of Computing</span>
            </div>
            <div className="info-item">
              <span className="info-label">Role:</span>
              <span className="info-value">Full Stack Developer</span>
            </div>
            <div className="info-item">
              <span className="info-label">Passion:</span>
              <span className="info-value">Coding & Problem Solving</span>
            </div>
            <div className="info-item">
              <span className="info-label">Achievements:</span>
              <span className="info-value">2x Hackathon Champion</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
