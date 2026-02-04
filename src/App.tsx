import './App.css'

function App() {
  return (
    <>
      <header className="header">
        <div className="container header-content">
          <a href="#" className="logo">Editorial</a>
          <form className="nav-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" className="input" placeholder="your@email.com" aria-label="Email address" />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container">
            <h1>Thoughtful essays on design, technology, and culture</h1>
            <p className="hero-subtitle">Join 12,000+ readers exploring ideas that shape our digital world</p>
            <form className="hero-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" className="input" placeholder="your@email.com" aria-label="Email address" required />
              <button type="submit" className="btn btn-primary">Start Reading</button>
            </form>
          </div>
        </section>

        <div className="social-proof">
          <p>Join <span className="subscriber-count">12,847</span> curious readers · Weekly issues · Unsubscribe anytime</p>
        </div>

        <section className="section">
          <div className="container">
            <div className="section-header">
              <h2>Recent Issues</h2>
              <a href="#" className="read-more">View Archive →</a>
            </div>
            <div className="grid">
              <article className="card article-card grid-4">
                <span className="article-meta">Jan 28, 2026</span>
                <h3 className="article-title">The Return of Editorial Design in Digital Products</h3>
                <p className="article-excerpt">How magazines from the golden age of print are influencing modern web interfaces and product design systems.</p>
                <a href="#" className="read-more">Read Issue →</a>
              </article>

              <article className="card article-card grid-4">
                <span className="article-meta">Jan 21, 2026</span>
                <h3 className="article-title">Mathematical Beauty: Grid Systems Explained</h3>
                <p className="article-excerpt">A deep dive into Swiss design, modular grids, and how mathematical ratios create visual harmony.</p>
                <a href="#" className="read-more">Read Issue →</a>
              </article>

              <article className="card article-card grid-4">
                <span className="article-meta">Jan 14, 2026</span>
                <h3 className="article-title">Typography as User Experience</h3>
                <p className="article-excerpt">Why font choices matter more than you think, and how to pair serifs with sans-serifs effectively.</p>
                <a href="#" className="read-more">Read Issue →</a>
              </article>
            </div>
          </div>
        </section>

        <section className="about">
          <div className="container">
            <div style={{ textAlign: 'center' }}>
              <h2>About the Author</h2>
              <p>Design systems architect with 15+ years in digital publishing. Previously at The Atlantic, Vox Media, and Condé Nast.</p>
            </div>
            <div className="author-card">
              <div className="author-avatar">MK</div>
              <div>
                <h3 style={{ color: 'white', marginBottom: '0.5rem' }}>M. Kazi</h3>
                <p style={{ color: 'rgba(255,255,255,0.8)', margin: 0 }}>Writing weekly essays at the intersection of design and technology.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 Editorial Layouts. All rights reserved.</p>
          <p style={{ marginTop: '0.5rem' }}>
            <a href="#" style={{ color: 'var(--color-secondary)', margin: '0 0.5rem' }}>Twitter</a>
            ·
            <a href="#" style={{ color: 'var(--color-secondary)', margin: '0 0.5rem' }}>Archive</a>
            ·
            <a href="#" style={{ color: 'var(--color-secondary)', margin: '0 0.5rem' }}>RSS</a>
          </p>
        </div>
      </footer>
    </>
  )
}

export default App
