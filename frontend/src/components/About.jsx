const About = () => (
  <section className="about" id="about">
    <div className="about-imgs fade-up">
      <div className="about-img-main">
        <img
          src="https://images.unsplash.com/photo-1581888227599-779811939961?w=600&q=80"
          alt="Vet with dog"
        />
      </div>
      <div className="about-img-sm">
        <img
          src="https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=400&q=80"
          alt="Cat care"
        />
      </div>
      <div className="about-badge-float">
        <strong>14+</strong>
        Years of<br />Trusted Care
      </div>
    </div>

    <div className="about-text fade-up delay-2">
      <span className="eyebrow">Our Story</span>
      <h2>
        Born from a love for<br />
        <span>every living creature</span>
      </h2>
      <p>
        PawNest began in 2010 as a small clinic with one simple belief — that pets aren't just animals,
        they're family. Dr. Ananya Rajan founded our practice after years of watching pet parents struggle
        to find compassionate, professional care they could truly trust.
      </p>
      <p>
        Today, we're a team of 24 specialists, groomers, and caregivers who wake up every morning excited
        to make a difference in the lives of Bangalore's most beloved furry companions.
      </p>
      <div className="about-features">
        <div className="about-feat"><div className="feat-icon">🩺</div> Board-certified veterinary specialists on staff</div>
        <div className="about-feat"><div className="feat-icon">✂️</div> Certified premium pet grooming with gentle techniques</div>
        <div className="about-feat"><div className="feat-icon">💊</div> In-house pharmacy &amp; diagnostic laboratory</div>
        <div className="about-feat"><div className="feat-icon">🚑</div> 24/7 emergency care &amp; pet ambulance service</div>
      </div>
    </div>
  </section>
);

export default About;
