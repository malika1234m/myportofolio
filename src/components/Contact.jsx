// Contact Component - displays contact information
function Contact() {
  const contactInfo = [
    {
      id: 1,
      label: "Location",
      value: "Kalegana, Galle, Sri Lanka",
      link: null
    },
    {
      id: 2,
      label: "Email",
      value: "malikanishnatha4@gmail.com",
      link: "mailto:malikanishnatha4@gmail.com"
    },
    {
      id: 3,
      label: "Phone",
      value: "+94 74 098 4416",
      link: "https://wa.me/94740984416"
    }
  ];

  return (
    <section className="contact" id="contact">
      <h2 className="section-title">Contact Me</h2>
      <p>Get in touch! I'm always open to discussing new projects, creative ideas, or opportunities.</p>

      <div className="contact-list">
        {contactInfo.map((contact) => (
          <div key={contact.id} className="contact-row">
            <span className="contact-label">{contact.label}</span>
            {contact.link ? (
              <a href={contact.link} className="contact-value" target="_blank" rel="noopener noreferrer">
                {contact.value}
              </a>
            ) : (
              <span className="contact-value">{contact.value}</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Contact;
