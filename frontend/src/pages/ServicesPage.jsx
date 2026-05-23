import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

/* ─── Service Data with categories & features ─── */
const SERVICES = [
  {
    id: 'consult',
    icon: '🩺',
    tag: 'Most Popular',
    title: 'Veterinary Consultation',
    short: 'Thorough health check-ups with our experienced vets. Wellness exams, vaccinations, and preventive care tailored to your pet.',
    features: ['Complete physical exams', 'Vaccination schedules', 'Preventive screenings'],
    accent: '#3B82F6',
    img: 'https://images.unsplash.com/photo-1615186153040-a6ee4d34b8f4?w=500&q=80',
    category: 'Preventive',
  },
  {
    id: 'vaccine',
    icon: '💉',
    tag: 'Essential',
    title: 'Vaccinations',
    short: 'Core and non-core vaccines administered on schedule to protect your pet from dangerous diseases.',
    features: ['Puppy & kitten shots', 'Annual boosters', 'Travel certificates'],
    accent: '#10B981',
    img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&q=80',
    category: 'Preventive',
  },
  {
    id: 'dental',
    icon: '🦷',
    tag: 'Recommended',
    title: 'Dental & Oral Care',
    short: "Professional dental cleaning, scaling, and oral health assessments to keep your pet's teeth bright and healthy.",
    features: ['Ultrasonic scaling', 'Tooth extractions', 'Oral health checks'],
    accent: '#8B5CF6',
    img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&q=80',
    category: 'Preventive',
  },
  {
    id: 'diag',
    icon: '🔬',
    tag: 'Advanced',
    title: 'Diagnostics & Lab',
    short: 'In-house laboratory with digital X-ray, ultrasound, and complete blood work for rapid, accurate results.',
    features: ['Digital X-rays', 'Ultrasound imaging', 'Blood panels'],
    accent: '#F59E0B',
    img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&q=80',
    category: 'Specialist',
  },
  {
    id: 'surgery',
    icon: '🏥',
    tag: 'Specialist',
    title: 'Surgery',
    short: 'From routine spays and neuters to complex orthopaedic procedures — all performed in our state-of-the-art surgical suite.',
    features: ['Soft tissue surgery', 'Orthopaedic procedures', 'Laparoscopy'],
    accent: '#EF4444',
    img: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=500&q=80',
    category: 'Specialist',
  },
  {
    id: 'emergency',
    icon: '🚑',
    tag: '24/7',
    title: 'Emergency Care',
    short: 'Round-the-clock emergency services with fully equipped critical care unit and experienced ER veterinarians.',
    features: ['24/7 availability', 'Critical care unit', 'Emergency surgery'],
    accent: '#DC2626',
    img: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=500&q=80',
    category: 'Emergency',
  },
  {
    id: 'groom',
    icon: '✂️',
    tag: 'Premium',
    title: 'Luxury Grooming',
    short: 'Breed-specific grooming, spa treatments, and blowouts by certified groomers who handle your pet like royalty.',
    features: ['Breed-specific cuts', 'Spa baths & blowouts', 'Nail & ear care'],
    accent: '#EC4899',
    img: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=500&q=80',
    category: 'Wellness',
  },
  {
    id: 'board',
    icon: '🏡',
    tag: 'Cosy',
    title: 'Luxury Boarding',
    short: 'Cosy, safe, home-like boarding suites with 24/7 supervision, playtime, and personalised care routines.',
    features: ['Home-like suites', '24/7 supervision', 'Daily playtime'],
    accent: '#06B6D4',
    img: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=500&q=80',
    category: 'Wellness',
  },
];

const CATS = ['All', 'Preventive', 'Specialist', 'Emergency', 'Wellness'];

/* ─── Service Card ─── */
function SvcCard({ s, delay, visible }) {
  const [hov, setHov] = useState(false);

  const animStyle = {
    opacity: visible ? 1 : 0,
    transform: visible
      ? hov ? 'translateY(-8px)' : 'translateY(0)'
      : 'translateY(24px)',
    transition: `all 0.5s cubic-bezier(.22,1,.36,1) ${delay}s`,
  };

  return (
    <div
      style={{
        ...animStyle,
        background: '#fff',
        borderRadius: '24px',
        border: `1px solid ${hov ? s.accent + '38' : 'rgba(0,0,0,0.06)'}`,
        overflow: 'hidden',
        cursor: 'pointer',
        boxShadow: hov
          ? `0 22px 60px ${s.accent}15`
          : '0 2px 12px rgba(0,0,0,0.04)',
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {/* Top accent bar */}
      <div style={{ height: 5, background: `linear-gradient(90deg, ${s.accent}, ${s.accent}70)` }} />

      <div style={{ padding: '28px 28px 24px' }}>
        {/* Icon + Tag row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: `${s.accent}12`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 26,
              transition: 'transform .3s',
              transform: hov ? 'scale(1.12) rotate(-5deg)' : 'scale(1)',
            }}
          >
            {s.icon}
          </div>
          <span
            style={{
              background: `${s.accent}12`,
              color: s.accent,
              fontSize: 10,
              fontWeight: 800,
              padding: '5px 12px',
              borderRadius: '9999px',
              letterSpacing: 0.5,
              textTransform: 'uppercase',
            }}
          >
            {s.tag}
          </span>
        </div>

        {/* Title */}
        <h3 style={{ fontSize: 19, fontWeight: 800, color: 'var(--navy)', margin: '0 0 10px', lineHeight: 1.3, fontFamily: 'var(--font-head)' }}>
          {s.title}
        </h3>

        {/* Description */}
        <p style={{ fontSize: 14, color: 'var(--gray)', lineHeight: 1.75, margin: '0 0 20px' }}>
          {s.short}
        </p>

        {/* Features */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 22 }}>
          {s.features.map(f => (
            <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: '#374151' }}>
              <div
                style={{
                  width: 18,
                  height: 18,
                  borderRadius: '50%',
                  background: `${s.accent}14`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <span style={{ fontSize: 9, color: s.accent, fontWeight: 800 }}>✓</span>
              </div>
              {f}
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: 10 }}>
          <Link
            to="/contact"
            style={{
              flex: 1,
              textAlign: 'center',
              padding: '10px 0',
              borderRadius: '12px',
              background: s.accent,
              color: '#fff',
              fontSize: 13,
              fontWeight: 700,
              textDecoration: 'none',
              transition: 'opacity .2s',
              fontFamily: 'var(--font-body)',
            }}
          >
            Book Now
          </Link>
          <Link
            to="/services"
            style={{
              flex: 1,
              textAlign: 'center',
              padding: '10px 0',
              borderRadius: '12px',
              background: 'transparent',
              color: 'var(--navy)',
              fontSize: 13,
              fontWeight: 700,
              textDecoration: 'none',
              border: '1.5px solid rgba(0,0,0,0.1)',
              transition: 'all .2s',
              fontFamily: 'var(--font-body)',
            }}
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ─── Services Page ─── */
const ServicesPage = () => {
  const [filt, setFilt] = useState('All');
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const filtered = filt === 'All'
    ? SERVICES
    : SERVICES.filter(s => s.category === filt);

  return (
    <>
      {/* ─── Hero ─── */}
      <section
        className="fade-up"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1200&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          padding: '120px 7% 100px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Dark overlay for text readability */}
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(30,43,58,0.72)', zIndex: 0 }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <span
            style={{
              display: 'inline-block',
              fontSize: 11.5,
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--mustard)',
              background: 'rgba(232,168,48,0.15)',
              border: '1px solid rgba(232,168,48,0.3)',
              padding: '6px 18px',
              borderRadius: '50px',
              marginBottom: 20,
              backdropFilter: 'blur(4px)',
            }}
          >
            Comprehensive Care
          </span>

          <h1 style={{ fontFamily: 'var(--font-head)', fontSize: 52, color: '#fff', marginBottom: 16, lineHeight: 1.15, textShadow: '0 2px 20px rgba(0,0,0,0.3)' }}>
            Every Service<br />
            <em style={{ color: 'var(--mustard-light)', fontWeight: 400, fontStyle: 'italic' }}>Your Pet Needs</em>
          </h1>

          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 17, maxWidth: 560, margin: '0 auto', lineHeight: 1.7, textShadow: '0 1px 8px rgba(0,0,0,0.2)' }}>
            Cutting-edge veterinary medicine across 8 specialisations — all under one roof, all delivered with heart.
          </p>
        </div>
      </section>

      {/* ─── Filter + Cards ─── */}
      <section ref={sectionRef} style={{ background: 'var(--cream)', padding: '68px 5% 120px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>

          {/* Category filter pills */}
          <div style={{ display: 'flex', gap: 10, marginBottom: 48, justifyContent: 'center', flexWrap: 'wrap' }}>
            {CATS.map(c => (
              <button
                key={c}
                onClick={() => setFilt(c)}
                style={{
                  background: c === filt ? 'var(--navy)' : '#fff',
                  color: c === filt ? '#fff' : 'var(--gray)',
                  border: `1.5px solid ${c === filt ? 'var(--navy)' : 'rgba(0,0,0,0.1)'}`,
                  borderRadius: '9999px',
                  padding: '9px 22px',
                  fontSize: 14,
                  fontWeight: 700,
                  cursor: 'pointer',
                  fontFamily: 'var(--font-body)',
                  transition: 'all .24s cubic-bezier(.22,1,.36,1)',
                  boxShadow: c === filt ? '0 4px 12px rgba(30,43,58,0.2)' : 'none',
                }}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Service cards grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 24 }}>
            {filtered.map((s, i) => (
              <SvcCard key={s.id} s={s} delay={i * 0.06} visible={visible} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section style={{ padding: '80px 7%', background: '#FEF8F0' }}>
        <div className="section-header fade-up" style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-head)', fontSize: 36, color: 'var(--navy)' }}>
            Service <span style={{ color: 'var(--mustard)' }}>FAQs</span>
          </h2>
          <p style={{ margin: '14px auto 0', maxWidth: 500, color: 'var(--gray)' }}>
            Common questions about our veterinary services and what to expect during your visit.
          </p>
        </div>
        <div className="fade-up" style={{ maxWidth: 800, margin: '40px auto 0', display: 'flex', flexDirection: 'column', gap: 20 }}>
          {[
            { q: "How often should my pet get a dental cleaning?", a: "We recommend a professional dental cleaning once a year for most dogs and cats, though some breeds may need them more frequently." },
            { q: "What should I bring to my first appointment?", a: "Please bring any previous medical records, current medications, and a fresh stool sample if possible." },
            { q: "Do you offer emergency surgeries?", a: "Yes, our experienced surgical team is equipped to handle emergency procedures during our operating hours." },
          ].map((faq, i) => (
            <div key={i} style={{ background: '#fff', padding: '24px 32px', borderRadius: 16, border: '1px solid rgba(30,43,58,0.05)', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
              <h4 style={{ color: 'var(--navy)', marginBottom: 8, fontSize: 18, fontFamily: 'var(--font-head)' }}>{faq.q}</h4>
              <p style={{ color: 'var(--gray)', fontSize: 15, lineHeight: 1.7 }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CTA Banner ─── */}
      <section className="fade-up" style={{ padding: '80px 7%', background: 'var(--navy)', color: '#fff', textAlign: 'center' }}>
        <h2 style={{ fontSize: 36, marginBottom: 16, fontFamily: 'var(--font-head)' }}>Ready to schedule a visit?</h2>
        <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: 32, fontSize: 16 }}>Book your appointment online in just 60 seconds.</p>
        <Link to="/contact" className="btn-primary" style={{ background: 'var(--mustard)', color: 'var(--navy)' }}>Book an Appointment</Link>
      </section>
    </>
  );
};

export default ServicesPage;
