/**
 * C&T WOK - CATERING & GROUP ORDERS CALCULATOR
 * Authentic Szechuan, Chinese & Thai Cuisine | Morrisville, NC
 */

document.addEventListener('DOMContentLoaded', () => {
  initCateringCalculator();
  initCateringForm();
});

function initCateringCalculator() {
  const guestBtns = document.querySelectorAll('.guest-btn');
  const countDisplay = document.getElementById('calcGuestCount');
  const halfTrayCount = document.getElementById('calcHalfTrays');
  const fullTrayCount = document.getElementById('calcFullTrays');
  const estCost = document.getElementById('calcEstCost');
  const applyBtn = document.getElementById('applyCalcToForm');

  if (!guestBtns.length) return;

  function updateCalculation(guests) {
    if (countDisplay) countDisplay.textContent = guests;

    // Half tray serves 7 people average, Full tray serves 14 people average
    let recommendedFull = Math.floor(guests / 14);
    let remainder = guests % 14;
    let recommendedHalf = remainder > 0 ? (remainder <= 7 ? 1 : 2) : 0;

    if (recommendedFull === 0 && recommendedHalf === 0) recommendedHalf = 2;

    if (halfTrayCount) halfTrayCount.textContent = `${recommendedHalf} Trays`;
    if (fullTrayCount) fullTrayCount.textContent = `${recommendedFull} Trays`;

    // Pricing estimation: Half tray avg $65, Full tray avg $120
    const minCost = (recommendedHalf * 55) + (recommendedFull * 105);
    const maxCost = (recommendedHalf * 75) + (recommendedFull * 135);

    if (estCost) {
      estCost.textContent = `$${minCost} - $${maxCost}`;
    }

    if (applyBtn) {
      applyBtn.setAttribute('data-summary', `${guests} Guests (${recommendedFull} Full Trays, ${recommendedHalf} Half Trays, Est. $${minCost}-$${maxCost})`);
    }
  }

  guestBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      guestBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const guests = parseInt(btn.getAttribute('data-guests'), 10) || 30;
      updateCalculation(guests);
    });
  });

  if (applyBtn) {
    applyBtn.addEventListener('click', () => {
      const summary = applyBtn.getAttribute('data-summary');
      const msgField = document.getElementById('cateringMessage');
      const guestField = document.getElementById('cateringGuestCount');
      const activeBtn = document.querySelector('.guest-btn.active');
      
      if (guestField && activeBtn) {
        guestField.value = activeBtn.getAttribute('data-guests');
      }

      if (msgField && summary) {
        msgField.value = `Hi C&T Wok team, I would like to request catering for approximately ${summary}. Please let me know dish recommendations and availability.`;
        msgField.scrollIntoView({ behavior: 'smooth', block: 'center' });
        msgField.focus();
        showToast('✅ Catering estimate added to inquiry form below!');
      }
    });
  }

  // Initial calculation for 30 guests
  updateCalculation(30);
}

function initCateringForm() {
  const form = document.getElementById('cateringInquiryForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const fullName = document.getElementById('cateringFullName')?.value.trim();
    const phone = document.getElementById('cateringPhone')?.value.trim();
    const email = document.getElementById('cateringEmail')?.value.trim();

    if (!fullName || !phone || !email) {
      alert('Please fill in your Full Name, Phone Number, and Email Address.');
      return;
    }

    // Show confirmation modal
    const modal = document.getElementById('submissionSuccessModal');
    if (modal) {
      const customerNameSlot = document.getElementById('modalCustomerName');
      if (customerNameSlot) customerNameSlot.textContent = fullName;
      modal.classList.add('active');
    } else {
      showToast(`Thank you ${fullName}! Your inquiry has been sent.`);
      form.reset();
    }
  });

  const closeModalBtn = document.getElementById('closeModalBtn');
  const modal = document.getElementById('submissionSuccessModal');
  if (closeModalBtn && modal) {
    closeModalBtn.addEventListener('click', () => {
      modal.classList.remove('active');
      form.reset();
    });
  }
}
