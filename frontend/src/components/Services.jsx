import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from 'react-router-dom';

const services = [
  {
    title: "Veterinary Consultation",
    description: "Thorough health check-ups with our experienced vets. Wellness exams, vaccinations, and preventive care tailored to your pet.",
    color: "#FDF6EE", // var(--cream)
    textColor: "#1E2B3A", // var(--navy)
    icon: "🩺",
  },
  {
    title: "Luxury Grooming",
    description: "Breed-specific grooming, spa treatments, and blowouts by certified groomers who handle your pet like royalty.",
    color: "#E2E8F0",
    textColor: "#1E2B3A",
    icon: "✂️",
  },
  {
    title: "Dental & Oral Care",
    description: "Professional dental cleaning, scaling, and oral health assessments to keep your pet's teeth bright and healthy.",
    color: "#D1FAE5",
    textColor: "#14532D",
    icon: "🦷",
  },
  {
    title: "Luxury Boarding",
    description: "Cosy, safe, home-like boarding suites with 24/7 supervision, playtime, and personalised care routines.",
    color: "#F5C96A", // var(--mustard-light)
    textColor: "#1E2B3A",
    icon: "🏡",
  },
  {
    title: "Emergency Care",
    description: "Round-the-clock emergency services with fully equipped critical care unit and experienced ER veterinarians.",
    color: "#FEE2E2",
    textColor: "#991B1B",
    icon: "🚑",
  },
  {
    title: "Nutrition & Diet",
    description: "Personalised dietary plans, prescription food consultations, and nutritional counselling for every life stage.",
    color: "#F3E8FF",
    textColor: "#6B21A8",
    icon: "🥗",
  },
];

export default function Services({ limit }) {
  const targetRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.matchMedia("(max-width: 900px)").matches);
    checkMobile(); // Check on mount
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const displayServices = limit ? services.slice(0, limit) : services;

  // The scroll length controls how far the motion div translates.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${displayServices.length * 20}%`]);

  if (isMobile) {
    // Mobile View: Vertical Curtain Effect
    return (
      <section id="services" style={{ padding: "80px 5%", background: "var(--white)", position: "relative" }}>
        {/* Intro panel */}
        <div style={{ marginBottom: 48, textAlign: "left" }}>
          <span style={{ display: 'inline-block', fontSize: '11.5px', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--mustard)', marginBottom: '14px' }}>What We Offer</span>
          <h2 style={{ fontFamily: "var(--font-head)", fontSize: "36px", color: "var(--navy)", lineHeight: 1.1 }}>
            Everything your pet needs, <br />
            <span style={{ color: "var(--mustard)" }}>under one loving roof</span>
          </h2>
          <p style={{ marginTop: 20, fontSize: 15, color: "var(--gray)", lineHeight: 1.6 }}>
            From routine check-ups to specialist care, luxury grooming to emergency response — we do it all with warmth and expertise.
          </p>
        </div>

        {/* Curtain Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: 32, paddingBottom: 60 }}>
          {displayServices.map((card, i) => (
            <div
              key={i}
              style={{
                position: "sticky",
                top: 90 + i * 15, // Creates the stacking curtain effect
                height: "auto",
                minHeight: 340,
                borderRadius: 28,
                padding: 32,
                background: card.color,
                color: card.textColor,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: "0 -8px 24px rgba(0,0,0,0.06)",
                zIndex: i,
              }}
            >
              <div style={{
                borderRadius: 999,
                background: "rgba(255,255,255,0.4)",
                backdropFilter: "blur(8px)",
                padding: 14,
                width: "fit-content",
                fontSize: 26,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 20
              }}>
                {card.icon}
              </div>

              <div>
                <h3 style={{ fontFamily: "var(--font-head)", fontSize: 26, margin: "0 0 12px" }}>
                  {card.title}
                </h3>
                <p style={{ opacity: 0.8, margin: 0, lineHeight: 1.6, fontSize: 15 }}>
                  {card.description}
                </p>
                <div style={{ marginTop: 24 }}>
                   <Link to={`/contact?service=${encodeURIComponent(card.title)}`} style={{ fontWeight: 'bold', color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
                     Book Now
                     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                       <path d="M5 12h14M12 5l7 7-7 7"/>
                     </svg>
                   </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {limit && (
           <div style={{ textAlign: "center", marginTop: 20 }}>
              <Link to="/services#services" className="btn-outline" style={{ background: 'var(--navy)', color: 'var(--white)', padding: '12px 24px', borderRadius: '50px', textDecoration: 'none', fontWeight: 'bold', display: 'inline-block' }}>See All Services</Link>
           </div>
        )}
      </section>
    );
  }

  // Desktop/Tablet View: Horizontal Scroll
  return (
    <section ref={targetRef} style={{ position: "relative", height: `${displayServices.length * 60}vh`, background: "var(--white)" }} id="services">
      <div style={{ position: "sticky", top: 0, height: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <motion.div style={{ x, display: "flex", gap: 48, paddingLeft: "7%" }}>
          {/* Intro panel */}
          <div style={{ width: "35vw", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <span style={{ display: 'inline-block', fontSize: '11.5px', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--mustard)', marginBottom: '14px' }}>What We Offer</span>
            <h2 style={{ fontFamily: "var(--font-head)", fontSize: "clamp(2.5rem, 4vw, 3.5rem)", color: "var(--navy)", lineHeight: 1.1 }}>
              Everything your pet needs, <br />
              <span style={{ color: "var(--mustard)" }}>under one loving roof</span>
            </h2>
            <p style={{ marginTop: 24, fontSize: 16, color: "var(--gray)", lineHeight: 1.7, maxWidth: 400 }}>
              From routine check-ups to specialist care, luxury grooming to emergency response — we do it all with warmth and expertise.
            </p>
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              style={{ marginTop: 32, width: "fit-content" }}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--mustard)" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </motion.div>
          </div>

          {/* Cards */}
          {displayServices.map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{
                flexShrink: 0,
                width: 380,
                height: "55vh",
                minHeight: 450,
                borderRadius: 32,
                padding: 40,
                background: card.color,
                color: card.textColor,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: "0 10px 30px rgba(0,0,0,0.05)"
              }}
            >
              <div style={{
                borderRadius: 999,
                background: "rgba(255,255,255,0.4)",
                backdropFilter: "blur(8px)",
                padding: 16,
                width: "fit-content",
                fontSize: 32,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {card.icon}
              </div>

              <div>
                <h3 style={{ fontFamily: "var(--font-head)", fontSize: 32, margin: "0 0 16px" }}>
                  {card.title}
                </h3>
                <p style={{ opacity: 0.8, margin: 0, lineHeight: 1.6, fontSize: 16 }}>
                  {card.description}
                </p>
                <div style={{ marginTop: 24 }}>
                   <Link to={`/contact?service=${encodeURIComponent(card.title)}`} style={{ fontWeight: 'bold', color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
                     Book Now
                     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                       <path d="M5 12h14M12 5l7 7-7 7"/>
                     </svg>
                   </Link>
                </div>
              </div>
            </motion.div>
          ))}
          
          {limit && (
             <div style={{ width: "20vw", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Link to="/services#services" className="btn-outline" style={{ background: 'var(--navy)', color: 'var(--white)', padding: '12px 24px', borderRadius: '50px', textDecoration: 'none', fontWeight: 'bold' }}>See All Services</Link>
             </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
