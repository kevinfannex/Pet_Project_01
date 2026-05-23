const locations = [
  {
    img: 'https://images.unsplash.com/photo-1540202404-a2f29016b523?w=500&q=80',
    alt: 'Indiranagar',
    tag: 'Flagship',
    name: 'Indiranagar',
    address: '100 Feet Road, Indiranagar · Open 9AM–9PM',
    delay: '',
  },
  {
    img: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=500&q=80',
    alt: 'Koramangala',
    tag: 'New',
    name: 'Koramangala',
    address: '80 Feet Road, Koramangala · Open 10AM–8PM',
    delay: 'delay-1',
  },
  {
    img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500&q=80',
    alt: 'Whitefield',
    tag: 'Coming Soon',
    name: 'Whitefield Tech Park',
    address: 'SEZ Road, Perungudi · Opening June 2025',
    delay: 'delay-2',
  },
];

const Locations = () => (
  <section className="locations" id="locations">
    <div
      className="section-header fade-up px-"
      style={{ textAlign: 'center', maxWidth: '560px', margin: '0 auto 0' }}
    >
      <span className="eyebrow">Our Branches</span>
      <h2>Find us across <span>Bangalore</span></h2>
      <p>Three beautiful clinics, all designed with the same warmth and care we bring to every appointment.</p>
    </div>
    <div className="locations-grid">
      {locations.map((loc) => (
        <div className={`location-card fade-up ${loc.delay}`} key={loc.name}>
          <img src={loc.img} alt={loc.alt} />
          <div className="location-overlay">
            <span className="location-tag">{loc.tag}</span>
            <h3>{loc.name}</h3>
            <p>{loc.address}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Locations;
