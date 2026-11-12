import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useLiveHours } from '../hooks/useLiveHours';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isOpen, statusText, tooltip } = useLiveHours();
  const location = useLocation();

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container header-container">
          {/* 1. Left: Brand Logo */}
          <Link to="/" className="brand-logo-link" aria-label="C&T Wok Homepage">
            <img
              src="/logo.svg"
              alt="C&T Wok Logo - Szechuan, Chinese & Thai Cuisine"
              className="brand-logo-img"
            />
          </Link>

          {/* 2. Middle: Desktop Navigation Links (Centrally Aligned) */}
          <nav aria-label="Primary Desktop Navigation">
            <ul className="desktop-nav">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  end
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/menu"
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                >
                  Full Menu
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/lunch-specials"
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                >
                  Lunch Specials
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/catering"
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                >
                  Catering & Inquiries
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                >
                  Contact & Hours
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* 3. Right: Header Action CTA & Mobile Hamburger */}
          <div className="header-actions">
            <a href="tel:+19194678860" className="btn btn-primary btn-call">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57.55 0 1 .45 1 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              Order Pickup / Call (919) 467-8860
            </a>

            {/* Mobile Hamburger Button */}
            <button
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile navigation menu"
            >
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`mobile-drawer-overlay ${mobileMenuOpen ? 'active' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Off-Canvas Drawer */}
      <aside
        className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}
        aria-label="Mobile Navigation"
      >
        <div className="mobile-drawer-header">
          <img src="/logo.svg" alt="C&T Wok Logo" style={{ height: '42px' }} />
          <button
            className="mobile-close-btn"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            &times;
          </button>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <span
            className={`live-status-pill ${isOpen ? 'open' : 'closed'}`}
            title={tooltip}
          >
            <span className="status-dot"></span>
            <span className="status-text">{statusText}</span>
          </span>
        </div>

        <ul className="mobile-nav-links">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
              end
            >
              Home <span>&rarr;</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/menu"
              className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
            >
              Full Menu <span>&rarr;</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/lunch-specials"
              className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
            >
              Lunch Specials <span>&rarr;</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
            >
              About Us <span>&rarr;</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/catering"
              className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
            >
              Catering & Inquiries <span>&rarr;</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
            >
              Contact & Hours <span>&rarr;</span>
            </NavLink>
          </li>
        </ul>

        <div className="mobile-drawer-footer">
          <a href="tel:+19194678860" className="btn btn-primary" style={{ width: '100%' }}>
            📞 Call (919) 467-8860
          </a>
          <div style={{ fontSize: '0.85rem', color: '#9CA3AF', textAlign: 'center' }}>
            130 Morrisville Square Way<br />Morrisville, NC 27560
          </div>
        </div>
      </aside>
    </>
  );
}
