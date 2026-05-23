import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav>
      <Link to="/" className="logo">
        <div className="logo-icon">🐾</div>
        Paw<span className="logo-dot">Nest</span>
      </Link>

      <button
        className={`hamburger${menuOpen ? ' active' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        <span className="hamburger-line" />
        <span className="hamburger-line" />
        <span className="hamburger-line" />
      </button>

      <ul className={`nav-links${menuOpen ? ' nav-open' : ''}`}>
        <li><NavLink to="/" onClick={closeMenu} end>Home</NavLink></li>
        <li><NavLink to="/services" onClick={closeMenu}>Services</NavLink></li>
        <li><NavLink to="/our-vets" onClick={closeMenu}>Our Vets</NavLink></li>
        <li><NavLink to="/blog" onClick={closeMenu}>Blog</NavLink></li>
        <li><NavLink to="/contact" onClick={closeMenu}>Contact</NavLink></li>
        <li className="mobile-cta-li"><Link to="/contact#contact-form" className="nav-cta" onClick={closeMenu}>Book Appointment</Link></li>
      </ul>

      <div className="nav-right">
        <Link to="/contact#contact-form" className="nav-cta">Book Appointment</Link>
      </div>

      {menuOpen && <div className="nav-overlay" onClick={closeMenu} />}
    </nav>
  );
};

export default Header;
