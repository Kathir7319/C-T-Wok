import React, { useState } from 'react';
import { useOrder } from '../context/OrderContext';

export function CateringPage() {
  const [calcGuests, setCalcGuests] = useState(30);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    inquiryType: 'Catering',
    eventDate: '',
    guestCount: '',
    message: ''
  });
  const [showModal, setShowModal] = useState(false);
  const { showToast } = useOrder();

  // Compute recommended trays
  const recommendedFull = Math.floor(calcGuests / 14);
  const remainder = calcGuests % 14;
  let recommendedHalf = remainder > 0 ? (remainder <= 7 ? 1 : 2) : 0;
  if (recommendedFull === 0 && recommendedHalf === 0) recommendedHalf = 2;

  const minCost = recommendedHalf * 55 + recommendedFull * 105;
  const maxCost = recommendedHalf * 75 + recommendedFull * 135;

  const handleApplyCalcToForm = () => {
    setFormData((prev) => ({
      ...prev,
      guestCount: calcGuests.toString(),
      message: `Hi C&T Wok team, I would like to request catering for approximately ${calcGuests} Guests (${recommendedFull} Full Trays, ${recommendedHalf} Half Trays, Est. $${minCost}-$${maxCost}). Please let me know dish recommendations and availability.`
    }));
    showToast('✅ Estimate applied to inquiry form below!');
    const el = document.getElementById('inquiryFormSection');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.email) {
      alert('Please fill in your Full Name, Phone Number, and Email Address.');
      return;
    }
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      inquiryType: 'Catering',
      eventDate: '',
      guestCount: '',
      message: ''
    });
  };

  return (
    <main>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow-tag"><span className="dot"></span> Parties, Office Lunches & Events</div>
          <h1 className="page-hero-title">
            Planning a Gathering or <span className="gold-accent">Corporate Event?</span>
          </h1>
          <p className="page-hero-desc">
            Let C&T Wok cater your next event with generous party trays of our most popular Chinese, Szechuan, and Thai dishes. Send us a quick inquiry below or call our team directly at (919) 467-8860.
          </p>
        </div>
      </section>

      {/* TRAY SIZES & CALCULATOR */}
      <section className="section-py">
        <div className="container">
          <div className="tray-guide-grid">
            <div className="tray-type-card">
              <span className="tray-badge-pill">Popular for Gatherings</span>
              <h3 style={{ color: '#FFF', fontSize: '1.4rem', marginBottom: '0.5rem' }}>Half Party Tray</h3>
              <p style={{ color: 'var(--color-gold-light)', fontWeight: 700, marginBottom: '1rem' }}>
                Serves 6 – 8 Guests
              </p>
              <p style={{ fontSize: '0.95rem', color: '#A0A5B5', marginBottom: '1.25rem' }}>
                Perfect for family dinners, small office departments, or mixing multiple dishes for diverse appetites.
              </p>
              <ul style={{ listStyle: 'none', fontSize: '0.88rem', color: '#D1D5DB', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li>✓ Deep aluminum food container with secure lid</li>
                <li>✓ Serves generous portions with steam retention</li>
                <li>✓ Great for appetizers, entrees, and noodles</li>
              </ul>
            </div>

            <div className="tray-type-card recommended">
              <span className="tray-badge-pill" style={{ background: 'var(--color-primary)', color: '#FFF' }}>
                Best Value For Groups
              </span>
              <h3 style={{ color: '#FFF', fontSize: '1.4rem', marginBottom: '0.5rem' }}>Full Party Tray</h3>
              <p style={{ color: 'var(--color-gold-light)', fontWeight: 700, marginBottom: '1rem' }}>
                Serves 12 – 16 Guests
              </p>
              <p style={{ fontSize: '0.95rem', color: '#A0A5B5', marginBottom: '1.25rem' }}>
                Ideal for large company meetings, celebratory parties, church groups, and sports teams in the RTP area.
              </p>
              <ul style={{ listStyle: 'none', fontSize: '0.88rem', color: '#D1D5DB', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li>✓ Full catering standard chafing dish fit</li>
                <li>✓ High-volume value pricing per person</li>
                <li>✓ Free fortune cookies & serving utensils upon request</li>
              </ul>
            </div>
          </div>

          {/* INTERACTIVE ESTIMATOR */}
          <div className="catering-planner-card">
            <div className="section-header" style={{ marginBottom: '2rem' }}>
              <div className="eyebrow-tag"><span className="dot"></span> Instant Estimator</div>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>
                Estimate Trays for Your <span className="gold-accent">Guest Count</span>
              </h2>
              <p style={{ fontSize: '0.95rem', margin: 0 }}>
                Select your party size to see recommended tray combinations and budget estimates:
              </p>
            </div>

            <div className="guest-selector-row" style={{ justifyContent: 'center' }}>
              {[15, 30, 50, 75, 100].map((num) => (
                <button
                  key={num}
                  className={`guest-btn ${calcGuests === num ? 'active' : ''}`}
                  onClick={() => setCalcGuests(num)}
                >
                  {num}{num === 100 ? '+' : ''} Guests
                </button>
              ))}
            </div>

            <div
              style={{
                background: '#101217',
                border: '1px solid var(--color-border-gold)',
                borderRadius: 'var(--radius-md)',
                padding: '1.8rem',
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1.5rem',
                textAlign: 'center',
                marginTop: '1.5rem'
              }}
            >
              <div>
                <div style={{ fontSize: '0.85rem', color: '#9CA3AF', textTransform: 'uppercase' }}>Half Trays Needed</div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#FFF', fontFamily: 'var(--font-heading)', marginTop: '4px' }}>
                  {recommendedHalf} {recommendedHalf === 1 ? 'Tray' : 'Trays'}
                </div>
              </div>
              <div>
                <div style={{ fontSize: '0.85rem', color: '#9CA3AF', textTransform: 'uppercase' }}>Full Trays Needed</div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-gold-light)', fontFamily: 'var(--font-heading)', marginTop: '4px' }}>
                  {recommendedFull} {recommendedFull === 1 ? 'Tray' : 'Trays'}
                </div>
              </div>
              <div>
                <div style={{ fontSize: '0.85rem', color: '#9CA3AF', textTransform: 'uppercase' }}>Estimated Budget</div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#34D399', fontFamily: 'var(--font-heading)', marginTop: '4px' }}>
                  ${minCost} - ${maxCost}
                </div>
              </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
              <button className="btn btn-gold" onClick={handleApplyCalcToForm}>
                📝 Fill This Estimate Into Inquiry Form Below
              </button>
            </div>
          </div>

          {/* INQUIRY FORM */}
          <div className="inquiry-form-card" id="inquiryFormSection">
            <div className="section-header" style={{ marginBottom: '2.2rem' }}>
              <div className="eyebrow-tag"><span className="dot"></span> Direct Catering Inquiry</div>
              <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
                Send Us Your <span className="gold-accent">Event Details</span>
              </h2>
              <p style={{ fontSize: '0.95rem', margin: 0 }}>
                Fill out the form below and our catering coordinator will review your request and contact you promptly.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <div>
                  <label htmlFor="cateringFullName" className="form-label">
                    Full Name <span className="req">*</span>
                  </label>
                  <input
                    type="text"
                    id="cateringFullName"
                    className="form-input"
                    placeholder="e.g. Michael Chang"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="cateringPhone" className="form-label">
                    Phone Number <span className="req">*</span>
                  </label>
                  <input
                    type="tel"
                    id="cateringPhone"
                    className="form-input"
                    placeholder="e.g. (919) 555-0199"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="cateringEmail" className="form-label">
                    Email Address <span className="req">*</span>
                  </label>
                  <input
                    type="email"
                    id="cateringEmail"
                    className="form-input"
                    placeholder="e.g. mchang@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="cateringInquiryType" className="form-label">
                    Inquiry Type <span className="req">*</span>
                  </label>
                  <select
                    id="cateringInquiryType"
                    className="form-select"
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    required
                  >
                    <option value="Catering">Catering (Party Trays)</option>
                    <option value="Large Group Order">Large Group Order</option>
                    <option value="General Question">General Question</option>
                    <option value="Feedback">Customer Feedback</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="cateringEventDate" className="form-label">
                    Event Date (Optional)
                  </label>
                  <input
                    type="date"
                    id="cateringEventDate"
                    className="form-input"
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="cateringGuestCount" className="form-label">
                    Estimated Guest Count (Optional)
                  </label>
                  <input
                    type="number"
                    id="cateringGuestCount"
                    className="form-input"
                    placeholder="e.g. 30"
                    min="1"
                    value={formData.guestCount}
                    onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                  />
                </div>

                <div className="form-group-full">
                  <label htmlFor="cateringMessage" className="form-label">
                    Message / Dish Preferences
                  </label>
                  <textarea
                    id="cateringMessage"
                    className="form-textarea"
                    placeholder="Tell us about your event, preferred dishes (e.g. Sesame Chicken, Pad Thai, Szechuan Fish), dietary restrictions, or delivery/pickup time..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <div className="form-group-full" style={{ textAlign: 'center', marginTop: '1rem' }}>
                  <button type="submit" className="btn btn-primary btn-lg" style={{ minWidth: '260px' }}>
                    Send Inquiry &rarr;
                  </button>
                  <p style={{ fontSize: '0.85rem', color: '#9CA3AF', marginTop: '12px' }}>
                    Prefer to talk now? Call us directly at{' '}
                    <a href="tel:+19194678860" style={{ color: 'var(--color-gold-light)', fontWeight: 700 }}>
                      (919) 467-8860
                    </a>.
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* CONFIRMATION MODAL */}
      <div className={`site-modal-overlay ${showModal ? 'active' : ''}`}>
        <div className="site-modal-content">
          <button className="modal-close-icon" onClick={handleCloseModal}>
            &times;
          </button>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎉</div>
            <h3 style={{ fontSize: '1.6rem', color: '#FFF', marginBottom: '0.8rem' }}>Inquiry Received!</h3>
            <p style={{ color: '#D1D5DB', fontSize: '1.05rem', marginBottom: '1.5rem' }}>
              Thank you, <strong style={{ color: 'var(--color-gold-light)' }}>{formData.fullName}</strong>! We have received your catering details. Our manager will contact you within 24 hours to confirm your dishes and timing.
            </p>
            <div
              style={{
                background: '#111319',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-md)',
                padding: '1rem',
                marginBottom: '1.5rem',
                fontSize: '0.9rem',
                color: '#9CA3AF'
              }}
            >
              Need immediate confirmation? Call{' '}
              <a href="tel:+19194678860" style={{ color: 'var(--color-gold-light)', fontWeight: 700 }}>
                (919) 467-8860
              </a>{' '}
              with your event date.
            </div>
            <button className="btn btn-primary" onClick={handleCloseModal} style={{ width: '100%' }}>
              Close Window
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
