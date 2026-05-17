// Education Component - displays educational background
function Education() {
  const education = [
    {
      id: 1,
      degree: "Bachelor of Science (Hons) in Computer Science",
      institution: "University of Colombo School of Computing",
      period: "2023 - Present",
      status: "Currently Studying",
      type: "Undergraduate",
      description: "Pursuing a degree in Information Systems, specializing in full stack development and software engineering.",
      accentColor: "#00d4ff"
    },
    {
      id: 2,
      degree: "Bachelor of Science in Computer Science",
      institution: "SLIIT (Sri Lanka Institute of Information Technology)",
      period: "2022 - 2023",
      status: "Completed 1 Year",
      type: "Undergraduate",
      description: "Studied Computer Science for one year before transferring to University of Colombo School of Computing.",
      accentColor: "#ff8c00"
    },
    {
      id: 3,
      degree: "G.C.E Advanced Level & Ordinary Level",
      institution: "Richmond College",
      period: "2009 - 2022",
      status: "Completed",
      type: "Secondary Education",
      description: "Achieved 9 As in O/Level Examination (2019) and 1A with 2Bs in A/Level Examination (2022).",
      accentColor: "#00d4ff",
      achievements: [
        "O/Level (2019): 9 As",
        "A/Level (2022): 1A, 2Bs"
      ]
    }
  ];

  return (
    <section className="education" id="education">
      <h2 className="section-title">Education</h2>
      <p>My academic journey and qualifications.</p>

      <div className="education-timeline">
        {education.map((edu) => (
          <div
            key={edu.id}
            className="education-card"
            style={{ borderLeftColor: edu.accentColor }}
          >
            <div className="education-header">
              <div>
                <h3 className="education-degree">{edu.degree}</h3>
                <p className="education-institution">{edu.institution}</p>
                <p className="education-period">{edu.period}</p>
              </div>
              <span className="education-type" style={{ background: edu.accentColor }}>
                {edu.type}
              </span>
            </div>
            <div className="education-status">{edu.status}</div>
            <p className="education-description">{edu.description}</p>
            {edu.achievements && (
              <div className="education-achievements">
                <strong>Academic Achievements:</strong>
                <ul>
                  {edu.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
