import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Heart, Activity, ShieldCheck } from 'lucide-react';

const Hero = () => (
  <section className="hero-editorial">
    {/* Background Image with slow scale animation */}
    <div className="hero-editorial-bg">
      <div
        className="hero-editorial-img"
      />
      {/* Gradients */}
      <div className="hero-editorial-overlay-gradient"></div>
      <div className="hero-editorial-grain"></div>
    </div>

    {/* Content Container */}
    <div className="hero-editorial-content">
      <div className="hero-editorial-left">

        <motion.h1
          className="hero-editorial-title hero-title-colored"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Compassionate Care<br />For Every <span className="highlight-text">Paw & Heart</span>.
        </motion.h1>

        {/* 
        <motion.p 
          className="hero-editorial-desc"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          We believe every pet deserves to feel truly loved and deeply understood. Experience premium veterinary care, expert grooming, and genuine warmth for your furry family member in a boutique environment designed for their comfort and your peace of mind.
        </motion.p>
        */}

        <motion.div
          className="hero-editorial-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Link to="/contact#contact-form" className="hero-btn-primary">
            Book Appointment
          </Link>
          <Link to="/services" className="hero-btn-secondary">
            Explore Services <ArrowRight size={18} />
          </Link>
        </motion.div>

        <motion.div
          className="hero-editorial-metrics"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <div className="metric">
            <Heart size={20} className="metric-icon" />
            <div>
              <strong>8,200+</strong>
              <span>Happy Pets Treated</span>
            </div>
          </div>
          <div className="metric">
            <Star size={20} className="metric-icon" />
            <div>
              <strong>14+</strong>
              <span>Certified Vets</span>
            </div>
          </div>
          <div className="metric">
            <Activity size={20} className="metric-icon" />
            <div>
              <strong>24/7</strong>
              <span>Emergency Support</span>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  </section>
);

export default Hero;
