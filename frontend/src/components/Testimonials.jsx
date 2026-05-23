const reviews = [
  {
    text: "Dr. Ananya performed emergency surgery on our Labrador Bruno at 2AM without a moment's hesitation. The care and compassion shown was beyond anything we expected. Bruno is now running around like a pup again.",
    avatar: '👨',
    name: 'Rajesh & Family',
    sub: "Bruno's Dad · Indiranagar",
    delay: '',
  },
  {
    text: "I've tried three vet clinics before PawNest. None of them even come close. My anxious rescue cat Mochi used to hide and hiss at vets — she actually purred during her check-up here. That says everything.",
    avatar: '👩',
    name: 'Deepa Krishnan',
    sub: "Mochi's Mum · Koramangala",
    delay: 'delay-1',
  },
  {
    text: 'The grooming team transformed my Shih Tzu Oreo completely — he looked like he just stepped off a magazine cover. More importantly, they were so gentle and patient with him throughout. Worth every rupee.',
    avatar: '🧑',
    name: 'Arjun Mehta',
    sub: "Oreo's Dad · T. Nagar",
    delay: 'delay-2',
  },
];

const Testimonials = () => (
  <section className="testimonials" id="testimonials">
    <div
      className="section-header fade-up"
      style={{ textAlign: 'center', maxWidth: '560px', margin: '0 auto' }}
    >
      <span className="eyebrow">Pet Parent Love</span>
      <h2>
        Stories that warm{' '}
        <span style={{ color: 'var(--mustard)' }}>our hearts</span>
      </h2>
    </div>
    <div className="testi-grid">
      {reviews.map((r, i) => (
        <div className={`testi-card fade-up ${r.delay}`} key={i}>
          <span className="testi-quote">"</span>
          <p>{r.text}</p>
          <div className="testi-author">
            <div className="testi-avatar">{r.avatar}</div>
            <div>
              <h4>{r.name}</h4>
              <span>{r.sub}</span>
              <div className="testi-stars">★★★★★</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
