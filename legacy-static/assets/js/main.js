/**
 * C&T WOK - CORE MAIN JAVASCRIPT
 * Authentic Szechuan, Chinese & Thai Cuisine | Morrisville, NC
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initStickyHeader();
  initLiveHoursStatus();
  highlightTodayHours();
  initOrderTray();
  initReviewsSlider();
  const yearEl = document.getElementById('currentYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

/* --------------------------------------------------------------------------
   1. MOBILE NAVIGATION DRAWER
   -------------------------------------------------------------------------- */
function initMobileNav() {
  const openBtn = document.getElementById('mobileMenuOpen');
  const closeBtn = document.getElementById('mobileMenuClose');
  const drawer = document.getElementById('mobileNavDrawer');
  const overlay = document.getElementById('mobileNavOverlay');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  if (!drawer || !overlay) return;

  function openDrawer() {
    drawer.classList.add('open');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.classList.remove('open');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (openBtn) openBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (overlay) overlay.addEventListener('click', closeDrawer);

  navLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      closeDrawer();
    }
  });
}

/* --------------------------------------------------------------------------
   2. STICKY HEADER SHADOW ON SCROLL
   -------------------------------------------------------------------------- */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

/* --------------------------------------------------------------------------
   3. LIVE RESTAURANT OPEN/CLOSED HOURS STATUS (Morrisville, NC - US Eastern)
   Hours:
   Mon-Thu: 11:00 AM - 2:45 PM & 4:30 PM - 9:30 PM
   Fri-Sat: 11:00 AM - 2:45 PM & 4:30 PM - 9:45 PM
   Sun: Closed
   -------------------------------------------------------------------------- */
function initLiveHoursStatus() {
  const statusPills = document.querySelectorAll('.live-status-pill');
  if (!statusPills.length) return;

  // Compute status based on US Eastern Time (ET)
  const now = new Date();
  
  // Format to Morrisville local time
  const options = { timeZone: 'America/New_York', hour12: false, weekday: 'short', hour: '2-digit', minute: '2-digit' };
  const formatter = new Intl.DateTimeFormat('en-US', options);
  const parts = formatter.formatToParts(now);
  
  let dayName = '';
  let hour = 0;
  let minute = 0;

  parts.forEach(p => {
    if (p.type === 'weekday') dayName = p.value;
    if (p.type === 'hour') hour = parseInt(p.value, 10);
    if (p.type === 'minute') minute = parseInt(p.value, 10);
  });

  const timeVal = hour * 60 + minute; // minutes since midnight

  // Define Schedule in minutes
  // Lunch: 11:00 (660) to 14:45 (885)
  // Dinner Mon-Thu: 16:30 (990) to 21:30 (1290)
  // Dinner Fri-Sat: 16:30 (990) to 21:45 (1305)
  
  let isOpen = false;
  let statusText = '';

  if (dayName === 'Sun') {
    isOpen = false;
    statusText = 'Closed Today (Sunday) • Opens Mon 11 AM';
  } else if (dayName === 'Fri' || dayName === 'Sat') {
    if (timeVal >= 660 && timeVal <= 885) {
      isOpen = true;
      statusText = 'Open Now (Lunch) • Closes 2:45 PM';
    } else if (timeVal >= 990 && timeVal <= 1305) {
      isOpen = true;
      statusText = 'Open Now (Dinner) • Closes 9:45 PM';
    } else if (timeVal < 660) {
      isOpen = false;
      statusText = 'Closed • Opens Today at 11:00 AM';
    } else if (timeVal > 885 && timeVal < 990) {
      isOpen = false;
      statusText = 'Midday Break • Dinner Starts 4:30 PM';
    } else {
      isOpen = false;
      statusText = dayName === 'Sat' ? 'Closed • Reopens Monday 11 AM' : 'Closed • Opens Saturday 11 AM';
    }
  } else {
    // Mon, Tue, Wed, Thu
    if (timeVal >= 660 && timeVal <= 885) {
      isOpen = true;
      statusText = 'Open Now (Lunch) • Closes 2:45 PM';
    } else if (timeVal >= 990 && timeVal <= 1290) {
      isOpen = true;
      statusText = 'Open Now (Dinner) • Closes 9:30 PM';
    } else if (timeVal < 660) {
      isOpen = false;
      statusText = 'Closed • Opens Today at 11:00 AM';
    } else if (timeVal > 885 && timeVal < 990) {
      isOpen = false;
      statusText = 'Midday Break • Dinner Starts 4:30 PM';
    } else {
      isOpen = false;
      statusText = 'Closed • Opens Tomorrow at 11:00 AM';
    }
  }

  statusPills.forEach(pill => {
    pill.classList.remove('open', 'closed');
    pill.classList.add(isOpen ? 'open' : 'closed');
    const label = pill.querySelector('.status-text');
    if (label) {
      label.textContent = isOpen ? 'Open Now' : 'Closed Now';
    }
    pill.setAttribute('title', statusText);
  });
}

/* --------------------------------------------------------------------------
   4. HIGHLIGHT TODAY'S HOURS IN FOOTER TABLE
   -------------------------------------------------------------------------- */
function highlightTodayHours() {
  const options = { timeZone: 'America/New_York', weekday: 'short' };
  const dayStr = new Intl.DateTimeFormat('en-US', options).format(new Date());

  const rows = document.querySelectorAll('.hours-row');
  rows.forEach(row => {
    const dayData = row.getAttribute('data-day');
    if (dayData && dayData.includes(dayStr)) {
      row.classList.add('today');
      const badge = document.createElement('span');
      badge.textContent = ' (Today)';
      badge.style.fontSize = '0.75rem';
      badge.style.color = '#F3D089';
      const dayEl = row.querySelector('.hours-day');
      if (dayEl) dayEl.appendChild(badge);
    }
  });
}

/* --------------------------------------------------------------------------
   5. ORDER PICKUP TRAY & CART HELPER (TAKE-OUT PHONE HELPER)
   -------------------------------------------------------------------------- */
const ORDER_STORAGE_KEY = 'ct_wok_order_tray';

function getStoredOrder() {
  try {
    return JSON.parse(localStorage.getItem(ORDER_STORAGE_KEY)) || [];
  } catch (e) {
    return [];
  }
}

function saveOrder(items) {
  try {
    localStorage.setItem(ORDER_STORAGE_KEY, JSON.stringify(items));
    updateTrayUI();
  } catch (e) {}
}

function initOrderTray() {
  updateTrayUI();

  const toggleBtn = document.getElementById('orderTrayToggle');
  const drawer = document.getElementById('orderTrayDrawer');
  const closeBtn = document.getElementById('closeTrayBtn');
  const clearBtn = document.getElementById('clearTrayBtn');
  const copyBtn = document.getElementById('copyTrayBtn');

  if (toggleBtn && drawer) {
    toggleBtn.addEventListener('click', () => {
      drawer.classList.toggle('open');
    });
  }

  if (closeBtn && drawer) {
    closeBtn.addEventListener('click', () => {
      drawer.classList.remove('open');
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      saveOrder([]);
      showToast('Order list cleared');
    });
  }

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const items = getStoredOrder();
      if (!items.length) {
        showToast('Your order tray is empty!');
        return;
      }

      let summary = "C&T Wok Takeout Order:\n";
      let total = 0;
      items.forEach(it => {
        const itemTotal = it.price * it.qty;
        total += itemTotal;
        summary += `• ${it.qty}x ${it.title} ($${itemTotal.toFixed(2)})\n`;
      });
      summary += `Estimated Subtotal: $${total.toFixed(2)}\nReady to call (919) 467-8860`;

      navigator.clipboard.writeText(summary).then(() => {
        showToast('📋 Order copied! Ready to read to restaurant.');
      }).catch(() => {
        showToast('Items ready in your tray.');
      });
    });
  }
}

window.addToOrderTray = function(dish) {
  const items = getStoredOrder();
  const existingIndex = items.findIndex(it => it.id === dish.id);

  if (existingIndex > -1) {
    items[existingIndex].qty += 1;
  } else {
    items.push({
      id: dish.id,
      title: dish.title,
      price: parseFloat(dish.price),
      qty: 1
    });
  }

  saveOrder(items);
  showToast(`Added ${dish.title} to Order List!`);
  
  // Show tray drawer briefly
  const drawer = document.getElementById('orderTrayDrawer');
  if (drawer) drawer.classList.add('open');
};

function updateTrayUI() {
  const items = getStoredOrder();
  const countEl = document.getElementById('orderTrayCount');
  const badgeWrap = document.getElementById('orderTrayToggle');
  const listEl = document.getElementById('trayItemsList');
  const totalEl = document.getElementById('trayTotalPrice');

  const totalQty = items.reduce((sum, it) => sum + it.qty, 0);
  const totalPrice = items.reduce((sum, it) => sum + (it.price * it.qty), 0);

  if (countEl) countEl.textContent = totalQty;
  if (totalEl) totalEl.textContent = `$${totalPrice.toFixed(2)}`;

  if (badgeWrap) {
    badgeWrap.style.display = totalQty > 0 ? 'flex' : 'none';
  }

  if (listEl) {
    if (!items.length) {
      listEl.innerHTML = `
        <div style="text-align: center; padding: 2rem 1rem; color: #8F95A5;">
          <p style="margin-bottom: 0.5rem; font-size: 1.5rem;">🥡</p>
          <p style="margin: 0; font-size: 0.9rem;">Your takeout tray is currently empty.</p>
          <p style="font-size: 0.8rem; color: #D4AF37; margin-top: 4px;">Click "Add to Call Order" on any dish!</p>
        </div>
      `;
      return;
    }

    listEl.innerHTML = items.map(item => `
      <div class="tray-item">
        <div class="tray-item-info">
          <h4>${item.title}</h4>
          <span>$${item.price.toFixed(2)} each</span>
        </div>
        <div class="tray-item-actions">
          <button class="tray-qty-btn" onclick="modifyItemQty('${item.id}', -1)" title="Decrease">-</button>
          <span style="font-size: 0.9rem; font-weight: 700; min-width: 18px; text-align: center;">${item.qty}</span>
          <button class="tray-qty-btn" onclick="modifyItemQty('${item.id}', 1)" title="Increase">+</button>
        </div>
      </div>
    `).join('');
  }
}

window.modifyItemQty = function(id, delta) {
  let items = getStoredOrder();
  const index = items.findIndex(it => it.id === id);
  if (index > -1) {
    items[index].qty += delta;
    if (items[index].qty <= 0) {
      items.splice(index, 1);
    }
  }
  saveOrder(items);
};

/* --------------------------------------------------------------------------
   6. TOAST NOTIFICATIONS
   -------------------------------------------------------------------------- */
window.showToast = function(msg) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>✨</span><span>${msg}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
};

/* --------------------------------------------------------------------------
   7. GOOGLE REVIEWS RUNNING SLIDES CONTROLLER
   -------------------------------------------------------------------------- */
function initReviewsSlider() {
  const tracks = document.querySelectorAll('.reviews-marquee-track');
  const pauseBtn = document.getElementById('toggleMarqueePause');
  const prevBtn = document.getElementById('sliderPrevBtn');
  const nextBtn = document.getElementById('sliderNextBtn');
  const statusHint = document.getElementById('sliderStatusHint');

  if (!tracks.length) return;

  let isPaused = false;

  function setPausedState(paused) {
    isPaused = paused;
    tracks.forEach(tr => {
      tr.style.animationPlayState = isPaused ? 'paused' : 'running';
    });
    if (pauseBtn) {
      pauseBtn.innerHTML = isPaused ? '▶ Play' : '⏸ Pause';
      pauseBtn.setAttribute('title', isPaused ? 'Resume auto-scroll' : 'Pause auto-scroll');
    }
    if (statusHint) {
      statusHint.innerHTML = isPaused 
        ? '<span class="pulse-dot" style="background: #F59E0B; box-shadow: 0 0 8px #F59E0B;"></span> Paused (Click Play or drag cards)' 
        : '<span class="pulse-dot"></span> Live Running Slides (Hover card to pause)';
    }
  }

  if (pauseBtn) {
    pauseBtn.addEventListener('click', () => {
      setPausedState(!isPaused);
    });
  }

  // Prev / Next button manual step nudge
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      tracks.forEach(tr => {
        const curTransform = window.getComputedStyle(tr).transform;
        // Step nudge
        tr.style.animation = 'none';
        tr.scrollLeft -= 380;
        setTimeout(() => {
          tr.style.animation = '';
        }, 1500);
      });
      showToast('Viewing previous reviews');
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      tracks.forEach(tr => {
        tr.style.animation = 'none';
        tr.scrollLeft += 380;
        setTimeout(() => {
          tr.style.animation = '';
        }, 1500);
      });
      showToast('Viewing next reviews');
    });
  }
}

