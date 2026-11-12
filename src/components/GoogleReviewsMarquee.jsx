import React, { useState } from 'react';
import { GOOGLE_REVIEWS, GOOGLE_REVIEWS_URL } from '../data/reviewsData';

export function GoogleReviewsMarquee() {
  const [isPaused, setIsPaused] = useState(false);

  // Divide reviews into two groups
  const row1Reviews = GOOGLE_REVIEWS.slice(0, 4);
  const row2Reviews = GOOGLE_REVIEWS.slice(4, 8);

  // Duplicate for seamless infinite loop
  const track1 = [...row1Reviews, ...row1Reviews];
  const track2 = [...row2Reviews, ...row2Reviews];

  const handlePrevNudge = () => {
    const tracks = document.querySelectorAll('.reviews-marquee-track');
    tracks.forEach((tr) => {
      tr.style.animation = 'none';
      tr.scrollLeft -= 380;
      setTimeout(() => {
        tr.style.animation = '';
      }, 1500);
    });
  };

  const handleNextNudge = () => {
    const tracks = document.querySelectorAll('.reviews-marquee-track');
    tracks.forEach((tr) => {
      tr.style.animation = 'none';
      tr.scrollLeft += 380;
      setTimeout(() => {
        tr.style.animation = '';
      }, 1500);
    });
  };

  return (
    <section className="section-py section-bg-surface" style={{ overflow: 'hidden' }}>
      <div className="container">
        <div className="section-header" style={{ marginBottom: '2rem' }}>
          <div className="eyebrow-tag">
            <span className="dot"></span> Verified Google Reviews
          </div>
          <h2 className="section-title">
            Loved by <span className="gold-accent">Morrisville Diners</span>
          </h2>
          <p className="section-desc">
            Live customer experiences straight from Google Maps. 936+ local reviews celebrating authentic Szechuan fire, Thai herbs, and generous takeout portions.
          </p>
        </div>

        {/* GOOGLE AGGREGATE RATING HEADER CARD */}
        <div className="google-reviews-header-block">
          <div className="google-brand-summary">
            {/* Google G Logo SVG */}
            <svg className="google-icon-svg" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.66v3.05h3.87c2.27-2.09 3.675-5.17 3.675-9.15z"/>
              <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.87-3.05c-1.08.72-2.45 1.16-4.06 1.16-3.13 0-5.78-2.11-6.73-4.96H1.28v3.15C3.26 21.31 7.31 24 12 24z"/>
              <path fill="#FBBC05" d="M5.27 14.24c-.25-.72-.38-1.49-.38-2.24s.14-1.52.38-2.24V6.61H1.28C.46 8.23 0 10.06 0 12s.46 3.77 1.28 5.39l3.99-3.15z"/>
              <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.69 1.28 6.61l3.99 3.15c.95-2.85 3.6-4.96 6.73-4.96z"/>
            </svg>
            <div className="google-score-box">
              <div className="google-score-row">
                <span className="google-score-num">4.4</span>
                <span className="google-stars">★★★★★</span>
              </div>
              <div className="google-count-text">
                Based on <strong>936+ verified reviews</strong> on Google Maps
              </div>
            </div>
          </div>

          <div className="google-header-actions">
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-google"
            >
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#EA4335">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              Read All Reviews on Google ↗
            </a>
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
            >
              ⭐ Write a Review
            </a>
          </div>
        </div>
      </div>

      {/* TRACK 1 (GLIDES LEFT) */}
      <div className="reviews-marquee-outer">
        <div
          className="reviews-marquee-track"
          style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
        >
          {track1.map((rev, index) => (
            <div className="google-review-card" key={`t1-${rev.id}-${index}`}>
              <div className="review-card-top">
                <div className="reviewer-profile">
                  <div className="reviewer-avatar" style={{ background: rev.avatarColor }}>
                    {rev.name[0]}
                  </div>
                  <div className="reviewer-meta">
                    <span className="reviewer-name">{rev.name}</span>
                    <span className="reviewer-badge-guide">{rev.badge}</span>
                  </div>
                </div>
                <svg className="google-watermark-icon" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.66v3.05h3.87c2.27-2.09 3.675-5.17 3.675-9.15z"/>
                  <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.87-3.05c-1.08.72-2.45 1.16-4.06 1.16-3.13 0-5.78-2.11-6.73-4.96H1.28v3.15C3.26 21.31 7.31 24 12 24z"/>
                  <path fill="#FBBC05" d="M5.27 14.24c-.25-.72-.38-1.49-.38-2.24s.14-1.52.38-2.24V6.61H1.28C.46 8.23 0 10.06 0 12s.46 3.77 1.28 5.39l3.99-3.15z"/>
                  <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.69 1.28 6.61l3.99 3.15c.95-2.85 3.6-4.96 6.73-4.96z"/>
                </svg>
              </div>
              <div className="review-stars-row">
                <div className="review-stars-svg">★★★★★</div>
                <span className="review-time-tag">Verified Google Review</span>
              </div>
              <p className="review-card-quote">"{rev.quote}"</p>
              <div className="review-card-bottom">
                <span className="review-dish-tag">{rev.dish}</span>
                <span>{rev.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* TRACK 2 (GLIDES REVERSE / RIGHT) */}
      <div className="reviews-marquee-outer" style={{ paddingTop: 0 }}>
        <div
          className="reviews-marquee-track track-reverse"
          style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
        >
          {track2.map((rev, index) => (
            <div className="google-review-card" key={`t2-${rev.id}-${index}`}>
              <div className="review-card-top">
                <div className="reviewer-profile">
                  <div className="reviewer-avatar" style={{ background: rev.avatarColor }}>
                    {rev.name[0]}
                  </div>
                  <div className="reviewer-meta">
                    <span className="reviewer-name">{rev.name}</span>
                    <span className="reviewer-badge-guide">{rev.badge}</span>
                  </div>
                </div>
                <svg className="google-watermark-icon" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.66v3.05h3.87c2.27-2.09 3.675-5.17 3.675-9.15z"/>
                  <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.87-3.05c-1.08.72-2.45 1.16-4.06 1.16-3.13 0-5.78-2.11-6.73-4.96H1.28v3.15C3.26 21.31 7.31 24 12 24z"/>
                  <path fill="#FBBC05" d="M5.27 14.24c-.25-.72-.38-1.49-.38-2.24s.14-1.52.38-2.24V6.61H1.28C.46 8.23 0 10.06 0 12s.46 3.77 1.28 5.39l3.99-3.15z"/>
                  <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.69 1.28 6.61l3.99 3.15c.95-2.85 3.6-4.96 6.73-4.96z"/>
                </svg>
              </div>
              <div className="review-stars-row">
                <div className="review-stars-svg">★★★★★</div>
                <span className="review-time-tag">Verified Google Review</span>
              </div>
              <p className="review-card-quote">"{rev.quote}"</p>
              <div className="review-card-bottom">
                <span className="review-dish-tag">{rev.dish}</span>
                <span>{rev.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CONTROLS */}
      <div className="container">
        <div className="reviews-control-bar">
          <div className="slider-status-hint">
            <span
              className="pulse-dot"
              style={{
                background: isPaused ? '#F59E0B' : '#10B981',
                boxShadow: isPaused ? '0 0 8px #F59E0B' : '0 0 8px #10B981'
              }}
            ></span>
            {isPaused ? 'Paused (Hover off or click Play to glide)' : 'Live Running Slides (Hover card to pause)'}
          </div>
          <div className="slider-action-btns">
            <button
              className="btn btn-outline btn-sm"
              onClick={() => setIsPaused(!isPaused)}
              style={{ padding: '6px 14px', fontSize: '0.8rem' }}
            >
              {isPaused ? '▶ Play' : '⏸ Pause'}
            </button>
            <button
              className="slider-btn-round"
              onClick={handlePrevNudge}
              aria-label="Previous Reviews"
              title="Step Previous"
            >
              &#8592;
            </button>
            <button
              className="slider-btn-round"
              onClick={handleNextNudge}
              aria-label="Next Reviews"
              title="Step Next"
            >
              &#8594;
            </button>
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold btn-sm"
            >
              Read All 936+ on Google Maps ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
