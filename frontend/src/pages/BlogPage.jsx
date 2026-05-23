import { useState, useEffect } from 'react';
import Blog from '../components/Blog';

const BlogPage = () => {
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth <= 600 : false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ paddingTop: '0' }}>
      {/* ── Hero Banner ── */}
      <section className="blog-banner fade-up parallax-bg" style={{
        backgroundImage: 'url("https://ik.imagekit.io/g4lukt2ll/bg_blog_banner_prtproject.png?updatedAt=1779565393700")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: isMobile ? '80px 5% 60px' : '120px 7%',
        textAlign: 'center',
        position: 'relative'
      }}>
        {/* Dark overlay for readability matching Our Vets page banner */}
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(30, 43, 58, 0.55)' }}></div>

        <div style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={{ color: 'var(--white)', fontSize: isMobile ? '32px' : '42px', fontFamily: 'var(--font-head)', marginBottom: '16px', textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
            Insights, Tips & <span style={{ color: 'var(--mustard)' }}>Pet Tales</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.95)', fontSize: isMobile ? '15px' : '18px', maxWidth: '650px', margin: '0 auto', textShadow: '0 1px 4px rgba(0,0,0,0.5)', lineHeight: '1.6' }}>
            Expert advice from our veterinary doctors and grooming professionals to keep your best friends happy, healthy, and full of life.
          </p>
        </div>
      </section>

      <section className="featured-post fade-up" style={{ padding: isMobile ? '40px 5%' : '60px 7%', background: 'var(--white)' }}>
        <div style={{ background: '#FEF8F0', borderRadius: '40px', overflow: 'hidden', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(400px, 1fr))', alignItems: 'center' }}>
          <div style={{ height: '100%', minHeight: isMobile ? '240px' : '400px' }}>
            <img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&q=80" alt="Featured Dog" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ padding: isMobile ? '32px 24px' : '60px 50px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span style={{ display: 'inline-block', background: 'var(--mustard)', color: 'var(--navy)', padding: '6px 14px', borderRadius: '50px', fontSize: '12.5px', fontWeight: '800', alignSelf: 'flex-start', marginBottom: '20px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Featured Article</span>
            <h2 style={{ fontFamily: 'var(--font-head)', fontSize: isMobile ? '28px' : '36px', color: 'var(--navy)', marginBottom: '20px', lineHeight: '1.15' }}>The Ultimate Guide to Puppy Nutrition & Health</h2>
            <p style={{ color: 'var(--gray)', marginBottom: '32px', lineHeight: '1.8', fontSize: '16px' }}>Everything you need to know about feeding your new furry friend for optimal growth and lifelong health. Learn about portion sizes, essential nutrients, and common mistakes to avoid.</p>
            <a href="#" style={{ color: '#B85530', fontWeight: '800', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>Read Full Article <span>→</span></a>
          </div>
        </div>
      </section>

      <div style={{ paddingBottom: '40px' }}>
        <Blog />
      </div>

      <section className="newsletter fade-up" style={{ padding: isMobile ? '60px 5%' : '100px 7%', background: 'var(--navy)', textAlign: 'center', color: 'white' }}>
        <h2 style={{ fontFamily: 'var(--font-head)', fontSize: isMobile ? '30px' : '40px', marginBottom: '20px' }}>Join the PawNest Pack</h2>
        <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '30px', maxWidth: '540px', margin: '0 auto 40px', fontSize: '16px', lineHeight: '1.7' }}>Get weekly pet care tips, exclusive clinic offers, and adorable patient stories delivered right to your inbox.</p>
        <form style={{ display: 'flex', gap: '12px', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'center', maxWidth: '540px', margin: '0 auto' }} onSubmit={e => e.preventDefault()}>
          <input type="email" placeholder="Enter your email address" style={{ flex: '1', padding: '18px 24px', borderRadius: '50px', border: 'none', outline: 'none', fontSize: '15px', fontFamily: 'inherit' }} />
          <button className="btn-primary" style={{ border: 'none', cursor: 'pointer', background: 'var(--mustard)', color: 'var(--navy)', padding: '18px 36px', fontSize: '15px', borderRadius: isMobile ? '50px' : 'none' }}>Subscribe</button>
        </form>
      </section>
    </div>
  );
};

export default BlogPage;
