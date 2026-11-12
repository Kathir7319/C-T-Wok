import React from 'react';
import { Link } from 'react-router-dom';
import { useLiveHours } from '../hooks/useLiveHours';
import { GOOGLE_REVIEWS_URL } from '../data/reviewsData';

export function Footer() {
  const { dayName } = useLiveHours();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* 1. Brand Info */}
          <div className="footer-brand">
            <Link to="/">
              <img src="/logo.svg" alt="C&T Wok Logo" className="footer-logo" />
            </Link>
            <p className="footer-bio">
              Authentic Szechuan, traditional Chinese comfort, and fragrant Thai cooking. Family-owned and proudly serving Morrisville and the RTP community.
            </p>
            <div className="footer-socials">
              <a
                href="https://instagram.com/130CTWok"
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill"
                aria-label="Instagram @130CTWok"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill"
                aria-label="Google Maps Reviews"
                title="Google Reviews (4.4 Stars)"
              >
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.66v3.05h3.87c2.27-2.09 3.675-5.17 3.675-9.15z"/>
                  <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.87-3.05c-1.08.72-2.45 1.16-4.06 1.16-3.13 0-5.78-2.11-6.73-4.96H1.28v3.15C3.26 21.31 7.31 24 12 24z"/>
                  <path fill="#FBBC05" d="M5.27 14.24c-.25-.72-.38-1.49-.38-2.24s.14-1.52.38-2.24V6.61H1.28C.46 8.23 0 10.06 0 12s.46 3.77 1.28 5.39l3.99-3.15z"/>
                  <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.69 1.28 6.61l3.99 3.15c.95-2.85 3.6-4.96 6.73-4.96z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* 2. Navigation */}
          <div>
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links">
              <li><Link to="/" className="footer-link">&rsaquo; Home</Link></li>
              <li><Link to="/menu" className="footer-link">&rsaquo; Full Food Menu</Link></li>
              <li><Link to="/lunch-specials" className="footer-link">&rsaquo; Weekday Lunch Specials</Link></li>
              <li><Link to="/about" className="footer-link">&rsaquo; Our Story & Kitchen</Link></li>
              <li><Link to="/catering" className="footer-link">&rsaquo; Catering & Group Trays</Link></li>
              <li><Link to="/contact" className="footer-link">&rsaquo; Contact & Location</Link></li>
            </ul>
          </div>

          {/* 3. Hours of Operation */}
          <div>
            <h4 className="footer-col-title">Hours of Operation</h4>
            <div className="footer-hours-list">
              <div className={`hours-row ${dayName === 'Mon' ? 'today' : ''}`}>
                <span className="hours-day">Monday{dayName === 'Mon' && ' (Today)'}:</span>
                <span>11:00 AM – 2:45 PM | 4:30 – 9:30 PM</span>
              </div>
              <div className={`hours-row ${dayName === 'Tue' ? 'today' : ''}`}>
                <span className="hours-day">Tuesday{dayName === 'Tue' && ' (Today)'}:</span>
                <span>11:00 AM – 2:45 PM | 4:30 – 9:30 PM</span>
              </div>
              <div className={`hours-row ${dayName === 'Wed' ? 'today' : ''}`}>
                <span className="hours-day">Wednesday{dayName === 'Wed' && ' (Today)'}:</span>
                <span>11:00 AM – 2:45 PM | 4:30 – 9:30 PM</span>
              </div>
              <div className={`hours-row ${dayName === 'Thu' ? 'today' : ''}`}>
                <span className="hours-day">Thursday{dayName === 'Thu' && ' (Today)'}:</span>
                <span>11:00 AM – 2:45 PM | 4:30 – 9:30 PM</span>
              </div>
              <div className={`hours-row ${dayName === 'Fri' ? 'today' : ''}`}>
                <span className="hours-day">Friday{dayName === 'Fri' && ' (Today)'}:</span>
                <span>11:00 AM – 2:45 PM | 4:30 – 9:45 PM</span>
              </div>
              <div className={`hours-row ${dayName === 'Sat' ? 'today' : ''}`}>
                <span className="hours-day">Saturday{dayName === 'Sat' && ' (Today)'}:</span>
                <span>11:00 AM – 2:45 PM | 4:30 – 9:45 PM</span>
              </div>
              <div className={`hours-row ${dayName === 'Sun' ? 'today' : ''}`}>
                <span className="hours-day">Sunday{dayName === 'Sun' && ' (Today)'}:</span>
                <span style={{ color: '#EF4444', fontWeight: 600 }}>Closed</span>
              </div>
            </div>
          </div>

          {/* 4. Get in Touch */}
          <div>
            <h4 className="footer-col-title">Get in Touch</h4>
            <div className="footer-contact-info">
              <div className="contact-item">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span>130 Morrisville Square Way, Morrisville, NC 27560</span>
              </div>
              <div className="contact-item">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <span>
                  Phone: <a href="tel:+19194678860" style={{ color: 'var(--color-gold-light)', fontWeight: 700 }}>(919) 467-8860</a>
                </span>
              </div>
              <div className="contact-item">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"/>
                </svg>
                <span>Fax: (919) 467-5815</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div>
            &copy; {currentYear} C&T Wok. All Rights Reserved. Family-Owned in Morrisville, NC.
          </div>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
            <span>🔒 SSL 256-Bit Encrypted</span>
            <span>•</span>
            <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-gold-light)' }}>
              ⭐ 4.4 on Google (936+ Reviews)
            </a>
            <span>•</span>
            <a href="tel:+19194678860" style={{ color: 'var(--color-gold-light)', fontWeight: 600 }}>
              (919) 467-8860
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
