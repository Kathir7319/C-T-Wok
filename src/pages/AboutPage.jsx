import React from 'react';
import { Link } from 'react-router-dom';
import { GOOGLE_REVIEWS_URL } from '../data/reviewsData';

export function AboutPage() {
  return (
    <main>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow-tag"><span className="dot"></span> Our Story & Kitchen</div>
          <h1 className="page-hero-title">
            A Neighborhood Favorite Built on <span className="gold-accent">Family Recipes</span>
          </h1>
          <p className="page-hero-desc">
            Bringing authentic Szechuan heat, traditional Chinese wok comfort, and fragrant Thai curries to Morrisville Square.
          </p>
        </div>
      </section>

      {/* STORY SPLIT SECTION */}
      <section className="section-py">
        <div className="container">
          <div className="story-split-grid">
            <div>
              <div className="eyebrow-tag"><span className="dot"></span> Morrisville, NC</div>
              <h2 style={{ fontSize: 'clamp(2rem, 3.2vw, 2.6rem)', marginBottom: '1.4rem' }}>
                From Our Family's Kitchen to <span className="gold-accent">Your Table</span>
              </h2>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#D1D5DB', marginBottom: '1.25rem' }}>
                Welcome to C&T Wok! As a proud family-owned restaurant in the heart of Morrisville, we bring together the best of Szechuan, traditional Chinese, and Thai cooking under one roof.
              </p>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#A0A5B5', marginBottom: '1.25rem' }}>
                Whether you crave the numbing heat of authentic Szechuan peppercorns, the comforting crunch of sesame chicken, or a fragrant bowl of Thai curry, every plate is prepared fresh when you order.
              </p>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#A0A5B5', marginBottom: '2rem' }}>
                We believe that great Asian cooking doesn't take shortcuts. We don't use steam tables or pre-made warming pans—every dish comes sizzling off high-heat woks within moments of your call.
              </p>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Link to="/menu" className="btn btn-primary btn-lg">
                  Explore Full Menu
                </Link>
                <Link to="/contact" className="btn btn-outline btn-lg">
                  Find Our Location
                </Link>
              </div>
            </div>

            {/* Visual Mosaic */}
            <div className="story-image-mosaic">
              <img
                src="https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=1000&q=80"
                alt="Wok Cooking at C&T Wok"
                className="mosaic-img-main"
              />
              <div className="mosaic-badge-float">
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#FFF', fontFamily: 'var(--font-heading)' }}>
                  4.4<span style={{ color: 'var(--color-gold)' }}>★</span> Rating
                </div>
                <p style={{ fontSize: '0.82rem', color: '#C5CBD6', margin: '4px 0 6px 0' }}>
                  Over <strong>936+ verified Google reviews</strong> from Morrisville diners!
                </p>
                <a
                  href={GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--color-gold-light)', fontSize: '0.78rem', fontWeight: 700 }}
                >
                  View on Google Maps ↗
                </a>
              </div>
            </div>
          </div>

          {/* THREE CULINARY PILLARS */}
          <div className="heritage-grid">
            <div className="heritage-card">
              <div style={{ fontSize: '2.5rem' }}>🔥</div>
              <h3 style={{ color: '#FFF', fontSize: '1.3rem' }}>Mastery of Wok Hei</h3>
              <p style={{ fontSize: '0.92rem', color: '#A0A5B5', margin: 0 }}>
                The legendary "breath of the wok." Intense jet-burner flames sear proteins instantly, sealing in tenderness while imparting that signature crisp, smoky aroma.
              </p>
            </div>

            <div className="heritage-card">
              <div style={{ fontSize: '2.5rem' }}>🌶️</div>
              <h3 style={{ color: '#FFF', fontSize: '1.3rem' }}>Authentic Peppercorns</h3>
              <p style={{ fontSize: '0.92rem', color: '#A0A5B5', margin: 0 }}>
                We use genuine Sichuan red and green peppercorns (Hua Jiao) and fermented bean pastes from Chengdu to deliver the authentic numbing, aromatic tingling heat (Málà).
              </p>
            </div>

            <div className="heritage-card">
              <div style={{ fontSize: '2.5rem' }}>🌿</div>
              <h3 style={{ color: '#FFF', fontSize: '1.3rem' }}>Fragrant Thai Botanicals</h3>
              <p style={{ fontSize: '0.92rem', color: '#A0A5B5', margin: 0 }}>
                Fresh holy basil, bruised lemongrass stalks, kaffir lime leaves, and galangal roots are infused into rich coconut curries and sizzling noodle stir-fries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMMUNITY SPOTLIGHT */}
      <section className="section-py section-bg-surface">
        <div className="container">
          <div
            style={{
              background: 'radial-gradient(circle at 80% 20%, rgba(212, 175, 55, 0.15) 0%, rgba(22, 24, 31, 0.95) 70%)',
              border: '1px solid var(--color-border-gold)',
              borderRadius: 'var(--radius-lg)',
              padding: '3.5rem',
              textAlign: 'center'
            }}
          >
            <div className="eyebrow-tag"><span className="dot"></span> Community Spotlight</div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', marginBottom: '1rem' }}>
              Share Your Table with Us!
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#D1D5DB', maxWidth: '650px', margin: '0 auto 2rem auto' }}>
              Snap a photo of your favorite dish—whether it's our bubbling Boiled Fish, Famous Coffee Chicken, or fresh Pad Thai—and tag or DM us on Instagram <strong style={{ color: 'var(--color-gold-light)' }}>@130CTWok</strong> for a chance to be featured on our page!
            </p>
            <a
              href="https://instagram.com/130CTWok"
              target="_blank"
              rel="noopener noreferrer"
              className="instagram-handle-btn"
              style={{ fontSize: '1.05rem', padding: '14px 32px' }}
            >
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Follow @130CTWok on Instagram
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
