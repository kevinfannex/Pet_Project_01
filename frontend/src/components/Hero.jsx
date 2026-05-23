const Hero = () => (
  <section className="hero">
    <div className="doodle d1">🦴</div>
    <div className="doodle d2">🐱</div>
    <div className="doodle d3">❤️</div>

    <div className="hero-text fade-up">
      <div className="hero-badge">Bangalore's #1 Rated Pet Care</div>
      <h1>
        Because they deserve<br />
        the <em>very best</em><br />
        care &amp; love.
      </h1>
      <p>
        Premium veterinary care, expert grooming, and genuine love for every furry family member.
        Your pet's wellbeing is our life's work.
      </p>
      <div className="hero-btns">
        <a href="#" className="btn-primary">📅 Book a Visit</a>
        <a href="#services" className="btn-outline">Explore Services</a>
      </div>
      <div className="hero-stats">
        <div className="hero-stat">
          <h3>8,200<span>+</span></h3>
          <p>Happy Pet Families</p>
        </div>
        <div className="hero-stat">
          <h3>14<span>+</span></h3>
          <p>Years of Experience</p>
        </div>
        <div className="hero-stat">
          <h3>4.9<span>★</span></h3>
          <p>Average Rating</p>
        </div>
      </div>
    </div>

    <div className="hero-visual fade-up delay-2">
      <div className="hero-img-blob">
        <img
          src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80"
          alt="Happy dog"
        />
      </div>
      <div className="hero-pill hero-pill-1">
        <span className="pill-emoji">🏥</span>
        <div>
          <div style={{ fontSize: '11px', color: '#6B7280', fontWeight: 600 }}>Open Today</div>
          <div style={{ color: '#1E2B3A', fontSize: '13px' }}>9AM – 9PM</div>
        </div>
      </div>
      <div className="hero-pill hero-pill-2">
        <span className="pill-emoji">⭐</span>
        <div>
          <div style={{ fontSize: '13px', color: '#1E2B3A' }}>4.9 / 5.0</div>
          <div style={{ fontSize: '11px', color: '#6B7280', fontWeight: 600 }}>2,400 Reviews</div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
