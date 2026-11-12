import React from 'react';
import { Link } from 'react-router-dom';

export function MobileStickyBar() {
  return (
    <div className="mobile-sticky-action-bar">
      <a href="tel:+19194678860" className="btn btn-primary">
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57.55 0 1 .45 1 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
        </svg>
        Tap to Call (919) 467-8860
      </a>
      <Link to="/menu" className="btn btn-gold">
        View Menu
      </Link>
    </div>
  );
}
