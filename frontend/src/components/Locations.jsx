import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const locations = [
  {
    img: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1200&auto=format&fit=crop&q=80',
    alt: 'Jayanagar',
    name: 'Jayanagar',
    tag: 'Flagship',
    address: '9th Main Rd, 4th Block, Jayanagar · Open 9AM–9PM',
  },
  {
    img: 'https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?w=1200&auto=format&fit=crop&q=80',
    alt: 'Banaswadi',
    name: 'Banaswadi',
    tag: 'New',
    address: '100 Feet Rd, HRBR Layout, Banaswadi · Open 10AM–8PM',
  },
  {
    img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&auto=format&fit=crop&q=80',
    alt: 'Arekere',
    name: 'Arekere',
    tag: 'Popular',
    address: 'Bannerghatta Main Rd, Arekere · Open 9AM–9PM',
  },
  {
    img: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=1200&auto=format&fit=crop&q=80',
    alt: 'BTM Layout',
    name: 'BTM Layout',
    tag: '24/7 Care',
    address: '16th Main Rd, BTM 2nd Stage, BTM Layout · Open 24/7',
  },
];

const Locations = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="locations fade-up" id="locations" style={{ width: '100%' }}>
      <div
        className="section-header"
        style={{ textAlign: 'center', maxWidth: '560px', margin: '0 auto 40px' }}
      >
        <span className="eyebrow">Our Branches</span>
        <h2>Find us across <span>Bangalore</span></h2>
        <p>Four beautiful clinics, all designed with the same warmth and care we bring to every appointment.</p>
      </div>

      <div className="gallery-sliced-container" onMouseLeave={() => setActiveIndex(null)}>
        {locations.map((loc, i) => {
          const isExpanded = activeIndex === i;
          
          return (
            <motion.div
              key={i}
              className={`gallery-sliced-item group ${isExpanded ? 'active' : ''}`}
              animate={{ flex: isExpanded ? 3 : 1 }}
              transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
              onMouseEnter={() => setActiveIndex(i)}
              onClick={() => setActiveIndex(isExpanded ? null : i)}
            >
              <div className="gallery-img-wrapper">
                <img src={loc.img} alt={loc.alt} className="gallery-img" />
              </div>

              <div className="gallery-gradient" />

              <div className="gallery-vertical-text">
                <h3>{loc.name.toUpperCase()}</h3>
              </div>
              
              <div className="gallery-mobile-text">
                 <h3>{loc.name.toUpperCase()}</h3>
              </div>

              <div className="gallery-expanded-content">
                <span className="gallery-tag">{loc.tag}</span>
                <h2>{loc.name}</h2>
                <p>{loc.address}</p>
                <Link to="/contact#contact-form" className="gallery-btn" onClick={(e) => e.stopPropagation()}>
                  Book Visit <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Locations;
