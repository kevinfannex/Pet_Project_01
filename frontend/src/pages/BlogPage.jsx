import Blog from '../components/Blog';

const BlogPage = () => {
  return (
    <div style={{ paddingTop: '0' }}>
      <section className="featured-post fade-up" style={{ padding: '60px 7%', background: 'var(--white)' }}>
        <div style={{ background: '#FEF8F0', borderRadius: '40px', overflow: 'hidden', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', alignItems: 'center' }}>
          <div style={{ height: '100%', minHeight: '400px' }}>
            <img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&q=80" alt="Featured Dog" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ padding: '60px 50px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span style={{ display: 'inline-block', background: 'var(--mustard)', color: 'var(--navy)', padding: '6px 14px', borderRadius: '50px', fontSize: '12.5px', fontWeight: '800', alignSelf: 'flex-start', marginBottom: '20px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Featured Article</span>
            <h2 style={{ fontFamily: 'var(--font-head)', fontSize: '36px', color: 'var(--navy)', marginBottom: '20px', lineHeight: '1.15' }}>The Ultimate Guide to Puppy Nutrition & Health</h2>
            <p style={{ color: 'var(--gray)', marginBottom: '32px', lineHeight: '1.8', fontSize: '16px' }}>Everything you need to know about feeding your new furry friend for optimal growth and lifelong health. Learn about portion sizes, essential nutrients, and common mistakes to avoid.</p>
            <a href="#" style={{ color: '#B85530', fontWeight: '800', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>Read Full Article <span>→</span></a>
          </div>
        </div>
      </section>

      <div className="blog-filters fade-up delay-1" style={{ padding: '0 7% 20px', display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
        {['All Articles', 'Health & Wellness', 'Nutrition', 'Training Tips', 'Clinic News'].map((tag, i) => (
          <button key={tag} style={{ padding: '10px 24px', borderRadius: '50px', border: i===0 ? 'none' : '2px solid #E5E7EB', background: i===0 ? 'var(--navy)' : 'transparent', color: i===0 ? 'white' : 'var(--navy)', cursor: 'pointer', fontWeight: '700', fontSize: '14px', transition: 'all 0.2s' }}>{tag}</button>
        ))}
      </div>

      <div style={{ paddingBottom: '40px' }}>
        <Blog />
      </div>

      <section className="newsletter fade-up" style={{ padding: '100px 7%', background: 'var(--navy)', textAlign: 'center', color: 'white' }}>
        <h2 style={{ fontFamily: 'var(--font-head)', fontSize: '40px', marginBottom: '20px' }}>Join the PawNest Pack</h2>
        <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '40px', maxWidth: '540px', margin: '0 auto 40px', fontSize: '16px', lineHeight: '1.7' }}>Get weekly pet care tips, exclusive clinic offers, and adorable patient stories delivered right to your inbox.</p>
        <form style={{ display: 'flex', gap: '12px', justifyContent: 'center', maxWidth: '540px', margin: '0 auto' }} onSubmit={e => e.preventDefault()}>
          <input type="email" placeholder="Enter your email address" style={{ flex: '1', padding: '18px 24px', borderRadius: '50px', border: 'none', outline: 'none', fontSize: '15px', fontFamily: 'inherit' }} />
          <button className="btn-primary" style={{ border: 'none', cursor: 'pointer', background: 'var(--mustard)', color: 'var(--navy)', padding: '18px 36px', fontSize: '15px' }}>Subscribe</button>
        </form>
      </section>
    </div>
  );
};

export default BlogPage;
