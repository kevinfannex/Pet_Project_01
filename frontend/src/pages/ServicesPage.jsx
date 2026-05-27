import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Autoplay, EffectCards, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Swiper CSS imports
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';

/* ─── Service Data matching the reference image ─── */
const SERVICES = [
  {
    id: 'home-visits',
    title: 'Home Visits',
    description: 'Professional veterinary care in the warm comfort of your pet’s familiar home environment.',
    img: 'https://ik.imagekit.io/g4lukt2ll/Pet_Project/Home_Visit.png?updatedAt=1779874061895',
    placeholder: 'home-visits.jpg',
    accent: '#F5C96A',
    categories: ['wellness', 'veterinary'],
  },
  {
    id: 'general-checkups',
    title: 'General checkups',
    description: 'Thorough physical wellness examinations and preventive diagnostics to keep your pet thriving.',
    img: 'https://ik.imagekit.io/g4lukt2ll/Pet_Project/General_Checkup.png?updatedAt=1779874653697',
    placeholder: 'general-checkups.jpg',
    accent: '#3B82F6',
    categories: ['wellness', 'diagnostics'],
  },
  {
    id: 'vaccinations',
    title: 'Vaccinations',
    description: 'Complete core and non-core immunization schedules tailored to your pet’s lifestyle and age.',
    img: 'https://ik.imagekit.io/g4lukt2ll/Pet_Project/Vaccination.png?updatedAt=1779874652360',
    placeholder: 'vaccinations.jpg',
    accent: '#10B981',
    categories: ['veterinary', 'wellness'],
  },
  {
    id: 'behavioral-counseling',
    title: 'Behavioral counseling',
    description: 'Compassionate guidance to resolve anxiety, aggression, house training, and social habits.',
    img: 'https://ik.imagekit.io/g4lukt2ll/Pet_Project/behavioural_counselling.png?updatedAt=1779877484187',
    placeholder: 'behavioral-counseling.jpg',
    accent: '#8B5CF6',
    categories: ['wellness'],
  },
  {
    id: 'surgery-dentistry',
    title: 'Surgery and dentistry',
    description: 'Safe surgical solutions paired with comprehensive oral health procedures for optimal hygiene.',
    img: 'https://ik.imagekit.io/g4lukt2ll/Pet_Project/surgery%20and%20dentisry.jpg?updatedAt=1779877483891',
    placeholder: 'surgery-dentistry.jpg',
    accent: '#EF4444',
    categories: ['veterinary', 'emergency'],
  },
  {
    id: 'dental-care',
    title: 'Dental Care',
    description: 'Professional teeth scaling, deep cleaning, and advanced extractions for fresh breath and gums.',
    img: 'https://ik.imagekit.io/g4lukt2ll/Pet_Project/dental_care.jpg?updatedAt=1779877484236',
    placeholder: 'dental-care.jpg',
    accent: '#0ea5e9',
    categories: ['veterinary'],
  },
  {
    id: 'spay-neuter',
    title: 'Spay and neuter surgeries',
    description: 'Routine, minimally-invasive spay and neuter procedures ensuring long-term health benefits.',
    img: 'https://ik.imagekit.io/g4lukt2ll/Pet_Project/Spay%20And%20Neuter%20Care.jpg?updatedAt=1779877484029',
    placeholder: 'spay-neuter.jpg',
    accent: '#34d399',
    categories: ['veterinary'],
  },
  {
    id: 'nutrition-diet',
    title: 'Nutrition and Diet',
    description: 'Tailored dietary plans, prescription food consultations, and weight management strategies.',
    img: 'https://ik.imagekit.io/g4lukt2ll/Pet_Project/nutrient_diet.jpg?updatedAt=1779877484097',
    placeholder: 'nutrition-diet.jpg',
    accent: '#f97316',
    categories: ['wellness'],
  },
  {
    id: 'pet-grooming',
    title: 'Pet grooming',
    description: 'Premium baths, breed-specific styling, blowouts, and nail trims for pets who love to shine.',
    img: 'https://ik.imagekit.io/g4lukt2ll/Pet_Project/pet_Grooming.jpg?updatedAt=1779877484062',
    placeholder: 'pet-grooming.jpg',
    accent: '#ec4899',
    categories: ['grooming'],
  },
  {
    id: 'tumor-removals',
    title: 'Tumor removals',
    description: 'Precise surgical removal of benign or malignant skin tumors, cysts, and tissue growths.',
    img: 'https://ik.imagekit.io/g4lukt2ll/Pet_Project/toumer_removal.jpg?updatedAt=1779877484054',
    placeholder: 'tumor-removals.jpg',
    accent: '#a855f7',
    categories: ['veterinary', 'diagnostics'],
  },
  {
    id: 'wound-repairs',
    title: 'Wound repairs',
    description: 'Rapid treatment, deep cleansing, and expert suturing of lacerations, bites, and abrasions.',
    img: 'https://ik.imagekit.io/g4lukt2ll/Pet_Project/wound_repair.jpg?updatedAt=1779877486296',
    placeholder: 'wound-repairs.jpg',
    accent: '#f43f5e',
    categories: ['emergency', 'veterinary'],
  },
  {
    id: 'foreign-body-removals',
    title: 'Foreign body removals',
    description: 'Advanced retrieval of swallowed items, toys, and other hazardous gastrointestinal obstructions.',
    img: 'https://ik.imagekit.io/g4lukt2ll/Pet_Project/foreign%20body%20removal.png?updatedAt=1779877487643',
    placeholder: 'foreign-body-removals.jpg',
    accent: '#eab308',
    categories: ['emergency', 'veterinary'],
  },
  {
    id: 'orthopedic-surgeries',
    title: 'Orthopedic surgeries',
    description: 'Specialized bone, joint, fracture repairs, and ligament reconstructions for active lifestyles.',
    img: 'https://ik.imagekit.io/g4lukt2ll/Pet_Project/orthopedic%20%20surgen.png?updatedAt=1779877485395',
    placeholder: 'orthopedic-surgeries.jpg',
    accent: '#14b8a6',
    categories: ['veterinary'],
  },
  {
    id: 'soft-tissue-surgeries',
    title: 'Soft tissue surgeries',
    description: 'Expert abdominal, thoracic, and skin surgeries addressing internal conditions and trauma.',
    img: 'https://ik.imagekit.io/g4lukt2ll/Pet_Project/Soft%20Tissue%20Surgery.jpg?updatedAt=1779877484429',
    placeholder: 'soft-tissue-surgeries.jpg',
    accent: '#3b82f6',
    categories: ['veterinary'],
  },
  {
    id: 'cancer-surgeries',
    title: 'Cancer surgeries',
    description: 'Comprehensive oncological surgical excisions integrated with pain management and care plans.',
    img: 'https://ik.imagekit.io/g4lukt2ll/Pet_Project/cancer_surgery.png?updatedAt=1779877486312',
    placeholder: 'cancer-surgeries.jpg',
    accent: '#64748b',
    categories: ['veterinary'],
  },
  {
    id: 'cardiovascular-surgeries',
    title: 'Cardiovascular surgeries',
    description: 'Highly specialized cardiac procedures addressing heart defects and vascular complications.',
    img: 'https://ik.imagekit.io/g4lukt2ll/Pet_Project/cardiovascular_surgries.jpg?updatedAt=1779877484197',
    placeholder: 'cardiovascular-surgeries.jpg',
    accent: '#e53e3e',
    categories: ['veterinary'],
  },
  {
    id: 'neurological-surgeries',
    title: 'Neurological surgeries',
    description: 'Precision neurosurgical procedures for spinal disk issues, nerve trauma, and brain conditions.',
    img: 'https://ik.imagekit.io/g4lukt2ll/Pet_Project/neurological%20surgries.jpg?updatedAt=1779877486626',
    placeholder: 'neurological-surgeries.jpg',
    accent: '#7c3aed',
    categories: ['veterinary'],
  }
];



/* ─── Smart Image Handler (shows premium guide if local file is missing/placeholder) ─── */
function ServiceCardImage({ src, alt, icon, placeholderName, height = 200 }) {
  const [error, setError] = useState(false);

  // Treat standard placeholder paths as indicators to show the helper block
  const isPlaceholder = src.startsWith('src/assets/') || src.includes('PLACEHOLDER');

  if (error || isPlaceholder) {
    const isNum = typeof height === 'number';
    const numHeight = isNum ? height : 200;
    return (
      <div style={{
        height: height,
        background: 'linear-gradient(135deg, var(--navy) 0%, #1e2e42 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        padding: 20,
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Soft paw background watermark */}
        <div style={{ position: 'absolute', fontSize: numHeight * 0.65, opacity: 0.04, bottom: -20, right: -20, pointerEvents: 'none' }}>🐾</div>

        <div style={{ fontSize: numHeight * 0.22, marginBottom: 12 }}>{icon}</div>
        <div style={{ fontSize: 13.5, fontWeight: 800, letterSpacing: 0.5, textTransform: 'uppercase', color: 'var(--mustard)' }}>
          {alt}
        </div>
        <div style={{
          fontSize: 9.5,
          color: 'rgba(255,255,255,0.65)',
          marginTop: 10,
          fontFamily: 'monospace',
          background: 'rgba(255,255,255,0.06)',
          padding: '6px 12px',
          borderRadius: 6,
          border: '1px dashed rgba(255,255,255,0.15)'
        }}>
          src/assets/{placeholderName}
        </div>
      </div>
    );
  }

  return (
    <div style={{ height: height, overflow: 'hidden', position: 'relative' }}>
      <img
        src={src}
        alt={alt}
        onError={() => setError(true)}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'scale(1.08)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'scale(1)';
        }}
      />
    </div>
  );
}

/* ─── Premium Handcrafted SVG Doodles ─── */
const LoopDoodle = ({ color = 'var(--mustard)', style }) => (
  <svg style={style} width="120" height="40" viewBox="0 0 120 40" fill="none">
    <path d="M5,25 C30,5 50,5 65,22 C75,32 85,32 95,20 C105,8 115,12 118,18" stroke={color} strokeWidth="2.5" strokeLinecap="round" fill="none" strokeDasharray="3 3" opacity="0.6" />
  </svg>
);

const SparkleDoodle = ({ color = 'var(--mustard)', style }) => (
  <svg style={style} width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12,2 L14.5,9.5 L22,12 L14.5,14.5 L12,22 L9.5,14.5 L2,12 L9.5,9.5 Z" fill={color} opacity="0.8" />
  </svg>
);

const HandDrawCircle = ({ color = 'var(--peach)', style }) => (
  <svg style={style} width="160" height="60" viewBox="0 0 160 60" fill="none">
    <path d="M10,30 C10,12 80,8 140,15 C155,20 152,45 120,52 C80,60 20,55 12,35 C10,30 25,25 60,26" stroke={color} strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.7" />
  </svg>
);

// Bento Card Layout Sizes configuration based on the relative filtered index
const getBentoConfig = (index) => {
  const pattern = index % 6;
  switch (pattern) {
    case 0:
      return {
        // Large Featured Card (row/col spans 2)
        gridSpan: 'span 2 / span 2',
        rowSpan: 'span 2 / span 2',
        type: 'featured',
        imgHeight: 280,
        padding: 40,
        titleSize: 26,
        descSize: 15.5,
      };
    case 1:
      return {
        // Standard Bento Card
        gridSpan: 'span 1 / span 1',
        rowSpan: 'span 1 / span 1',
        type: 'standard',
        imgHeight: 180,
        padding: 24,
        titleSize: 20,
        descSize: 14,
      };
    case 2:
      return {
        // Tall Spotlight Card
        gridSpan: 'span 1 / span 1',
        rowSpan: 'span 2 / span 2',
        type: 'tall',
        imgHeight: 320,
        padding: 28,
        titleSize: 22,
        descSize: 14.5,
      };
    case 3:
      // Horizontal Highlight Card (flex row layout)
      return {
        gridSpan: 'span 2 / span 2',
        rowSpan: 'span 1 / span 1',
        type: 'horizontal',
        imgHeight: '100%',
        padding: 36,
        titleSize: 23,
        descSize: 14.5,
      };
    case 4:
      return {
        // Standard Bento Card
        gridSpan: 'span 1 / span 1',
        rowSpan: 'span 1 / span 1',
        type: 'standard',
        imgHeight: 180,
        padding: 24,
        titleSize: 20,
        descSize: 14,
      };
    case 5:
      return {
        // Medium Wide Card (span 2 wide but 1 high)
        gridSpan: 'span 2 / span 2',
        rowSpan: 'span 1 / span 1',
        type: 'medium-wide',
        imgHeight: 180,
        padding: 32,
        titleSize: 22,
        descSize: 14.5,
      };
    default:
      return {
        gridSpan: 'span 1 / span 1',
        rowSpan: 'span 1 / span 1',
        type: 'standard',
        imgHeight: 180,
        padding: 24,
        titleSize: 20,
        descSize: 14,
      };
  }
};

/* ─── Services Page Component ─── */
const ServicesPage = () => {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia("(max-width: 900px)").matches;
    }
    return false;
  });
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeService, setActiveService] = useState(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.matchMedia("(max-width: 900px)").matches);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const CATEGORIES = [
    { id: 'all', label: 'All Services' },
    { id: 'veterinary', label: 'Veterinary Care' },
    { id: 'wellness', label: 'Wellness' },
    { id: 'emergency', label: 'Emergency' },
    { id: 'diagnostics', label: 'Diagnostics' },
    { id: 'grooming', label: 'Grooming' },
  ];

  const filteredServices = activeCategory === 'all'
    ? SERVICES
    : SERVICES.filter(s => s.categories && s.categories.includes(activeCategory));

  /* ─── Mobile View ─── */
  if (isMobile) {
    return (
      <div style={{ background: '#FEF8F0', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        {/* Hero Section */}
        <section
          style={{
            position: 'relative',
            padding: '60px 6% 50px',
            textAlign: 'center',
            overflow: 'hidden',
            background: 'var(--navy)',
            color: '#fff',
            borderBottom: '4px solid var(--mustard)'
          }}
        >
          {/* Background Image with overlay */}
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'url("https://ik.imagekit.io/g4lukt2ll/Pet_Project/bg_blog_banner_prtproject.png?updatedAt=1779690916343")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.45,
            zIndex: 0
          }} />
          
          {/* Overlay gradient */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.7) 0%, rgba(15, 23, 42, 0.9) 100%)',
            zIndex: 1
          }} />

          <div style={{ position: 'relative', zIndex: 2 }}>
            <span style={{
              display: 'inline-block',
              fontSize: '11px',
              fontWeight: '700',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--mustard)',
              background: 'rgba(232, 168, 48, 0.15)',
              padding: '6px 16px',
              borderRadius: '50px',
              marginBottom: 16
            }}>
              Papa's Lifeline
            </span>
            <h1 style={{ fontFamily: 'var(--font-head)', fontSize: '38px', color: '#fff', margin: '0 0 12px', lineHeight: 1.15 }}>
              Our Services
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '14.5px', maxWidth: '480px', margin: '0 auto', lineHeight: 1.6 }}>
              Comprehensive, world-class veterinary care delivered with deep compassion and clinical excellence.
            </p>
          </div>
        </section>

        {/* Service Category Filter Tabs (Mobile) */}
        <section style={{ padding: '0 4%', marginTop: -22, position: 'relative', zIndex: 10 }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            background: '#fff',
            padding: '6px 8px',
            borderRadius: '100px',
            boxShadow: '0 8px 24px rgba(30,43,58,0.06)',
            border: '1px solid rgba(30,43,58,0.04)',
            overflowX: 'auto',
            whiteSpace: 'nowrap',
            msOverflowStyle: 'none',  /* IE and Edge */
            scrollbarWidth: 'none',  /* Firefox */
          }}>
            <style>{`
              .mobile-tabs::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            <div className="mobile-tabs" style={{ display: 'flex', gap: 6, overflowX: 'auto', width: '100%' }}>
              {CATEGORIES.map(cat => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setActiveCategory(cat.id);
                      setActiveService(null);
                    }}
                    style={{
                      position: 'relative',
                      padding: '8px 18px',
                      borderRadius: '100px',
                      border: 'none',
                      background: 'transparent',
                      fontFamily: 'var(--font-body)',
                      fontSize: '12.5px',
                      fontWeight: isActive ? '700' : '600',
                      color: isActive ? 'var(--navy)' : 'var(--gray)',
                      cursor: 'pointer',
                      transition: 'color 0.25s ease',
                      outline: 'none',
                      flexShrink: 0
                    }}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeTabPillMobile"
                        style={{
                          position: 'absolute',
                          inset: 0,
                          background: '#FFF8F2',
                          borderRadius: 100,
                          zIndex: -1
                        }}
                      />
                    )}
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Mobile Bento Focus Grid */}
        <section style={{ padding: '40px 4% 30px' }}>
          <div style={{ maxWidth: 600, margin: '0 auto' }}>
            <motion.div
              layout
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: 16,
                gridAutoRows: 'minmax(180px, auto)',
              }}
            >
              {filteredServices.map((s) => {
                const isActive = activeService === s.id;
                const config = isActive
                  ? { gridColumn: 'span 2 / span 2', gridRow: 'span 2 / span 2' }
                  : { gridColumn: 'span 1 / span 1', gridRow: 'span 1 / span 1' };
                return (
                  <motion.div
                    layout
                    key={s.id}
                    onClick={() => setActiveService(isActive ? null : s.id)}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: isActive ? 1 : 1.02 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    style={{
                      gridColumn: config.gridColumn,
                      gridRow: config.gridRow,
                      position: 'relative',
                      borderRadius: 16,
                      overflow: 'hidden',
                      cursor: 'pointer',
                      boxShadow: isActive ? '0 12px 30px rgba(30,43,58,0.18)' : '0 6px 15px rgba(30,43,58,0.08)',
                      minHeight: isActive ? 300 : 180,
                    }}
                  >
                    {/* Background image */}
                    <div style={{
                      position: 'absolute', inset: 0,
                      backgroundImage: s.img ? `url(${s.img})` : undefined,
                      backgroundColor: s.img ? undefined : '#e8e0d8',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      transition: 'transform 0.5s ease',
                      transform: isActive ? 'scale(1.04)' : 'scale(1)',
                    }} />

                    {/* Collapsed overlay: gradient + title at bottom */}
                    {!isActive && (
                      <div style={{
                        position: 'absolute', inset: 0,
                        background: 'linear-gradient(to top, rgba(15,20,30,0.85) 0%, rgba(15,20,30,0.15) 60%, transparent 100%)',
                        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
                        padding: '16px 14px',
                      }}>
                        <h3 style={{ fontFamily: 'var(--font-head)', fontSize: 14, fontWeight: 800, color: '#fff', margin: 0, lineHeight: 1.25, textShadow: '0 2px 6px rgba(0,0,0,0.4)' }}>
                          {s.title}
                        </h3>
                      </div>
                    )}

                    {/* Expanded overlay: dark scrim, text stacked at bottom */}
                    {isActive && (
                      <div style={{
                        position: 'absolute', inset: 0,
                        background: 'linear-gradient(to top, rgba(10,16,26,0.92) 0%, rgba(10,16,26,0.55) 65%, transparent 100%)',
                        backdropFilter: 'blur(2px)',
                        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
                        padding: '20px 16px',
                      }}>
                        <h3 style={{ fontFamily: 'var(--font-head)', fontSize: 18, fontWeight: 900, color: '#fff', margin: '0 0 6px', lineHeight: 1.2 }}>
                          {s.title}
                        </h3>
                        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.85)', lineHeight: 1.5, margin: '0 0 12px' }}>
                          {s.description}
                        </p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                          <Link
                            to={`/contact?service=${encodeURIComponent(s.title)}#contact-form`}
                            onClick={e => e.stopPropagation()}
                            style={{
                              display: 'inline-block',
                              padding: '8px 18px',
                              borderRadius: 10,
                              background: s.accent,
                              color: '#fff',
                              fontSize: 12,
                              fontWeight: 700,
                              textDecoration: 'none',
                              boxShadow: `0 4px 12px ${s.accent}55`,
                            }}
                          >
                            Book Visit →
                          </Link>
                          <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', fontWeight: 600 }}>
                            Tap to close
                          </span>
                        </div>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Final Premium CTA Section (Mobile) */}
        <section style={{ padding: '20px 4% 50px' }}>
          <div style={{ maxWidth: 600, margin: '0 auto' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                background: 'linear-gradient(rgba(19, 30, 42, 0.85), rgba(19, 30, 42, 0.9)), url("https://ik.imagekit.io/g4lukt2ll/Pet_Project/bg_blog_banner_prtproject.png?updatedAt=1779690916343")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '24px',
                padding: '50px 24px',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 16px 36px rgba(30, 43, 58, 0.15)'
              }}
            >
              {/* Glowing Accent Rings */}
              <div style={{
                position: 'absolute',
                top: '-50%',
                right: '-10%',
                width: 300,
                height: 300,
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(245, 201, 106, 0.1) 0%, transparent 70%)',
                filter: 'blur(20px)',
                pointerEvents: 'none'
              }} />

              <div style={{ position: 'relative', zIndex: 1 }}>
                <span style={{
                  display: 'inline-block',
                  fontSize: 10,
                  fontWeight: 800,
                  color: 'var(--mustard)',
                  letterSpacing: 1.5,
                  textTransform: 'uppercase',
                  background: 'rgba(232, 168, 48, 0.08)',
                  border: '1.5px solid rgba(232, 168, 48, 0.25)',
                  padding: '6px 16px',
                  borderRadius: '50px',
                  marginBottom: 20
                }}>
                  ★ Certified Fear-Free Clinic
                </span>

                <h2 style={{
                  fontFamily: 'var(--font-head)',
                  fontSize: '28px',
                  fontWeight: '900',
                  color: '#fff',
                  lineHeight: 1.25,
                  margin: '0 0 16px'
                }}>
                  Give your best friend the lifetime of care they deserve
                </h2>

                <p style={{
                  color: 'rgba(255,255,255,0.75)',
                  fontSize: '14px',
                  lineHeight: 1.6,
                  margin: '0 auto 28px'
                }}>
                  Appointments are held to a relaxed, unhurried schedule. Experience the peace of mind that comes with veterinary care designed by true pet lovers.
                </p>

                {/* Trust Bullet Items */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 12,
                  marginBottom: 32,
                  borderTop: '1px solid rgba(255,255,255,0.1)',
                  paddingTop: 24
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#fff' }}>
                    <span style={{ color: 'var(--mustard)', fontSize: 16 }}>✓</span>
                    <span style={{ fontSize: 13.5, fontWeight: 600 }}>Personalized Care Paths</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#fff' }}>
                    <span style={{ color: 'var(--mustard)', fontSize: 16 }}>✓</span>
                    <span style={{ fontSize: 13.5, fontWeight: 600 }}>24/7 Priority Emergency Support</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#fff' }}>
                    <span style={{ color: 'var(--mustard)', fontSize: 16 }}>✓</span>
                    <span style={{ fontSize: 13.5, fontWeight: 600 }}>Unconditional Comfort Guarantee</span>
                  </div>
                </div>

                <Link
                  to="/contact#contact-form"
                  className="btn-primary"
                  style={{
                    display: 'inline-block',
                    padding: '14px 32px',
                    fontSize: 14,
                    background: 'var(--mustard)',
                    color: 'var(--navy)',
                    fontWeight: 800,
                    boxShadow: '0 8px 24px rgba(232, 168, 48, 0.4)',
                    textDecoration: 'none',
                    borderRadius: '10px'
                  }}
                >
                  Schedule First Appointment
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    );
  }

  /* ─── Desktop View: Handcrafted Bento Layout ─── */
  const gridItems = [];
  filteredServices.forEach((service, idx) => {
    gridItems.push({ type: 'service', data: service, index: idx });

    // Intersperse storytelling blocks to break rhythm on "All Services" or if there's enough content
    if (activeCategory === 'all') {
      if (idx === 3) {
        gridItems.push({ type: 'storytelling-1', id: 'story-philosophy' });
      } else if (idx === 9) {
        gridItems.push({ type: 'storytelling-2', id: 'story-diagnostics' });
      }
    } else if (filteredServices.length >= 6) {
      if (idx === 3) {
        gridItems.push({ type: 'storytelling-1', id: 'story-philosophy' });
      }
    }
  });

  return (
    <div style={{ background: '#FEF8F0', minHeight: '100vh', paddingBottom: 100, overflowX: 'hidden' }}>

      {/* ─── Hero Section ─── */}
      <section
        style={{
          position: 'relative',
          padding: '90px 8% 80px',
          textAlign: 'center',
          overflow: 'hidden',
          background: 'var(--navy)',
          color: '#fff',
          borderBottom: '4px solid var(--mustard)'
        }}
      >
        {/* Background Image with overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url("https://ik.imagekit.io/g4lukt2ll/Pet_Project/bg_blog_banner_prtproject.png?updatedAt=1779690916343")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.45,
          zIndex: 0
        }} />
        
        {/* Overlay gradient for premium readability */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.6) 0%, rgba(15, 23, 42, 0.8) 100%)',
          zIndex: 1
        }} />

        <div style={{ position: 'relative', zIndex: 2, maxWidth: 800, margin: '0 auto' }}>
          <span style={{
            display: 'inline-block',
            fontSize: '11px',
            fontWeight: '800',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--mustard)',
            background: 'rgba(232, 168, 48, 0.15)',
            border: '1px solid rgba(232, 168, 48, 0.3)',
            padding: '8px 20px',
            borderRadius: '50px',
            marginBottom: 20
          }}>
            ✦ Boutique Care Showcase
          </span>

          <h1 style={{
            fontFamily: 'var(--font-head)',
            fontSize: '56px',
            fontWeight: '900',
            color: '#fff',
            lineHeight: '1.1',
            margin: '0 0 20px',
            letterSpacing: '-0.01em'
          }}>
            Our Services
          </h1>

          <p style={{
            fontFamily: 'var(--font-body)',
            color: 'rgba(255, 255, 255, 0.85)',
            fontSize: '18px',
            lineHeight: '1.7',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Comprehensive, world-class veterinary care delivered with deep compassion and clinical excellence.
          </p>
        </div>
      </section>

      {/* ─── Service Category Filter Tabs ─── */}
      <section style={{ padding: '0 8%' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            background: '#fff',
            padding: '8px 10px',
            borderRadius: '100px',
            boxShadow: '0 16px 36px rgba(30,43,58,0.03)',
            border: '1px solid rgba(30,43,58,0.04)',
            marginTop: -32,
            position: 'relative',
            zIndex: 10
          }}>
            {CATEGORIES.map(cat => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  style={{
                    position: 'relative',
                    padding: '10px 24px',
                    borderRadius: '100px',
                    border: 'none',
                    background: 'transparent',
                    fontFamily: 'var(--font-body)',
                    fontSize: '13.5px',
                    fontWeight: isActive ? '700' : '600',
                    color: isActive ? 'var(--navy)' : 'var(--gray)',
                    cursor: 'pointer',
                    transition: 'color 0.25s ease',
                    outline: 'none'
                  }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabPill"
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: '#FFF8F2',
                        borderRadius: 100,
                        zIndex: -1
                      }}
                    />
                  )}
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Main Services Focus Bento Layout ─── */}
        <section style={{ padding: '70px 8% 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          {/* All Services - single uniform grid */}
          <motion.div
            layout
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 24,
              gridAutoRows: 'minmax(250px, auto)',
            }}
          >
            {filteredServices.map((s) => {
              const isActive = activeService === s.id;
              const config = isActive
                ? { gridColumn: 'span 2 / span 2', gridRow: 'span 2 / span 2' }
                : { gridColumn: 'span 1 / span 1', gridRow: 'span 1 / span 1' };
              return (
                <motion.div
                  layout
                  key={s.id}
                  onClick={() => setActiveService(isActive ? null : s.id)}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: isActive ? 1 : 1.02 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  style={{
                    gridColumn: config.gridColumn,
                    gridRow: config.gridRow,
                    position: 'relative',
                    borderRadius: 20,
                    overflow: 'hidden',
                    cursor: 'pointer',
                    boxShadow: isActive ? '0 20px 50px rgba(30,43,58,0.22)' : '0 8px 20px rgba(30,43,58,0.10)',
                    minHeight: isActive ? 340 : 250,
                  }}
                >
                  {/* Background image */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    backgroundImage: s.img ? `url(${s.img})` : undefined,
                    backgroundColor: s.img ? undefined : '#e8e0d8',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transition: 'transform 0.5s ease',
                    transform: isActive ? 'scale(1.04)' : 'scale(1)',
                  }} />

                  {/* Collapsed overlay: gradient + title at bottom */}
                  {!isActive && (
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: 'linear-gradient(to top, rgba(15,20,30,0.80) 0%, rgba(15,20,30,0.15) 60%, transparent 100%)',
                      display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
                      padding: '20px 18px',
                    }}>
                      <h3 style={{ fontFamily: 'var(--font-head)', fontSize: 17, fontWeight: 800, color: '#fff', margin: 0, lineHeight: 1.25, textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>
                        {s.title}
                      </h3>
                    </div>
                  )}

                  {/* Expanded overlay: dark scrim, left = title, right = description */}
                  {isActive && (
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: 'linear-gradient(to top, rgba(10,16,26,0.88) 0%, rgba(10,16,26,0.45) 55%, transparent 100%)',
                      backdropFilter: 'blur(2px)',
                      display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
                      padding: '28px 24px',
                    }}>
                      <h3 style={{ fontFamily: 'var(--font-head)', fontSize: 22, fontWeight: 900, color: '#fff', margin: '0 0 8px', lineHeight: 1.2 }}>
                        {s.title}
                      </h3>
                      <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, margin: '0 0 16px' }}>
                        {s.description}
                      </p>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        <Link
                          to={`/contact?service=${encodeURIComponent(s.title)}#contact-form`}
                          onClick={e => e.stopPropagation()}
                          style={{
                            display: 'inline-block',
                            padding: '10px 24px',
                            borderRadius: 12,
                            background: s.accent,
                            color: '#fff',
                            fontSize: 13,
                            fontWeight: 700,
                            textDecoration: 'none',
                            boxShadow: `0 4px 16px ${s.accent}55`,
                          }}
                        >
                          Book Visit →
                        </Link>
                        <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', fontWeight: 600 }}>
                          Tap to close
                        </span>
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </section>



      {/* ─── Final Premium CTA Section ─── */}
      <section style={{ padding: '40px 8% 60px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              background: 'linear-gradient(rgba(19, 30, 42, 0.85), rgba(19, 30, 42, 0.9)), url("https://ik.imagekit.io/g4lukt2ll/Pet_Project/bg_blog_banner_prtproject.png?updatedAt=1779690916343")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '40px',
              padding: '70px 80px',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 24px 50px rgba(30, 43, 58, 0.15)'
            }}
          >
            {/* Glowing Accent Rings */}
            <div style={{
              position: 'absolute',
              top: '-50%',
              right: '-10%',
              width: 500,
              height: 500,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(245, 201, 106, 0.1) 0%, transparent 70%)',
              filter: 'blur(30px)',
              pointerEvents: 'none'
            }} />

            <div style={{ position: 'relative', zIndex: 1, maxWidth: 800, margin: '0 auto' }}>
              <span style={{
                display: 'inline-block',
                fontSize: 11,
                fontWeight: 800,
                color: 'var(--mustard)',
                letterSpacing: 2,
                textTransform: 'uppercase',
                background: 'rgba(232, 168, 48, 0.08)',
                border: '1.5px solid rgba(232, 168, 48, 0.25)',
                padding: '8px 24px',
                borderRadius: '50px',
                marginBottom: 28
              }}>
                ★ Certified Fear-Free Veterinary Clinic
              </span>

              <h2 style={{
                fontFamily: 'var(--font-head)',
                fontSize: '44px',
                fontWeight: '900',
                color: '#fff',
                lineHeight: 1.15,
                margin: '0 0 20px'
              }}>
                Give your best friend the lifetime of <br />
                handcrafted care they deserve
              </h2>

              <p style={{
                color: 'rgba(255,255,255,0.75)',
                fontSize: '16.5px',
                lineHeight: 1.7,
                maxWidth: 580,
                margin: '0 auto 36px'
              }}>
                Appointments are held to a relaxed, unhurried schedule. Experience the peace of mind that comes with veterinary care designed by true pet lovers.
              </p>

              {/* Trust Bullet Items */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: 40,
                flexWrap: 'wrap',
                marginBottom: 40,
                borderTop: '1px solid rgba(255,255,255,0.1)',
                paddingTop: 30
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#fff' }}>
                  <span style={{ color: 'var(--mustard)', fontSize: 18 }}>✓</span>
                  <span style={{ fontSize: 14.5, fontWeight: 600 }}>Personalized Care Paths</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#fff' }}>
                  <span style={{ color: 'var(--mustard)', fontSize: 18 }}>✓</span>
                  <span style={{ fontSize: 14.5, fontWeight: 600 }}>24/7 Priority Emergency Support</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#fff' }}>
                  <span style={{ color: 'var(--mustard)', fontSize: 18 }}>✓</span>
                  <span style={{ fontSize: 14.5, fontWeight: 600 }}>Unconditional Comfort Guarantee</span>
                </div>
              </div>

              <Link
                to="/contact#contact-form"
                className="btn-primary"
                style={{
                  padding: '16px 42px',
                  fontSize: 15,
                  background: 'var(--mustard)',
                  color: 'var(--navy)',
                  fontWeight: 800,
                  boxShadow: '0 8px 30px rgba(232, 168, 48, 0.4)'
                }}
              >
                Schedule First Appointment
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default ServicesPage;
