import { motion } from 'framer-motion';

const CARDS = [
  {
    id: 1,
    title: '24 Hrs Ambulance',
    subtitle: 'Emergency Response',
    desc: 'Round-the-clock pet ambulance service for emergencies. Our trained staff and fully-equipped vehicles ensure your pet receives immediate care while being transported safely to our clinic.',
    img: 'https://ik.imagekit.io/g4lukt2ll/Pet_Project/24hreAmbulance.png?updatedAt=1779889837714',
    accent: '#E8A830',
  },
  {
    id: 2,
    title: 'Preventive Care',
    subtitle: 'Wellness & Prevention',
    desc: 'Proactive health screenings, vaccinations, dental checks, and nutritional advice to keep your pet healthy before illness strikes. Prevention is always better than cure.',
    img: 'https://ik.imagekit.io/g4lukt2ll/Pet_Project/Preventive%20care.png?updatedAt=1779890447096',
    accent: '#10B981',
  },
  {
    id: 3,
    title: 'Advanced Diagnostics',
    subtitle: 'Precision Diagnosis',
    desc: 'State-of-the-art in-house diagnostic tools including digital X-rays, ultrasound, full blood panels, and urinalysis for accurate, same-day results.',
    img: 'https://ik.imagekit.io/g4lukt2ll/Pet_Project/advance%20diagnostic.png?updatedAt=1779890446523',
    accent: '#3B82F6',
  },
  {
    id: 4,
    title: 'Critical Care',
    subtitle: 'Intensive Support',
    desc: 'Dedicated ICU and critical care unit staffed 24/7 with specialist vets. We provide oxygen therapy, IV support, and monitoring for life-threatening conditions.',
    img: 'https://ik.imagekit.io/g4lukt2ll/Pet_Project/critical%20care.png?updatedAt=1779890446796',
    accent: '#EF4444',
  },
  {
    id: 5,
    title: 'Customer Support',
    subtitle: 'Always Here For You',
    desc: 'Dedicated support team available via phone, WhatsApp, and chat for post-visit follow-ups, appointment rescheduling, and any concerns you may have about your pet.',
    img: 'https://ik.imagekit.io/g4lukt2ll/Pet_Project/customer%20care.png?updatedAt=1779890446321',
    accent: '#8B5CF6',
  },
  {
    id: 6,
    title: 'In-House Pharmacy',
    subtitle: 'Medications & Supplements',
    desc: 'Fully stocked on-site pharmacy with prescription medications, dewormers, flea treatments, vitamins, and therapeutic pet foods — no extra trips needed.',
    img: 'https://ik.imagekit.io/g4lukt2ll/Pet_Project/pharmacy.png?updatedAt=1779890447032',
    accent: '#F59E0B',
  },
];

const AboutCards = () => {
  return (
    <section style={{
      background: 'var(--cream)',
      padding: '80px 7% 100px',
    }}>
      {/* Section Header */}
      <div style={{ textAlign: 'center', marginBottom: 56 }}>
        <span style={{
          display: 'inline-block',
          fontSize: '11.5px',
          fontWeight: 700,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: '#B85530',
          background: '#FDEEE6',
          border: '1px solid #F5C4A8',
          padding: '5px 14px',
          borderRadius: 50,
          marginBottom: 16,
        }}>
          What We Offer
        </span>
        <h2 style={{
          fontFamily: 'var(--font-head)',
          fontSize: 'clamp(28px, 3.5vw, 42px)',
          fontWeight: 900,
          color: 'var(--navy)',
          lineHeight: 1.15,
          letterSpacing: '-0.015em',
          margin: 0,
        }}>
          Comprehensive <span style={{ color: '#B85530' }}>Care Services</span>
        </h2>
        <p style={{
          marginTop: 14,
          color: 'var(--gray)',
          fontSize: 15,
          maxWidth: 600,
          margin: '14px auto 0',
          lineHeight: 1.8,
        }}>
          World-class veterinary care delivered with deep compassion, clinical excellence, and state-of-the-art diagnostics.
        </p>
      </div>

      {/* Cards Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 20,
        maxWidth: 1200,
        margin: '0 auto',
      }}
        className="about-cards-grid"
      >
        {CARDS.map((card, i) => (
          <motion.div
            key={card.id}
            whileHover={{ scale: 1.025, y: -6 }}
            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
            style={{
              position: 'relative',
              borderRadius: 24,
              overflow: 'hidden',
              height: 280,
              boxShadow: '0 8px 28px rgba(30,43,58,0.10)',
              '--card-index': i,
            }}
            className="about-card-item"
          >
            {/* Background Image */}
            <div style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `url(${card.img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transition: 'transform 0.5s ease',
            }} />

            {/* Gradient overlay */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(15,23,42,0.90) 0%, rgba(15,23,42,0.30) 55%, transparent 100%)',
            }} />


            {/* Text at bottom */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '20px 20px 22px',
            }}>
              <h3 style={{
                fontFamily: 'var(--font-head)',
                fontSize: 20,
                fontWeight: 800,
                color: '#fff',
                margin: '0 0 6px',
                lineHeight: 1.2,
                textShadow: '0 2px 8px rgba(0,0,0,0.4)',
              }}>
                {card.title}
              </h3>
              <p style={{
                fontSize: 12.5,
                color: 'rgba(255,255,255,0.75)',
                margin: 0,
                lineHeight: 1.5,
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}>
                {card.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Responsive style for mobile with stacking curtain effect */}
      <style>{`
        @media (max-width: 768px) {
          .about-cards-grid {
            display: flex !important;
            flex-direction: column !important;
            gap: 32px !important;
            padding-bottom: 60px;
          }
          .about-card-item {
            position: sticky !important;
            top: calc(90px + var(--card-index) * 16px) !important;
            z-index: var(--card-index) !important;
            box-shadow: 0 -8px 24px rgba(0,0,0,0.08) !important;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutCards;
