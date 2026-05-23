import { useState, useEffect } from 'react';
import WhyUs from '../components/WhyUs';

const team = [
  { name: "Dr. Sarah Jenkins", role: "Chief Veterinarian", img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80" },
  { name: "Dr. Michael Chen", role: "Surgical Specialist", img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80" },
  { name: "Dr. Emily Taylor", role: "Feline Specialist", img: "https://images.unsplash.com/photo-1594824436998-dd40e4f63c87?w=400&q=80" },
];

const OurVetsPage = () => {
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth <= 600 : false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ paddingTop: '0' }}>
      <section className="location-banner fade-up parallax-bg" style={{
        backgroundImage: 'url("/bg_vet_banner_petproject.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: isMobile ? '80px 5% 60px' : '120px 7%',
        textAlign: 'center',
        position: 'relative'
      }}>
        {/* Dark overlay for readability */}
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(30, 43, 58, 0.55)' }}></div>

        <div style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={{ color: 'var(--white)', fontSize: '42px', fontFamily: 'var(--font-head)', marginBottom: '16px', textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
            Compassionate Care by <span style={{ color: 'var(--mustard)' }}>Expert Hands</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.95)', fontSize: '18px', maxWidth: '650px', margin: '0 auto', textShadow: '0 1px 4px rgba(0,0,0,0.5)', lineHeight: '1.6' }}>
            We believe every pet deserves to be treated like family. Our team of <span style={{ color: 'var(--mustard)', fontWeight: 'bold' }}>fear-free certified professionals</span> is dedicated to ensuring your furry friends live their healthiest, happiest lives.
          </p>
        </div>
      </section>

      <WhyUs />
      
      <section className="team-grid" style={{ padding: '80px 7%', background: 'var(--white)' }}>
        <div className="section-header fade-up" style={{ textAlign: 'center' }}>
          <span className="eyebrow">Meet The Team</span>
          <h2>Our Expert <span>Veterinarians</span></h2>
          <p style={{ margin: '14px auto 0', maxWidth: '500px' }}>Every member of our team is fear-free certified and committed to providing the best possible care.</p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px', marginTop: '60px' }}>
          {team.map((vet, i) => (
            <div key={i} className={`fade-up delay-${i}`} style={{ textAlign: 'center', background: '#FEF8F0', padding: '24px', borderRadius: '32px' }}>
              <img src={vet.img} alt={vet.name} style={{ width: '100%', height: '320px', objectFit: 'cover', borderRadius: '24px', marginBottom: '24px' }} />
              <h3 style={{ color: 'var(--navy)', fontFamily: 'var(--font-head)', fontSize: '22px', marginBottom: '4px' }}>{vet.name}</h3>
              <p style={{ color: '#B85530', fontWeight: '700', fontSize: '14px', letterSpacing: '0.02em' }}>{vet.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OurVetsPage;
