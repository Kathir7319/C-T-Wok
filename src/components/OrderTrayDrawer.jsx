import React from 'react';
import { useOrder } from '../context/OrderContext';

export function OrderTrayDrawer() {
  const {
    orderItems,
    totalQty,
    totalPrice,
    isTrayOpen,
    setIsTrayOpen,
    modifyQty,
    clearOrder,
    copyOrderSummary
  } = useOrder();

  return (
    <>
      {/* Floating Pill Toggle Button (Visible when items > 0) */}
      {totalQty > 0 && (
        <div
          className="order-tray-pill"
          onClick={() => setIsTrayOpen(!isTrayOpen)}
          title="View items you want to order by phone"
        >
          <span>🥡 Call Order List</span>
          <span className="order-tray-count">{totalQty}</span>
        </div>
      )}

      {/* Slide-Up Takeout Drawer */}
      <div className={`order-tray-drawer ${isTrayOpen ? 'open' : ''}`}>
        <div className="tray-header">
          <h3>🥡 Your Takeout Order List</h3>
          <button
            className="mobile-close-btn"
            onClick={() => setIsTrayOpen(false)}
            style={{ width: '28px', height: '28px' }}
          >
            &times;
          </button>
        </div>

        <div className="tray-items-list">
          {orderItems.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '2rem 1rem', color: '#8F95A5' }}>
              <p style={{ marginBottom: '0.5rem', fontSize: '1.5rem' }}>🥡</p>
              <p style={{ margin: 0, fontSize: '0.9rem' }}>Your takeout tray is currently empty.</p>
              <p style={{ fontSize: '0.8rem', color: '#D4AF37', marginTop: '4px' }}>
                Click "+ Add to Call List" on any dish!
              </p>
            </div>
          ) : (
            orderItems.map((item) => (
              <div className="tray-item" key={item.id}>
                <div className="tray-item-info">
                  <h4>{item.title}</h4>
                  <span>${item.price.toFixed(2)} each</span>
                </div>
                <div className="tray-item-actions">
                  <button
                    className="tray-qty-btn"
                    onClick={() => modifyQty(item.id, -1)}
                    title="Decrease"
                  >
                    -
                  </button>
                  <span style={{ fontSize: '0.9rem', fontWeight: 700, minWidth: '18px', textAlign: 'center' }}>
                    {item.qty}
                  </span>
                  <button
                    className="tray-qty-btn"
                    onClick={() => modifyQty(item.id, 1)}
                    title="Increase"
                  >
                    +
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {orderItems.length > 0 && (
          <div className="tray-footer">
            <div className="tray-total-row">
              <span>Est. Subtotal:</span>
              <span className="tray-total-price">${totalPrice.toFixed(2)}</span>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                className="btn btn-outline btn-sm"
                onClick={clearOrder}
                style={{ flex: 1 }}
              >
                Clear
              </button>
              <button
                className="btn btn-gold btn-sm"
                onClick={copyOrderSummary}
                style={{ flex: 2 }}
              >
                📋 Copy Order
              </button>
            </div>
            <a href="tel:+19194678860" className="btn btn-primary" style={{ width: '100%' }}>
              📞 Call (919) 467-8860 to Place Order
            </a>
          </div>
        )}
      </div>
    </>
  );
}
