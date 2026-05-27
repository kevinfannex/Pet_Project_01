import { useState, useEffect } from 'react';
import AboutCards from '../components/AboutCards';

const AboutUsPage = () => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth <= 600 : false
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 600);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const features = [
    {
      icon: '🚑',
      title: '24 Hrs Ambulance',
      desc: 'Ensure that your pets receive urgent care whenever needed, providing rapid transport to our facility for emergencies.',
    },
    {
      icon: '💉',
      title: 'Preventive Care',
      desc: 'Wellness exams, vaccinations, and preventive treatments to keep your pet healthy and detect any issues early.',
    },
    {
      icon: '🔬',
      title: 'Advanced Diagnostics',
      desc: 'Utilising state-of-the-art technology like digital radiography and ultrasound to accurately diagnose health conditions.',
    },
    {
      icon: '🏥',
      title: 'Critical Care',
      desc: 'A fully-stocked ICU for pets in critical condition, with a dedicated team ready to handle life-threatening situations.',
    },
    {
      icon: '💬',
      title: 'Customer Support',
      desc: 'Customer support is always available to proactively answer any appointments or concerns you may have.',
    },
    {
      icon: '💊',
      title: 'Pharmacy',
      desc: 'A fully-stocked pharmacy offering a wide range of medications and health products for your pets.',
    },
  ];

  const stats = [
    { value: '14+', label: 'Years Of Experience' },
    { value: '8,200+', label: 'Pets Treated' },
    { value: '8,200+', label: 'Happy Customers' },
    { value: '3', label: 'Number Of Clinics' },
  ];

  return (
    <div style={{ paddingTop: 0 }}>

      {/* ── HERO BANNER ── */}
      <section
        className="fade-up parallax-bg"
        style={{
          backgroundImage: 'url("/bg_vet_banner_petproject.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: isMobile ? '70px 5%' : '110px 7%',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(30,43,58,0.58)' }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={{
            fontFamily: 'var(--font-head)',
            fontSize: isMobile ? '34px' : '48px',
            color: '#fff',
            marginBottom: 14,
            textShadow: '0 2px 10px rgba(0,0,0,0.4)',
          }}>
            About <span style={{ color: 'var(--mustard)' }}>Us</span>
          </h1>
          <p style={{
            color: 'rgba(255,255,255,0.88)',
            fontSize: isMobile ? '14px' : '17px',
            maxWidth: 560,
            margin: '0 auto',
            lineHeight: 1.65,
            textShadow: '0 1px 4px rgba(0,0,0,0.4)',
          }}>
            Caring for Bangalore's beloved pets with compassion, expertise and state-of-the-art medicine since 2010.
          </p>
        </div>
      </section>

      {/* ── WELCOME SECTION ── */}
      <section
        className="fade-up"
        style={{
          padding: isMobile ? '60px 5%' : '90px 7%',
          background: '#fff',
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: isMobile ? '36px' : '70px',
          alignItems: 'center',
          maxWidth: 1200,
          margin: '0 auto',
        }}
      >
        {/* Image */}
        <div style={{
          borderRadius: '24px',
          overflow: 'hidden',
          boxShadow: '0 20px 50px rgba(30,43,58,0.09)',
          height: isMobile ? '260px' : '380px',
        }}>
          <img
            src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=700&q=80"
            alt="Pets at PawNest clinic"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        {/* Text */}
        <div>
          <span style={{
            display: 'inline-block',
            fontSize: 11,
            fontWeight: 800,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#B85530',
            background: '#FDEEE6',
            border: '1px solid #F5C4A8',
            padding: '5px 14px',
            borderRadius: '50px',
            marginBottom: 18,
          }}>Welcome to PawNest</span>
          <h2 style={{
            fontFamily: 'var(--font-head)',
            fontSize: isMobile ? '26px' : '34px',
            color: 'var(--navy)',
            marginBottom: 12,
            lineHeight: 1.2,
          }}>
            One of the <em style={{ color: '#B85530', fontStyle: 'italic' }}>finest & most advanced</em> pet hospitals
          </h2>
          <p style={{ color: 'var(--gray)', lineHeight: 1.8, marginBottom: 16, fontSize: 15.5 }}>
            From digital radiography and ultrasound to a fully-equipped surgical suite, we have the resources to provide comprehensive elite care for your pets.
          </p>
          <p style={{ color: 'var(--gray)', lineHeight: 1.8, marginBottom: 28, fontSize: 15.5 }}>
            At PawNest, we believe every pet is a cherished member of the family. Our team of experienced veterinarians and support staff are dedicated to providing personalised, compassionate care for every animal that walks through our doors.
          </p>
          <p style={{
            fontFamily: 'var(--font-head)',
            fontSize: 22,
            color: 'var(--navy)',
            fontStyle: 'italic',
            fontWeight: 700,
          }}>— PawNest</p>
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section
        className="fade-up"
        style={{
          padding: isMobile ? '60px 5%' : '90px 7%',
          background: 'var(--cream)',
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: isMobile ? '36px' : '50px',
          maxWidth: 1200,
          margin: '0 auto',
        }}
      >
        {/* Mission */}
        <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}>
          <div style={{
            width: isMobile ? '100px' : '130px',
            height: isMobile ? '100px' : '130px',
            borderRadius: '20px',
            overflow: 'hidden',
            flexShrink: 0,
            boxShadow: '0 10px 30px rgba(30,43,58,0.1)',
          }}>
            <img
              src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=300&q=80"
              alt="Our Mission"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div>
            <h3 style={{
              fontFamily: 'var(--font-head)',
              fontSize: 22,
              color: 'var(--navy)',
              marginBottom: 10,
            }}>Our Mission</h3>
            <p style={{ color: 'var(--gray)', lineHeight: 1.75, fontSize: 14.5 }}>
              To provide exceptional veterinary care with compassion and advanced technology, ensuring the well-being of every pet we serve — and giving pet owners the peace of mind they deserve.
            </p>
          </div>
        </div>

        {/* Vision */}
        <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}>
          <div style={{
            width: isMobile ? '100px' : '130px',
            height: isMobile ? '100px' : '130px',
            borderRadius: '20px',
            overflow: 'hidden',
            flexShrink: 0,
            boxShadow: '0 10px 30px rgba(30,43,58,0.1)',
          }}>
            <img
              src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=300&q=80"
              alt="Our Vision"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div>
            <h3 style={{
              fontFamily: 'var(--font-head)',
              fontSize: 22,
              color: 'var(--navy)',
              marginBottom: 10,
            }}>Our Vision</h3>
            <p style={{ color: 'var(--gray)', lineHeight: 1.75, fontSize: 14.5 }}>
              To be the leading veterinary hospital, setting standards in pet care excellence through innovation and education — making premium pet healthcare accessible across Bangalore.
            </p>
          </div>
        </div>
      </section>

      {/* ── FEATURES GRID ── */}
      <AboutCards />

      {/* ── STATS SECTION ── */}
      <section
        className="fade-up parallax-bg"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1415369629372-26f2fe60c467?w=1200&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: isMobile ? '70px 5%' : '100px 7%',
          position: 'relative',
          textAlign: 'center',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(30,43,58,0.80)' }} />
        <div style={{
          position: 'relative',
          zIndex: 1,
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)',
          gap: isMobile ? '36px 20px' : '40px',
          maxWidth: 1000,
          margin: '0 auto',
        }}>
          {stats.map((s, i) => (
            <div key={i}>
              <div style={{
                fontFamily: 'var(--font-head)',
                fontSize: isMobile ? '32px' : '42px',
                fontWeight: 900,
                color: 'var(--mustard)',
                marginBottom: 6,
              }}>{s.value}</div>
              <div style={{
                fontSize: isMobile ? '12px' : '13px',
                color: 'rgba(255,255,255,0.80)',
                fontWeight: 700,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default AboutUsPage;
