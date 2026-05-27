import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from 'react-router-dom';

const services = [
  {
    title: "Home Visits",
    description: "Professional veterinary care in the warm comfort of your pet’s familiar home environment.",
    color: "#FDF6EE",
    textColor: "#1E2B3A",
    img: "https://ik.imagekit.io/g4lukt2ll/Pet_Project/Home_Visit.png?updatedAt=1779874061895",
  },
  {
    title: "General checkups",
    description: "Thorough physical wellness examinations and preventive diagnostics to keep your pet thriving.",
    color: "#E2E8F0",
    textColor: "#1E2B3A",
    img: "https://ik.imagekit.io/g4lukt2ll/Pet_Project/General_Checkup.png?updatedAt=1779874653697",
  },
  {
    title: "Vaccinations",
    description: "Complete core and non-core immunization schedules tailored to your pet’s lifestyle and age.",
    color: "#D1FAE5",
    textColor: "#14532D",
    img: "https://ik.imagekit.io/g4lukt2ll/Pet_Project/Vaccination.png?updatedAt=1779874652360",
  },
  {
    title: "Behavioral counseling",
    description: "Compassionate guidance to resolve anxiety, aggression, house training, and social habits.",
    color: "#F3E8FF",
    textColor: "#6B21A8",
    img: "https://ik.imagekit.io/g4lukt2ll/Pet_Project/behavioural_counselling.png?updatedAt=1779877484187",
  },
  {
    title: "Surgery and dentistry",
    description: "Safe surgical solutions paired with comprehensive oral health procedures for optimal hygiene.",
    color: "#FEE2E2",
    textColor: "#991B1B",
    icon: "✂️",
  },
  {
    title: "Dental Care",
    description: "Professional teeth scaling, deep cleaning, and advanced extractions for fresh breath and gums.",
    color: "#E0F2FE",
    textColor: "#0369A1",
    icon: "🦷",
  },
  {
    title: "Spay and neuter surgeries",
    description: "Routine, minimally-invasive spay and neuter procedures ensuring long-term health benefits.",
    color: "#ECFDF5",
    textColor: "#065F46",
    icon: "🏥",
  },
  {
    title: "Nutrition and Diet",
    description: "Tailored dietary plans, prescription food consultations, and weight management strategies.",
    color: "#FFF7ED",
    textColor: "#9A3412",
    icon: "🥗",
  },
  {
    title: "Pet grooming",
    description: "Premium baths, breed-specific styling, blowouts, and nail trims for pets who love to shine.",
    color: "#FDF2F8",
    textColor: "#9D174D",
    icon: "🐩",
  },
  {
    title: "Tumor removals",
    description: "Precise surgical removal of benign or malignant skin tumors, cysts, and tissue growths.",
    color: "#FAF5FF",
    textColor: "#581C87",
    icon: "🔬",
  },
  {
    title: "Wound repairs",
    description: "Rapid treatment, deep cleansing, and expert suturing of lacerations, bites, and abrasions.",
    color: "#FFF1F2",
    textColor: "#9F1239",
    icon: "🩹",
  },
  {
    title: "Foreign body removals",
    description: "Advanced non-surgical or surgical retrieval of swallowed items and gastrointestinal obstructions.",
    color: "#FFFBEB",
    textColor: "#78350F",
    icon: "🧲",
  },
  {
    title: "Orthopedic surgeries",
    description: "Specialized bone, joint, fracture repairs, and ligament reconstructions for active lifestyles.",
    color: "#F0FDFA",
    textColor: "#115E59",
    icon: "🦴",
  },
  {
    title: "Soft tissue surgeries",
    description: "Expert abdominal, thoracic, and skin surgeries addressing internal conditions and trauma.",
    color: "#EFF6FF",
    textColor: "#1E40AF",
    icon: "🩹",
  },
  {
    title: "Cancer surgeries",
    description: "Comprehensive oncological surgical excisions integrated with pain management and care plans.",
    color: "#F8FAFC",
    textColor: "#334155",
    icon: "🎗️",
  },
  {
    title: "Cardiovascular surgeries",
    description: "Highly specialized cardiac procedures addressing heart defects and vascular complications.",
    color: "#FFF5F5",
    textColor: "#C53030",
    icon: "❤️",
  },
  {
    title: "Neurological surgeries",
    description: "Precision neurosurgical procedures for spinal disk issues, nerve trauma, and brain conditions.",
    color: "#F5F3FF",
    textColor: "#5B21B6",
    icon: "🧠",
  }
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
                <div style={{
            borderRadius: 999,
            backgroundImage: `url(${card.img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: 80,
            width: 80,
            marginBottom: 20
          }} />
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
                      <path d="M5 12h14M12 5l7 7-7 7" />
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
                <path d="M5 12h14M12 5l7 7-7 7" />
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
                <div style={{
            borderRadius: 999,
            backgroundImage: `url(${card.img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: 80,
            width: 80,
            marginBottom: 20
          }} />
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
                      <path d="M5 12h14M12 5l7 7-7 7" />
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
