import React, { useState, useEffect } from 'react';
import Locations from '../components/Locations';

const LocationPage = () => {
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth <= 600 : false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 600);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ paddingTop: '0', minHeight: '100vh', backgroundColor: '#FEF8F0' }}>
      <section className="location-banner fade-up parallax-bg" style={{
        backgroundImage: 'url("/bg_for%20location_PetProject.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        padding: isMobile ? '60px 5%' : '100px 7%',
        textAlign: 'center',
        position: 'relative'
      }}>
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(30, 43, 58, 0.65)' }}></div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h3 style={{ color: 'var(--white)', fontSize: isMobile ? '24px' : '36px', fontFamily: 'var(--font-head)', marginBottom: '16px', textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
            📍 Find Us in Bangalore
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: isMobile ? '15px' : '18px', maxWidth: '600px', margin: '0 auto', textShadow: '0 1px 4px rgba(0,0,0,0.5)', lineHeight: '1.6' }}>
            We are conveniently located across multiple state-of-the-art facilities in the city to ensure your pet gets the best care, close to home.
          </p>
        </div>
      </section>

      <div style={{ padding: isMobile ? '10px 0 60px' : '20px 0 100px' }}>
        <Locations />
      </div>
    </div>
  );
};

export default LocationPage;
