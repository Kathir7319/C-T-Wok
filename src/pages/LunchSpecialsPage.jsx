import React from 'react';
import { Link } from 'react-router-dom';
import { MENU_ITEMS } from '../data/menuData';
import { useOrder } from '../context/OrderContext';
import { GOOGLE_REVIEWS_URL } from '../data/reviewsData';

export function LunchSpecialsPage() {
  const { addToOrder } = useOrder();
  const lunchDishes = MENU_ITEMS.filter((item) => item.category === 'lunch');

  return (
    <main>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container">
          <div className="lunch-clock-hero-badge">
            <span>⏰ Mon – Fri &nbsp;|&nbsp; 11:00 AM – 2:45 PM</span>
          </div>
          <h1 className="page-hero-title">
            Weekday <span className="gold-accent">Lunch Specials</span>
          </h1>
          <p className="page-hero-desc">
            Fast, satisfying midday favorites cooked fresh to order. Generous portions, lightning-fast turnaround, and unbeatable value for Morrisville professionals, families, and Triangle commuters.
          </p>
        </div>
      </section>

      {/* COMBO PERKS */}
      <section className="section-py" style={{ paddingBottom: '2rem' }}>
        <div className="container">
          <div className="lunch-combo-perks">
            <div className="perk-card">
              <div className="perk-icon">🍚</div>
              <h4>Choice of Rice</h4>
              <p style={{ fontSize: '0.9rem', margin: 0, color: '#A0A5B5' }}>
                Complimentary fragrant Steamed Jasmine White Rice or savory seasoned Pork Fried Rice with every entree combo.
              </p>
            </div>

            <div className="perk-card">
              <div className="perk-icon">🥣</div>
              <h4>Choice of Starter Side</h4>
              <p style={{ fontSize: '0.9rem', margin: 0, color: '#A0A5B5' }}>
                Choose either a golden Crispy Vegetable Spring Roll, comforting Egg Drop Soup, or traditional Hot & Sour Soup.
              </p>
            </div>

            <div className="perk-card">
              <div className="perk-icon">⚡</div>
              <h4>Speed & Freshness</h4>
              <p style={{ fontSize: '0.9rem', margin: 0, color: '#A0A5B5' }}>
                Ready in 10–15 minutes! Call ahead at (919) 467-8860 and your hot lunch box will be packed and waiting at the counter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LUNCH DISHES LIST */}
      <section className="section-py section-bg-surface">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow-tag"><span className="dot"></span> Midday Menu</div>
            <h2 className="section-title">
              Popular <span className="gold-accent">Lunch Combos</span>
            </h2>
            <p className="section-desc">Each entree below is served complete with your choice of rice and starter side.</p>
          </div>

          <div className="grid-3">
            {lunchDishes.map((dish) => (
              <div className="dish-card" key={dish.id}>
                <div className="dish-image-wrapper">
                  <img src={dish.image} alt={dish.title} className="dish-img" loading="lazy" />
                  <div className="dish-image-overlay"></div>
                  <span className="dish-tag-cuisine szechuan">Lunch Special</span>
                  {dish.spiceLevel === 1 && (
                    <span className="dish-spice-badge" title="Mild Spicy">🌶️ Mild</span>
                  )}
                  {dish.spiceLevel === 2 && (
                    <span className="dish-spice-badge" title="Medium Spicy">🌶️🌶️ Medium</span>
                  )}
                </div>
                <div className="dish-body">
                  <div className="dish-header-row">
                    <h3 className="dish-title">{dish.title}</h3>
                    <div className="dish-price">${dish.price.toFixed(2)}</div>
                  </div>
                  <div className="dish-chinese-name">{dish.chineseName}</div>
                  <p className="dish-desc">{dish.description}</p>
                  <div className="dish-footer-row">
                    <div className="dish-features">
                      {dish.dietary.map((d, i) => (
                        <span className="dish-pill" key={i}>{d}</span>
                      ))}
                    </div>
                    <button
                      className="dish-add-btn"
                      onClick={() => addToOrder(dish)}
                    >
                      <span>+</span> Add to Call List
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* GOOGLE REVIEW CALLOUT FOR LUNCH */}
          <div
            style={{
              marginTop: '3.5rem',
              background: 'rgba(22, 24, 31, 0.95)',
              border: '1px dashed var(--color-border-gold)',
              borderRadius: 'var(--radius-md)',
              padding: '1.5rem 2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1.5rem',
              flexWrap: 'wrap'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <span style={{ fontSize: '1.8rem' }}>⭐</span>
              <div>
                <h4 style={{ color: '#FFF', margin: 0, fontSize: '1.1rem' }}>
                  "Best lunch special in Morrisville under $12!"
                </h4>
                <p style={{ fontSize: '0.88rem', color: '#A0A5B5', margin: '2px 0 0 0' }}>
                  Rated 4.4★ by 936+ Google diners. Freshly wok-fired in under 15 minutes.
                </p>
              </div>
            </div>
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-sm"
            >
              Read Google Reviews ↗
            </a>
          </div>

          {/* OFFICE LUNCH ORDER CALLOUT */}
          <div
            style={{
              marginTop: '4.5rem',
              background: 'linear-gradient(135deg, #1A1C25 0%, #121319 100%)',
              border: '1px solid var(--color-border-gold)',
              borderRadius: 'var(--radius-lg)',
              padding: '3rem',
              textAlign: 'center'
            }}
          >
            <h3 style={{ fontSize: '1.8rem', color: '#FFF', marginBottom: '0.8rem' }}>
              Ordering Lunch for the Whole Office?
            </h3>
            <p style={{ color: '#D1D5DB', fontSize: '1.05rem', maxWidth: '680px', margin: '0 auto 2rem auto' }}>
              Whether you need 10 individual boxed lunches or several catering party trays for your team meeting, C&T Wok ensures your food arrives hot, labeled, and on time.
            </p>
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/catering" className="btn btn-gold btn-lg">
                View Catering Trays
              </Link>
              <a href="tel:+19194678860" className="btn btn-primary btn-lg">
                Call to Order: (919) 467-8860
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
