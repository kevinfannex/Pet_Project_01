const posts = [
  {
    img: 'https://images.unsplash.com/photo-1529877969-06ee22c30022?w=600&q=80',
    alt: 'Dog monsoon care',
    cat: '🌧️ Seasonal Care',
    title: 'How to Keep Your Dog Healthy and Happy Through the Monsoon',
    desc: "From paw care to diet adjustments, here's everything a Bangalore pet parent needs to know for the rainy season.",
    author: 'Dr. Ananya Rajan',
    time: '5 min read',
    date: 'May 12',
    delay: '',
  },
  {
    img: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&q=80',
    alt: 'Cat nutrition',
    cat: '🥗 Nutrition',
    title: '5 Foods You Should Never Feed Your Cat',
    desc: 'Common household items that could be quietly harming your feline friend — and what to feed instead.',
    author: 'Dr. Karthik S.',
    time: '3 min read',
    date: null,
    delay: 'delay-1',
  },
  {
    img: 'https://images.unsplash.com/photo-1601758174493-45d0a4d3e407?w=400&q=80',
    alt: 'Puppy first vet visit',
    cat: '🐶 New Pet Guide',
    title: "Your Puppy's First Vet Visit: What to Expect",
    desc: 'A calm, reassuring guide to help first-time puppy parents feel confident and prepared.',
    author: 'Meena Pillai',
    time: '4 min read',
    date: null,
    delay: 'delay-2',
  },
];

const Blog = () => (
  <section className="blog" id="blog">
    <div className="blog-header fade-up">
      <div>
        <div className="section-header" style={{ marginBottom: 0 }}>
          <span className="eyebrow">Pet Care Stories</span>
          <h2>Tips, love &amp; <span>pet wisdom</span></h2>
        </div>
      </div>
      <a href="#" className="btn-outline" style={{ whiteSpace: 'nowrap' }}>View all articles</a>
    </div>
    <div className="blog-grid">
      {posts.map((post, i) => (
        <div className={`blog-card fade-up ${post.delay}`} key={i}>
          <div className="blog-img">
            <img src={post.img} alt={post.alt} />
          </div>
          <div className="blog-body">
            <div className="blog-cat">{post.cat}</div>
            <h3>{post.title}</h3>
            <p>{post.desc}</p>
            <div className="blog-meta">
              <span>{post.author}</span>
              <div className="meta-dot" />
              <span>{post.time}</span>
              {post.date && <><div className="meta-dot" /><span>{post.date}</span></>}
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Blog;
