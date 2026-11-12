import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MENU_ITEMS } from '../data/menuData';
import { useOrder } from '../context/OrderContext';

export function MenuPage() {
  const [searchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const { addToOrder } = useOrder();

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      setActiveCategory(cat);
    }
  }, [searchParams]);

  const filteredDishes = MENU_ITEMS.filter((dish) => {
    const matchesCat = activeCategory === 'all' || dish.category === activeCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      dish.title.toLowerCase().includes(q) ||
      dish.chineseName.toLowerCase().includes(q) ||
      dish.description.toLowerCase().includes(q);

    return matchesCat && matchesSearch;
  });

  return (
    <main>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow-tag"><span className="dot"></span> Cooked Fresh to Order</div>
          <h1 className="page-hero-title">Our Complete <span className="gold-accent">Culinary Menu</span></h1>
          <p className="page-hero-desc">
            Explore authentic Szechuan specialties, comforting Chinese wok classics, fragrant Thai stir-fries, and weekday lunch deals. Click "+ Add to Call List" on any dish to build your takeout phone order!
          </p>
        </div>
      </section>

      {/* MAIN MENU CONTENT */}
      <div className="section-py">
        <div className="container">
          {/* TOOLBAR */}
          <div className="menu-toolbar">
            <div className="menu-search-row">
              <div className="search-input-wrapper">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  className="menu-search-input"
                  placeholder="Search dishes (e.g., Coffee Chicken, Boiled Fish, Sesame, Pad Thai)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Search menu items"
                />
              </div>
              <div style={{ fontSize: '0.88rem', color: '#9CA3AF' }}>
                Call to order: <a href="tel:+19194678860" style={{ color: 'var(--color-gold-light)', fontWeight: 700 }}>(919) 467-8860</a>
              </div>
            </div>

            {/* CATEGORY FILTER PILLS */}
            <div className="filter-pills-row" role="tablist">
              <button
                className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
                onClick={() => setActiveCategory('all')}
              >
                All Dishes ({MENU_ITEMS.length})
              </button>
              <button
                className={`filter-btn ${activeCategory === 'szechuan' ? 'active' : ''}`}
                onClick={() => setActiveCategory('szechuan')}
              >
                🌶️ Authentic Szechuan
              </button>
              <button
                className={`filter-btn ${activeCategory === 'chinese' ? 'active' : ''}`}
                onClick={() => setActiveCategory('chinese')}
              >
                🥢 Traditional Chinese
              </button>
              <button
                className={`filter-btn ${activeCategory === 'thai' ? 'active' : ''}`}
                onClick={() => setActiveCategory('thai')}
              >
                🌿 Vibrant Thai
              </button>
              <button
                className={`filter-btn ${activeCategory === 'lunch' ? 'active' : ''}`}
                onClick={() => setActiveCategory('lunch')}
              >
                🍱 Lunch Specials
              </button>
              <button
                className={`filter-btn ${activeCategory === 'appetizers' ? 'active' : ''}`}
                onClick={() => setActiveCategory('appetizers')}
              >
                🥟 Starters & Dim Sum
              </button>
            </div>
          </div>

          {/* SPICE HEAT GUIDE */}
          <div className="spice-legend-banner">
            <span style={{ fontWeight: 700, color: '#FFF' }}>Spice Heat Guide:</span>
            <div className="spice-legend-items">
              <div className="spice-legend-item">
                <span>🌶️</span>
                <span><strong>Mild:</strong> Pleasant, gentle warmth</span>
              </div>
              <div className="spice-legend-item">
                <span>🌶️🌶️</span>
                <span><strong>Medium:</strong> Authentic kick & aromatics</span>
              </div>
              <div className="spice-legend-item">
                <span>🌶️🌶️🌶️</span>
                <span><strong>Fiery:</strong> Genuine Chengdu numbing Szechuan heat</span>
              </div>
            </div>
            <span style={{ color: 'var(--color-gold-light)', fontSize: '0.82rem' }}>
              * Spice levels can be customized upon request!
            </span>
          </div>

          {/* DISHES GRID */}
          <div className="grid-3">
            {filteredDishes.length === 0 ? (
              <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '4rem 1rem', color: '#8F95A5' }}>
                <p style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🔍</p>
                <h3 style={{ color: '#FFF', marginBottom: '0.5rem' }}>No dishes match "{searchQuery}"</h3>
                <p>Try searching for another dish like "Coffee Chicken", "Szechuan", "Sesame", or "Curry".</p>
              </div>
            ) : (
              filteredDishes.map((dish) => {
                let cuisineClass = dish.category === 'szechuan' ? 'szechuan' : (dish.category === 'thai' ? 'thai' : '');

                return (
                  <div className="dish-card" key={dish.id}>
                    <div className="dish-image-wrapper">
                      <img src={dish.image} alt={dish.title} className="dish-img" loading="lazy" />
                      <div className="dish-image-overlay"></div>
                      <span className={`dish-tag-cuisine ${cuisineClass}`}>
                        {dish.category.toUpperCase()}
                      </span>
                      {dish.spiceLevel === 1 && (
                        <span className="dish-spice-badge" title="Mild Spicy">🌶️ Mild</span>
                      )}
                      {dish.spiceLevel === 2 && (
                        <span className="dish-spice-badge" title="Medium Spicy">🌶️🌶️ Medium</span>
                      )}
                      {dish.spiceLevel === 3 && (
                        <span className="dish-spice-badge" title="Fiery Authentic Szechuan">🌶️🌶️🌶️ Fiery</span>
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
                );
              })
            )}
          </div>

          {/* CUSTOM REQUESTS CALLOUT */}
          <div
            style={{
              marginTop: '4.5rem',
              background: 'var(--color-bg-surface)',
              border: '1px solid var(--color-border-gold)',
              borderRadius: 'var(--radius-lg)',
              padding: '2.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '2rem',
              flexWrap: 'wrap'
            }}
          >
            <div>
              <h3 style={{ color: '#FFF', marginBottom: '0.5rem', fontSize: '1.4rem' }}>
                Have Dietary Preferences or Custom Requests?
              </h3>
              <p style={{ color: 'var(--color-text-muted)', margin: 0, maxWidth: '650px' }}>
                Every dish is cooked individually in our woks. We are happy to accommodate gluten sensitivities, vegetarian diets, or mild/extra spice preferences. Just tell us when you call!
              </p>
            </div>
            <a href="tel:+19194678860" className="btn btn-primary btn-lg">
              📞 Call (919) 467-8860
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
