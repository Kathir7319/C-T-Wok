import React, { useState } from 'react';
import { useLiveHours } from '../hooks/useLiveHours';
import { useOrder } from '../context/OrderContext';
import { GOOGLE_REVIEWS_URL } from '../data/reviewsData';

export function ContactPage() {
  const { statusText, tooltip, dayName } = useLiveHours();
  const { showToast } = useOrder();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    showToast(`Thank you ${formData.name}! Your message has been sent.`);
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <main>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow-tag"><span className="dot"></span> Morrisville Square Way</div>
          <h1 className="page-hero-title">
            Location, Hours & <span className="gold-accent">Contact</span>
          </h1>
          <p className="page-hero-desc">
            We look forward to serving you! Find our exact location, live opening status, direct phone numbers, and message form below.
          </p>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="section-py">
        <div className="container">
          <div className="contact-hero-grid">
            {/* Left: Info Details */}
            <div className="contact-card-box">
              {/* Live Status Banner */}
              <div
                style={{
                  background: '#101217',
                  border: '1px solid var(--color-border-gold)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '12px'
                }}
              >
                <div>
                  <span style={{ fontSize: '0.82rem', textTransform: 'uppercase', color: '#9CA3AF', letterSpacing: '0.05em' }}>
                    Current Status
                  </span>
                  <div style={{ marginTop: '4px' }}>
                    <span
                      className={`live-status-pill ${statusText.includes('Open') ? 'open' : 'closed'}`}
                      style={{ fontSize: '0.88rem' }}
                      title={tooltip}
                    >
                      <span className="status-dot"></span>
                      <span className="status-text">{statusText}</span>
                    </span>
                  </div>
                </div>
                <a href="tel:+19194678860" className="btn btn-primary btn-sm">
                  Call Restaurant
                </a>
              </div>

              {/* Location */}
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
                  <p style={{ fontSize: '0.85rem', color: '#9CA3AF', marginTop: '6px' }}>
                    Located inside the Morrisville Square Shopping Center with ample free parking.
                  </p>
                  <a
                    href="https://maps.google.com/?q=130+Morrisville+Square+Way+Morrisville+NC+27560"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--color-gold)', fontSize: '0.9rem', fontWeight: 700, display: 'inline-block', marginTop: '8px' }}
                  >
                    📍 Open in Google Maps &rarr;
                  </a>
                </div>
              </div>

              {/* Direct Phone & Fax */}
              <div className="info-bullet">
                <div className="info-bullet-icon">
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <div className="info-bullet-text">
                  <h4>Direct Telephone (Tap to Call)</h4>
                  <p style={{ marginBottom: '4px' }}>
                    Main Orders: <a href="tel:+19194678860" style={{ color: 'var(--color-gold-light)', fontSize: '1.25rem', fontWeight: 800 }}>(919) 467-8860</a>
                  </p>
                  <p style={{ fontSize: '0.9rem', color: '#9CA3AF' }}>Fax: (919) 467-5815</p>
                </div>
              </div>

              {/* Hours Table */}
              <div className="info-bullet">
                <div className="info-bullet-icon">
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div className="info-bullet-text" style={{ width: '100%' }}>
                  <h4>Weekly Hours of Service</h4>
                  <div className="footer-hours-list" style={{ marginTop: '10px' }}>
                    <div className={`hours-row ${['Mon', 'Tue', 'Wed', 'Thu'].includes(dayName) ? 'today' : ''}`}>
                      <span className="hours-day">Monday – Thursday:</span>
                      <span>11:00 AM – 2:45 PM &nbsp;|&nbsp; 4:30 PM – 9:30 PM</span>
                    </div>
                    <div className={`hours-row ${['Fri', 'Sat'].includes(dayName) ? 'today' : ''}`}>
                      <span className="hours-day">Friday – Saturday:</span>
                      <span>11:00 AM – 2:45 PM &nbsp;|&nbsp; 4:30 PM – 9:45 PM</span>
                    </div>
                    <div className={`hours-row ${dayName === 'Sun' ? 'today' : ''}`}>
                      <span className="hours-day">Sunday:</span>
                      <span style={{ color: '#EF4444', fontWeight: 700 }}>Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Map & GPS */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="map-container" style={{ height: '480px' }}>
                <iframe
                  title="C&T Wok Google Map Location in Morrisville NC"
                  src="https://maps.google.com/maps?q=130%20Morrisville%20Square%20Way,%20Morrisville,%20NC%2027560&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  loading="lazy"
                  allowFullScreen
                />
              </div>

              <div
                style={{
                  background: 'var(--color-bg-surface)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  flexWrap: 'wrap'
                }}
              >
                <div>
                  <h4 style={{ color: '#FFF', fontSize: '1.05rem', marginBottom: '2px' }}>Driving to C&T Wok?</h4>
                  <p style={{ fontSize: '0.88rem', color: '#9CA3AF', margin: 0 }}>
                    Located off Morrisville-Carpenter Rd with easy highway access from NC-54 & I-40.
                  </p>
                </div>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <a
                    href={GOOGLE_REVIEWS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm"
                  >
                    ⭐ Google Reviews (4.4★) ↗
                  </a>
                  <a
                    href="https://maps.google.com/?q=130+Morrisville+Square+Way+Morrisville+NC+27560"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-gold btn-sm"
                  >
                    Launch GPS &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK MESSAGE FORM */}
      <section className="section-py section-bg-surface">
        <div className="container" style={{ maxWidth: '860px' }}>
          <div className="inquiry-form-card">
            <div className="section-header" style={{ marginBottom: '2.2rem' }}>
              <div className="eyebrow-tag"><span className="dot"></span> Send a Message</div>
              <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
                Questions or <span className="gold-accent">Feedback?</span>
              </h2>
              <p style={{ fontSize: '0.95rem', margin: 0 }}>We cherish hearing from our Morrisville diners. Reach out anytime!</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <div>
                  <label htmlFor="contactName" className="form-label">
                    Full Name <span className="req">*</span>
                  </label>
                  <input
                    type="text"
                    id="contactName"
                    className="form-input"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="contactPhone" className="form-label">
                    Phone Number <span className="req">*</span>
                  </label>
                  <input
                    type="tel"
                    id="contactPhone"
                    className="form-input"
                    placeholder="(919) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group-full">
                  <label htmlFor="contactEmail" className="form-label">
                    Email Address <span className="req">*</span>
                  </label>
                  <input
                    type="email"
                    id="contactEmail"
                    className="form-input"
                    placeholder="you@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group-full">
                  <label htmlFor="contactMessage" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="contactMessage"
                    className="form-textarea"
                    placeholder="How can we help you? Let us know your questions, suggestions, or party requests..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group-full" style={{ textAlign: 'center', marginTop: '1rem' }}>
                  <button type="submit" className="btn btn-primary btn-lg" style={{ minWidth: '240px' }}>
                    Send Message &rarr;
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="section-py">
        <div className="container" style={{ maxWidth: '860px' }}>
          <div className="section-header">
            <div className="eyebrow-tag"><span className="dot"></span> Common Inquiries</div>
            <h2 className="section-title">Frequently Asked <span className="gold-accent">Questions</span></h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ background: 'var(--color-bg-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '1.5rem' }}>
              <h4 style={{ color: '#FFF', fontSize: '1.1rem', marginBottom: '0.5rem' }}>How fast is takeout ready after calling?</h4>
              <p style={{ fontSize: '0.92rem', color: '#A0A5B5', margin: 0 }}>
                Most lunch and dinner takeout orders are freshly wok-fired and ready for pickup within 12 to 20 minutes! For large party trays, we appreciate 24 hours advance notice.
              </p>
            </div>

            <div style={{ background: 'var(--color-bg-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '1.5rem' }}>
              <h4 style={{ color: '#FFF', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Do you have vegetarian or gluten-free options?</h4>
              <p style={{ fontSize: '0.92rem', color: '#A0A5B5', margin: 0 }}>
                Yes! Dishes like our Dry-Fried Szechuan String Beans, Mapo Tofu (vegetarian preparation), and Pad Thai (gluten-free rice noodles) can all be customized. Just mention your preferences when calling.
              </p>
            </div>

            <div style={{ background: 'var(--color-bg-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '1.5rem' }}>
              <h4 style={{ color: '#FFF', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Is parking available at Morrisville Square?</h4>
              <p style={{ fontSize: '0.92rem', color: '#A0A5B5', margin: 0 }}>
                Yes, there is extensive free parking right in front of C&T Wok inside the Morrisville Square complex.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
