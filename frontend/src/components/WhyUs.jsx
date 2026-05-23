const points = [
  {
    num: '1',
    title: 'Fear-Free Certified Clinic',
    desc: 'Our entire team is trained in low-stress handling. We go to great lengths to make sure every pet feels calm, safe, and respected.',
    delay: '',
  },
  {
    num: '2',
    title: 'Transparent, Honest Pricing',
    desc: 'No hidden fees. No unnecessary procedures. We explain every recommendation clearly so you can make informed decisions with confidence.',
    delay: 'delay-1',
  },
  {
    num: '3',
    title: 'Post-Visit Follow-Up Care',
    desc: 'We check in after every visit. Our team sends recovery updates, medication reminders, and is always reachable on WhatsApp.',
    delay: 'delay-2',
  },
  {
    num: '4',
    title: 'Experienced Specialist Team',
    desc: 'Our vets have 5–18 years of experience each, covering dermatology, orthopaedics, ophthalmology, and internal medicine.',
    delay: 'delay-3',
  },
];

const WhyUs = () => (
  <section className="why-us" id="why-us">
    <div className="why-inner">
      <div className="why-text">
        <div className="section-header">
          <span className="eyebrow">Why PawNest</span>
          <h2>
            Pet care the way<br />
            it <span>should feel</span>
          </h2>
          <p>
            We're different because we genuinely care — not just about treatment, but about the
            emotional experience of every visit.
          </p>
        </div>
        <div className="why-points">
          {points.map((p) => (
            <div className={`why-point fade-up ${p.delay}`} key={p.num}>
              <div className="why-num">{p.num}</div>
              <div>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="why-visual fade-up delay-1">
        <div className="why-img-big">
          <img
            src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&q=80"
            alt="Vet team"
          />
        </div>
        <div className="why-img-sm2">
          <img
            src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&q=80"
            alt="Happy pet"
          />
        </div>
        <div className="why-review-float">
          <div className="stars">★★★★★</div>
          <p>"The most caring vet clinic we've ever visited. Mango actually wags his tail when we arrive!"</p>
          <strong>— Priya M., Indiranagar</strong>
        </div>
      </div>
    </div>
  </section>
);

export default WhyUs;
