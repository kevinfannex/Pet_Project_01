const Footer = () => (
  <footer>
    <div className="footer-top">
      <div className="footer-brand">
        <a href="#" className="logo" style={{ fontSize: '22px' }}>
          <div className="logo-icon" style={{ width: '34px', height: '34px', fontSize: '16px' }}>🐾</div>
          Paw<span className="logo-dot">Nest</span>
        </a>
        <p>
          Bangalore's most loved premium pet care destination. Veterinary excellence, grooming luxury, and
          unconditional care since 2010.
        </p>
        <div className="footer-socials">
          <a href="#" className="social-btn">f</a>
          <a href="#" className="social-btn">in</a>
          <a href="#" className="social-btn">ig</a>
          <a href="#" className="social-btn">yt</a>
        </div>
      </div>

      <div className="footer-col">
        <h4>Services</h4>
        <ul>
          <li><a href="#">Veterinary Care</a></li>
          <li><a href="#">Pet Grooming</a></li>
          <li><a href="#">Dental Cleaning</a></li>
          <li><a href="#">Emergency Care</a></li>
          <li><a href="#">Pet Boarding</a></li>
          <li><a href="#">Nutrition Counselling</a></li>
        </ul>
      </div>

      <div className="footer-col">
        <h4>Company</h4>
        <ul>
          <li><a href="#">Our Story</a></li>
          <li><a href="#">Meet the Vets</a></li>
          <li><a href="#">Locations</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>

      <div className="footer-col footer-contact">
        <h4>Get in Touch</h4>
        <p>📍 100 Feet Road, Indiranagar, Bangalore 560038</p>
        <br />
        <p>📞 +91 98765 43210</p>
        <p>✉️ hello@pawnest.in</p>
        <br />
        <p>⏰ Mon–Sat: 9AM – 9PM<br />Sun: 10AM – 6PM</p>
      </div>
    </div>

    <div className="footer-bottom">
      <p>© 2025 PawNest Pet Care Pvt. Ltd. · All rights reserved.</p>
      <p>
        <a href="#">Privacy Policy</a> &nbsp;·&nbsp; <a href="#">Terms of Service</a>
      </p>
    </div>
  </footer>
);

export default Footer;
