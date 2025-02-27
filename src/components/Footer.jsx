import "../css/footer.css";
import Logo from "../Assets/Logos/Polio/Logo.svg";

const Footer = () => {
  return (
    <section className="footer wrapper">
      <div className="footer-row1">
        <ul className="footer-column">
          <h3 className="footer-column-heading">Company</h3>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Press</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
        <ul className="footer-column">
          <h3 className="footer-column-heading">Support</h3>
          <li><a href="#">Help Center</a></li>
          <li><a href="#">FAQs</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Live Chat</a></li>
        </ul>
        <ul className="footer-column">
          <h3 className="footer-column-heading">Resources</h3>
          <li><a href="#">Documentation</a></li>
          <li><a href="#">API Reference</a></li>
          <li><a href="#">Community</a></li>
          <li><a href="#">Partners</a></li>
        </ul>
        <ul className="footer-column">
          <h3 className="footer-column-heading">Legal</h3>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Cookie Policy</a></li>
          <li><a href="#">Security</a></li>
        </ul>
        <ul className="footer-column">
          <h3 className="footer-column-heading">Follow Us</h3>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">LinkedIn</a></li>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Instagram</a></li>
        </ul>
      </div>
      <div className="footer-row2">
        <img src={Logo} alt="Polio Logo" />
        <p>©2025 Polio LTD. All rights reserved</p>
      </div>
    </section>
  );
};

export default Footer;
