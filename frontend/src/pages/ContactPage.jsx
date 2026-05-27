import { useState, useEffect, useRef } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';

const ContactPage = () => {
  const [searchParams] = useSearchParams();
  const [service, setService] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { hash } = useLocation();
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth <= 600 : false);

  const ALL_SERVICES = [
    'Home Visits',
    'General checkups',
    'Vaccinations',
    'Behavioral counseling',
    'Surgery and dentistry',
    'Dental Care',
    'Spay and neuter surgeries',
    'Nutrition and Diet',
    'Pet grooming',
    'Tumor removals',
    'Wound repairs',
    'Foreign body removals',
    'Orthopedic surgeries',
    'Soft tissue surgeries',
    'Cancer surgeries',
    'Cardiovascular surgeries',
    'Neurological surgeries',
    'Other Inquiry'
  ];

  const filteredServicesList = ALL_SERVICES.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
      const matchedService = ALL_SERVICES.find(
        s => s.toLowerCase() === serviceParam.toLowerCase()
      );
      if (matchedService) {
        setService(matchedService);
        setSearchTerm(matchedService);
      } else {
        setService(serviceParam);
        setSearchTerm(serviceParam);
      }
    }
  }, [searchParams]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        if (service) {
          setSearchTerm(service);
        } else {
          setSearchTerm('');
        }
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [service]);

  useEffect(() => {
    if (hash === '#contact-form') {
      const element = document.getElementById('contact-form');
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    }
  }, [hash]);

  return (
    <div style={{ paddingTop: '80px', backgroundColor: '#FEF8F0', minHeight: '100vh' }}>

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

          <div ref={dropdownRef} style={{ position: 'relative', width: '100%' }}>
            <div style={{ position: 'relative' }}>
              <input
                type="text"
                placeholder="Select or type a Service..."
                value={searchTerm}
                onFocus={() => setIsOpen(true)}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setIsOpen(true);
                  if (ALL_SERVICES.includes(e.target.value)) {
                    setService(e.target.value);
                  } else {
                    setService('');
                  }
                }}
                style={{
                  padding: '16px 45px 16px 20px',
                  borderRadius: '14px',
                  border: '1px solid #E5E7EB',
                  outline: 'none',
                  fontSize: '15px',
                  fontFamily: 'inherit',
                  width: '100%',
                  backgroundColor: 'var(--white)',
                  color: service ? 'var(--navy)' : '#1f2937',
                  cursor: 'text'
                }}
              />
              <div 
                onClick={() => setIsOpen(!isOpen)}
                style={{ 
                  position: 'absolute', 
                  right: '18px', 
                  top: '50%', 
                  transform: 'translateY(-50%)', 
                  cursor: 'pointer',
                  color: '#9ca3af',
                  fontSize: '12px',
                  userSelect: 'none',
                  pointerEvents: 'none'
                }}
              >
                ▼
              </div>
            </div>

            {isOpen && (
              <div style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                right: 0,
                marginTop: '6px',
                maxHeight: '220px',
                overflowY: 'auto',
                backgroundColor: 'var(--white)',
                borderRadius: '14px',
                boxShadow: '0 12px 30px rgba(30, 43, 58, 0.12)',
                border: '1px solid rgba(30, 43, 58, 0.08)',
                zIndex: 99,
                padding: '6px 0'
              }}>
                {filteredServicesList.length > 0 ? (
                  filteredServicesList.map((option) => {
                    const isSelected = service === option;
                    return (
                      <div
                        key={option}
                        onClick={() => {
                          setService(option);
                          setSearchTerm(option);
                          setIsOpen(false);
                        }}
                        style={{
                          padding: '12px 20px',
                          fontSize: '14.5px',
                          color: isSelected ? 'var(--navy)' : 'var(--gray)',
                          backgroundColor: isSelected ? '#FFF8F2' : 'transparent',
                          fontWeight: isSelected ? '700' : '500',
                          cursor: 'pointer',
                          transition: 'background-color 0.2s, color 0.2s',
                        }}
                        onMouseEnter={(e) => {
                          if (!isSelected) {
                            e.target.style.backgroundColor = '#F9FAFB';
                            e.target.style.color = 'var(--navy)';
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!isSelected) {
                            e.target.style.backgroundColor = 'transparent';
                            e.target.style.color = 'var(--gray)';
                          }
                        }}
                      >
                        {option}
                      </div>
                    );
                  })
                ) : (
                  <div style={{
                    padding: '12px 20px',
                    fontSize: '14px',
                    color: '#9ca3af',
                    textAlign: 'center',
                    fontStyle: 'italic'
                  }}>
                    No matching services found
                  </div>
                )}
              </div>
            )}
          </div>

          <textarea placeholder="How can we help you?" rows="5" style={{ padding: '16px 20px', borderRadius: '14px', border: '1px solid #E5E7EB', outline: 'none', resize: 'vertical', fontSize: '15px', fontFamily: 'inherit', width: '100%' }}></textarea>
          <button className="btn-primary" style={{ border: 'none', cursor: 'pointer', fontSize: '15px', width: '100%', marginTop: '10px' }}>Send Message</button>
        </form>
      </section>

      {/* FAQ Section */}
      <section className="faq-section fade-up" style={{ padding: isMobile ? '40px 5% 80px' : '80px 7% 120px', backgroundColor: '#FEF8F0', maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span className="eyebrow" style={{ display: 'inline-block', fontSize: '11.5px', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#B85530', background: '#FDEEE6', border: '1px solid #F5C4A8', padding: '5px 14px', borderRadius: '50px', marginBottom: '14px' }}>FAQ</span>
          <h2 style={{ fontFamily: 'var(--font-head)', fontSize: isMobile ? '28px' : '36px', color: 'var(--navy)', marginBottom: '16px' }}>Frequently Asked Questions</h2>
          <p style={{ color: 'var(--gray)', fontSize: '16px' }}>Quick answers to questions we hear often.</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {[
            {
              q: "What should I bring to my pet's first visit?",
              a: "Please bring any previous medical records, adoption papers, and a fresh stool sample if possible. We also recommend bringing their favorite treats or a toy to make them feel more comfortable."
            },
            {
              q: "How do I handle an after-hours emergency?",
              a: "Our BTM Layout branch operates 24/7 for emergencies. If you have an urgent issue outside of regular hours, please head straight there or call our emergency hotline."
            },
            {
              q: "Do you offer payment plans or accept pet insurance?",
              a: "Yes, we work with major pet insurance providers and can help you submit claims. We also offer flexible payment plans through our partner financing services for unexpected major procedures."
            },
            {
              q: "How often should my pet get a checkup?",
              a: "We recommend annual wellness exams for healthy adult pets. Puppies, kittens, and senior pets (over 7 years) should typically be seen every 6 months to monitor their changing health needs."
            }
          ].map((faq, index) => (
            <div key={index} style={{ backgroundColor: 'var(--white)', padding: '24px', borderRadius: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
              <h4 style={{ color: 'var(--navy)', fontFamily: 'var(--font-head)', fontSize: '18px', marginBottom: '10px' }}>{faq.q}</h4>
              <p style={{ color: 'var(--gray)', fontSize: '15px', lineHeight: '1.6' }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
