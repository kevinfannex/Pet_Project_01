const CareersPage = () => {
  const jobs = [
    { title: 'Senior Veterinarian', type: 'Full-time', location: 'Indiranagar' },
    { title: 'Certified Pet Groomer', type: 'Full-time', location: 'Koramangala' },
    { title: 'Veterinary Technician', type: 'Part-time', location: 'Whitefield' }
  ];

  return (
    <section className="careers fade-up" style={{ padding: '100px 7%', background: '#FEF8F0', minHeight: '70vh' }}>
      <div className="section-header text-center" style={{ textAlign: 'center', marginBottom: '60px' }}>
        <span className="eyebrow" style={{ display: 'inline-block', fontSize: '11.5px', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#B85530', background: '#FDEEE6', border: '1px solid #F5C4A8', padding: '5px 14px', borderRadius: '50px', marginBottom: '14px' }}>Join Our Pack</span>
        <h2 style={{ fontFamily: 'var(--font-head)', fontSize: '40px', color: 'var(--navy)' }}>Careers at <span>PawNest</span></h2>
        <p style={{ color: 'var(--gray)', margin: '14px auto 0', maxWidth: '500px', fontSize: '16px' }}>We are always looking for passionate animal lovers to join our fear-free certified team.</p>
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {jobs.map((job, i) => (
          <div key={i} className={`fade-up delay-${i}`} style={{ background: 'var(--white)', padding: '30px', borderRadius: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid rgba(30,43,58,0.05)', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
            <div>
              <h3 style={{ fontFamily: 'var(--font-head)', fontSize: '22px', color: 'var(--navy)', marginBottom: '8px' }}>{job.title}</h3>
              <p style={{ color: 'var(--gray)', fontSize: '14px' }}><strong>{job.location}</strong> &nbsp;·&nbsp; {job.type}</p>
            </div>
            <button className="btn-primary" style={{ border: 'none', cursor: 'pointer' }}>Apply Now</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CareersPage;
