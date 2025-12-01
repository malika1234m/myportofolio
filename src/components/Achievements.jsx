// Achievements Component - displays hackathon wins
function Achievements() {
  const achievements = [
    {
      id: 1,
      title: "ReidXtreme 2025",
      image: "/reidxtreme.jpg",
      description: "Held by our campus in 2025, this prestigious competition showcased our problem-solving and coding skills. Competed against top talents and emerged victorious.",
      badge: "Champions"
    },
    {
      id: 2,
      title: "CodeQuest CTF Challenge",
      image: "/codequest.jpg",
      description: "Organized by Virtusa, we demonstrated excellence in cybersecurity and capture-the-flag challenges, securing first place through technical expertise and teamwork.",
      badge: "Champions"
    }
  ];

  return (
    <section className="achievements" id="achievements">
      <h2 className="section-title">Achievements</h2>
      <p>Highlights from competitions and challenges I've participated in.</p>

      <div className="achievement-grid">
        {achievements.map((achievement) => (
          <div key={achievement.id} className="achievement-card">
            <img
              src={achievement.image}
              alt={`${achievement.title} Championship`}
            />
            <div className="achievement-info">
              <h3>{achievement.title}</h3>
              <p className="achievement-badge">{achievement.badge}</p>
              <p>{achievement.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;
