import React from 'react';
import { useLiveHours } from '../hooks/useLiveHours';

export function AnnouncementBar() {
  const { isOpen, statusText, tooltip } = useLiveHours();

  return (
    <div className="announcement-bar">
      <div className="container announcement-inner">
        <div className="announcement-text">
          <span className="announcement-badge">Fresh & Hot</span>
          <span>
            Freshly Wok-Fired Chinese & Thai Cuisine in Morrisville | Weekday Lunch Specials Mon–Fri, 11:00 AM – 2:45 PM
          </span>
        </div>
        <div className="announcement-contact">
          <span
            className={`live-status-pill ${isOpen ? 'open' : 'closed'}`}
            title={tooltip}
          >
            <span className="status-dot"></span>
            <span className="status-text">{statusText}</span>
          </span>
          <a href="tel:+19194678860" className="announcement-phone">
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57.55 0 1 .45 1 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            (919) 467-8860
          </a>
        </div>
      </div>
    </div>
  );
}
