// Footer Component
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>&copy; {currentYear} Malika Nishnatha. All rights reserved.</p>
      <p>University of Colombo School of Computing</p>
    </footer>
  );
}

export default Footer;
