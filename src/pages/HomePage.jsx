import React from 'react';
import { Link } from 'react-router-dom';
import { GoogleReviewsMarquee } from '../components/GoogleReviewsMarquee';
import { GOOGLE_REVIEWS_URL } from '../data/reviewsData';

export function HomePage() {
  return (
    <main>
      {/* 1. HERO SECTION */}
      <section className="hero-home">
        <div className="container">
          <div className="hero-content">
            <div className="eyebrow-tag">
              <span className="dot"></span>
              FAMILY-OWNED IN MORRISVILLE, NC &nbsp;•&nbsp; 4.4★ RATED BY 930+ LOCAL DINERS
            </div>

            <h1 className="hero-headline">
              Bold Szechuan Spice, <span className="highlight">Classic Chinese Comfort</span>, and Vibrant Thai Flavors.
            </h1>

            <p className="hero-subheadline">
              Every dish at C&T Wok is cooked to order with fresh ingredients, authentic sauces, and a little bit of kitchen magic. Join us for lunch, dinner, or fast local takeout at Morrisville Square.
            </p>

            <div className="hero-cta-group">
              <Link to="/menu" className="btn btn-primary btn-lg">
                Explore Full Menu
              </Link>
              <a href="tel:+19194678860" className="btn btn-outline btn-lg">
                Call to Order: (919) 467-8860
              </a>
            </div>

            <div className="hero-stats-bar">
              <div className="stat-item">
                <span className="stat-number">
                  4.4<span className="gold">★</span>
                </span>
                <span className="stat-label">930+ Google Reviews</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">
                  100<span className="gold">%</span>
                </span>
                <span className="stat-label">Wok-Cooked to Order</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">Mon–Fri</span>
                <span className="stat-label">Lunch Specials 11am–2:45pm</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURED MENU CATEGORIES */}
      <section className="section-py section-bg-surface">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow-tag"><span className="dot"></span> Culinary Specialties</div>
            <h2 className="section-title">
              Explore Our <span className="gold-accent">Three Signature Flavors</span>
            </h2>
            <p className="section-desc">
              From fiery Sichuan peppercorns to comforting Cantonese stir-fries and fragrant Bangkok street curries, discover handcrafted perfection in every wok.
            </p>
          </div>

          <div className="grid-4">
            {/* Category 1: Szechuan */}
            <div
              className="category-card"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80')`
              }}
            >
              <div className="category-content">
                <span className="category-badge">Authentic Szechuan</span>
                <h3 className="category-title">Fiery & Numbing</h3>
                <div className="category-featured-dish">Featured: Fillet Fish in Spicy Szechuan Sauce</div>
                <p className="category-desc">
                  Fiery, aromatic, and bold. Taste house favorites like our Boiled Fish in Spicy Szechuan Sauce and dry-fried Stir-Fried String Beans.
                </p>
                <Link to="/menu?category=szechuan" className="btn btn-primary btn-sm">
                  View Szechuan Menu &rarr;
                </Link>
              </div>
            </div>

            {/* Category 2: Traditional Chinese */}
            <div
              className="category-card"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80')`
              }}
            >
              <div className="category-content">
                <span className="category-badge" style={{ background: '#2563EB' }}>Traditional Chinese</span>
                <h3 className="category-title">Crisp Comforts</h3>
                <div className="category-featured-dish">Featured: Crispy Sesame Chicken</div>
                <p className="category-desc">
                  Wok-seared classics crafted with crisp vegetables, savory glazes, and generous portions—from Crispy Sesame Chicken to classic lo mein.
                </p>
                <Link to="/menu?category=chinese" className="btn btn-primary btn-sm">
                  View Chinese Menu &rarr;
                </Link>
              </div>
            </div>

            {/* Category 3: Vibrant Thai */}
            <div
              className="category-card"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80')`
              }}
            >
              <div className="category-content">
                <span className="category-badge" style={{ background: '#059669' }}>Thai Favorites</span>
                <h3 className="category-title">Fragrant Herbs</h3>
                <div className="category-featured-dish">Featured: Thai Spicy Basil with Chicken</div>
                <p className="category-desc">
                  Fragrant herbs, rich curries, and balanced heat. Enjoy freshly tossed Pad Thai, aromatic curries, and Thai Spicy Basil stir-fries.
                </p>
                <Link to="/menu?category=thai" className="btn btn-primary btn-sm">
                  View Thai Menu &rarr;
                </Link>
              </div>
            </div>

            {/* Category 4: Lunch Specials */}
            <div
              className="category-card"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80')`
              }}
            >
              <div className="category-content">
                <span className="category-badge" style={{ background: '#D97706' }}>Lunch Specials</span>
                <h3 className="category-title">Fast & Satisfying</h3>
                <div className="category-featured-dish">Featured: Double Cooked Pork Belly</div>
                <p className="category-desc">
                  Fast, satisfying midday favorites served Monday through Friday from 11:00 AM to 2:45 PM. Try our signature Double Cooked Pork Belly.
                </p>
                <Link to="/lunch-specials" className="btn btn-primary btn-sm">
                  View Lunch Specials &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT STORY & COMMUNITY SPOTLIGHT */}
      <section className="section-py">
        <div className="container">
          <div className="story-spotlight-box">
            <div>
              <div className="eyebrow-tag"><span className="dot"></span> Neighborhood Family Tradition</div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', marginBottom: '1.25rem' }}>
                A Neighborhood Favorite Built on <span className="gold-accent">Fresh Ingredients & Family Recipes</span>
              </h2>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: '#D1D5DB', marginBottom: '1.2rem' }}>
                Welcome to C&T Wok! As a proud family-owned restaurant in the heart of Morrisville, we bring together the best of Szechuan, traditional Chinese, and Thai cooking under one roof.
              </p>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: '#A0A5B5', marginBottom: '1.8rem' }}>
                Whether you crave the numbing heat of authentic Szechuan peppercorns, the comforting crunch of sesame chicken, or a fragrant bowl of Thai curry, every plate is prepared fresh when you order.
              </p>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
                <Link to="/about" className="btn btn-gold">
                  Read Our Story
                </Link>
                <a
                  href={GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="story-badge-highlight"
                  style={{ marginTop: 0 }}
                >
                  <span>⭐ Loved by Morrisville Diners: <strong>4.4 / 5 Stars</strong> (936+ Google Reviews) ↗</span>
                </a>
              </div>
            </div>

            {/* Instagram Community Spotlight */}
            <div className="instagram-callout-card">
              <div style={{ fontSize: '2.5rem' }}>📸</div>
              <h3 style={{ fontSize: '1.3rem', color: '#FFF', margin: 0 }}>Share Your Table with Us!</h3>
              <p style={{ fontSize: '0.92rem', color: '#9CA3AF', margin: 0 }}>
                Snap a photo of your favorite dish and tag or DM us on Instagram for a chance to be featured on our page.
              </p>
              <a
                href="https://instagram.com/130CTWok"
                target="_blank"
                rel="noopener noreferrer"
                className="instagram-handle-btn"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                @130CTWok on Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. GOOGLE REVIEWS RUNNING SLIDES CAROUSEL */}
      <GoogleReviewsMarquee />

      {/* 5. CATERING & GROUP ORDERS BANNER */}
      <section className="section-py">
        <div className="container">
          <div
            style={{
              background: 'radial-gradient(circle at 10% 50%, rgba(197, 43, 30, 0.3) 0%, rgba(22, 24, 31, 0.95) 80%)',
              border: '1px solid var(--color-border-gold)',
              borderRadius: 'var(--radius-lg)',
              padding: '3.5rem 3rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '2rem',
              flexWrap: 'wrap'
            }}
          >
            <div style={{ maxWidth: '620px' }}>
              <div className="eyebrow-tag"><span className="dot"></span> Parties & Corporate Events</div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 2.8vw, 2.3rem)', marginBottom: '0.8rem' }}>
                Planning a Family Gathering, Office Lunch, or Event?
              </h2>
              <p style={{ color: '#D1D5DB', fontSize: '1.05rem', margin: 0 }}>
                Let C&T Wok cater your next event with generous party trays of our most popular Chinese, Szechuan, and Thai dishes. Freshly cooked, neatly packaged, and ready right on time.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <Link to="/catering" className="btn btn-gold btn-lg">
                Explore Catering Trays
              </Link>
              <a href="tel:+19194678860" className="btn btn-outline btn-lg">
                Call: (919) 467-8860
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. VISIT US & GOOGLE MAPS SECTION */}
      <section className="section-py section-bg-surface">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow-tag"><span className="dot"></span> Morrisville Square Way</div>
            <h2 className="section-title">
              Visit Us in <span className="gold-accent">Morrisville, NC</span>
            </h2>
            <p className="section-desc">
              Conveniently located in Morrisville Square with abundant free parking. Easy pickup and welcoming dine-in booths.
            </p>
          </div>

          <div className="grid-2">
            <div className="contact-card-box">
              <div className="info-bullet">
                <div className="info-bullet-icon">
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <div className="info-bullet-text">
                  <h4>Restaurant Address</h4>
                  <p>
                    <strong>C&T Wok</strong><br />
                    130 Morrisville Square Way<br />
                    Morrisville, NC 27560
                  </p>
                  <a
                    href="https://maps.google.com/?q=130+Morrisville+Square+Way+Morrisville+NC+27560"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--color-gold)', fontSize: '0.88rem', fontWeight: 600, display: 'inline-block', marginTop: '6px' }}
                  >
                    Get Driving Directions &rarr;
                  </a>
                </div>
              </div>

              <div className="info-bullet">
                <div className="info-bullet-icon">
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <div className="info-bullet-text">
                  <h4>Phone & Takeout Orders</h4>
                  <p>
                    Direct: <a href="tel:+19194678860" style={{ color: '#FFF', fontWeight: 700 }}>(919) 467-8860</a>
                  </p>
                  <p>Fax: (919) 467-5815</p>
                </div>
              </div>

              <div className="info-bullet">
                <div className="info-bullet-icon">
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div className="info-bullet-text" style={{ width: '100%' }}>
                  <h4>Weekly Operating Hours</h4>
                  <div className="footer-hours-list" style={{ marginTop: '8px' }}>
                    <div className="hours-row">
                      <span className="hours-day">Monday – Thursday:</span>
                      <span>11:00 AM – 2:45 PM | 4:30 PM – 9:30 PM</span>
                    </div>
                    <div className="hours-row">
                      <span className="hours-day">Friday – Saturday:</span>
                      <span>11:00 AM – 2:45 PM | 4:30 PM – 9:45 PM</span>
                    </div>
                    <div className="hours-row">
                      <span className="hours-day">Sunday:</span>
                      <span style={{ color: '#EF4444', fontWeight: 600 }}>Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="map-container">
              <iframe
                title="C&T Wok Google Map Location"
                src="https://maps.google.com/maps?q=130%20Morrisville%20Square%20Way,%20Morrisville,%20NC%2027560&t=&z=15&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
