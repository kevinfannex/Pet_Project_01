import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import Locations from '../components/Locations';

const ContactPage = () => {
  const [searchParams] = useSearchParams();
  const [service, setService] = useState('');
  const { hash } = useLocation();
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth <= 600 : false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const serviceParam = searchParams.get('service');
    if (serviceParam) {
      setService(serviceParam);
    }
  }, [searchParams]);

  useEffect(() => {
    if (hash === '#contact-form') {
      const element = document.getElementById('contact-form');
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    }
  }, [hash]);

  return (
    <div style={{ paddingTop: '0' }}>
      <section className="location-banner fade-up parallax-bg" style={{
        backgroundImage: 'url("/bg_for%20location_PetProject.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        padding: isMobile ? '60px 5%' : '100px 7%',
        textAlign: 'center',
        position: 'relative'
      }}>
        {/* Dark overlay to make text readable over the background image */}
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

      <div style={{ padding: isMobile ? '10px 0 32px' : '20px 0 60px' }}>
        <Locations />
      </div>

      <section id="contact-form" className="contact-form fade-up" style={{ padding: isMobile ? '40px 5%' : '80px 7%', background: '#FEF8F0', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(400px, 1fr))', gap: isMobile ? '30px' : '60px', alignItems: 'center' }}>
        <div>
          <span className="eyebrow" style={{ display: 'inline-block', fontSize: '11.5px', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#B85530', background: '#FDEEE6', border: '1px solid #F5C4A8', padding: '5px 14px', borderRadius: '50px', marginBottom: '14px' }}>Get in Touch</span>
          <h2 style={{ fontFamily: 'var(--font-head)', fontSize: isMobile ? '32px' : '40px', color: 'var(--navy)', marginBottom: '20px', lineHeight: '1.1' }}>Send us a <span>message</span></h2>
          <p style={{ color: 'var(--gray)', marginBottom: isMobile ? '24px' : '40px', fontSize: '16px', lineHeight: '1.8' }}>Have a question about our services or need to reschedule an appointment? Send us a quick message and our team will get back to you within 24 hours.</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ padding: isMobile ? '16px' : '24px', background: 'var(--white)', borderRadius: '20px', border: '1px solid rgba(30,43,58,0.05)' }}>
              <h4 style={{ color: 'var(--navy)', marginBottom: '6px', fontSize: '18px', fontFamily: 'var(--font-head)' }}>Email Us</h4>
              <p style={{ color: 'var(--gray)', fontSize: '15px' }}>hello@pawnest.in</p>
            </div>
            <div style={{ padding: isMobile ? '16px' : '24px', background: 'var(--white)', borderRadius: '20px', border: '1px solid rgba(30,43,58,0.05)' }}>
              <h4 style={{ color: 'var(--navy)', marginBottom: '6px', fontSize: '18px', fontFamily: 'var(--font-head)' }}>Call Us</h4>
              <p style={{ color: 'var(--gray)', fontSize: '15px' }}>+91 98765 43210 (General Inquiries)</p>
            </div>
          </div>
        </div>

        <form style={{ display: 'flex', flexDirection: 'column', gap: '20px', background: 'var(--white)', padding: isMobile ? '24px 20px' : '40px', borderRadius: '32px', boxShadow: '0 20px 40px rgba(0,0,0,0.04)' }} onSubmit={e => e.preventDefault()}>
          <h3 style={{ fontFamily: 'var(--font-head)', fontSize: '24px', color: 'var(--navy)', marginBottom: '10px' }}>Contact Form</h3>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '20px' }}>
            <input type="text" placeholder="Your Name" style={{ padding: '16px 20px', borderRadius: '14px', border: '1px solid #E5E7EB', outline: 'none', fontSize: '15px', fontFamily: 'inherit', width: '100%' }} />
            <input type="email" placeholder="Your Email" style={{ padding: '16px 20px', borderRadius: '14px', border: '1px solid #E5E7EB', outline: 'none', fontSize: '15px', fontFamily: 'inherit', width: '100%' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '20px' }}>
            <input type="text" placeholder="Pet's Name" style={{ padding: '16px 20px', borderRadius: '14px', border: '1px solid #E5E7EB', outline: 'none', fontSize: '15px', fontFamily: 'inherit', width: '100%' }} />
            <input type="text" placeholder="Pet Breed / Kind of Animal" style={{ padding: '16px 20px', borderRadius: '14px', border: '1px solid #E5E7EB', outline: 'none', fontSize: '15px', fontFamily: 'inherit', width: '100%' }} />
          </div>

          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            style={{ padding: '16px 20px', borderRadius: '14px', border: '1px solid #E5E7EB', outline: 'none', fontSize: '15px', fontFamily: 'inherit', width: '100%', backgroundColor: 'var(--white)', color: service ? 'inherit' : '#9ca3af' }}
          >
            <option value="" disabled>Select a Service</option>
            <option value="Veterinary Consultation">Veterinary Consultation</option>
            <option value="Luxury Grooming">Luxury Grooming</option>
            <option value="Dental & Oral Care">Dental & Oral Care</option>
            <option value="Luxury Boarding">Luxury Boarding</option>
            <option value="Emergency Care">Emergency Care</option>
            <option value="Nutrition & Diet">Nutrition & Diet</option>
            <option value="Other">Other Inquiry</option>
          </select>

          <textarea placeholder="How can we help you?" rows="5" style={{ padding: '16px 20px', borderRadius: '14px', border: '1px solid #E5E7EB', outline: 'none', resize: 'vertical', fontSize: '15px', fontFamily: 'inherit', width: '100%' }}></textarea>
          <button className="btn-primary" style={{ border: 'none', cursor: 'pointer', fontSize: '15px', width: '100%', marginTop: '10px' }}>Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default ContactPage;
