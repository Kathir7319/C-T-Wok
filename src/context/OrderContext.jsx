import React, { createContext, useContext, useState, useEffect } from 'react';

const OrderContext = createContext();

const STORAGE_KEY = 'ct_wok_order_tray';

export function OrderProvider({ children }) {
  const [orderItems, setOrderItems] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  const [isTrayOpen, setIsTrayOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(orderItems));
    } catch (e) {}
  }, [orderItems]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 3000);
  };

  const addToOrder = (dish) => {
    setOrderItems((prev) => {
      const idx = prev.findIndex((item) => item.id === dish.id);
      if (idx > -1) {
        const copy = [...prev];
        copy[idx].qty += 1;
        return copy;
      }
      return [...prev, { id: dish.id, title: dish.title, price: dish.price, qty: 1 }];
    });
    showToast(`Added ${dish.title} to Order List!`);
    setIsTrayOpen(true);
  };

  const modifyQty = (id, delta) => {
    setOrderItems((prev) => {
      return prev
        .map((item) => {
          if (item.id === id) {
            return { ...item, qty: item.qty + delta };
          }
          return item;
        })
        .filter((item) => item.qty > 0);
    });
  };

  const clearOrder = () => {
    setOrderItems([]);
    showToast('Takeout order list cleared');
  };

  const totalQty = orderItems.reduce((acc, item) => acc + item.qty, 0);
  const totalPrice = orderItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  const copyOrderSummary = () => {
    if (!orderItems.length) {
      showToast('Your order tray is empty!');
      return;
    }
    let summary = "C&T Wok Takeout Order:\n";
    orderItems.forEach((it) => {
      summary += `• ${it.qty}x ${it.title} ($${(it.price * it.qty).toFixed(2)})\n`;
    });
    summary += `Estimated Subtotal: $${totalPrice.toFixed(2)}\nReady to call (919) 467-8860`;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(summary).then(() => {
        showToast('📋 Order copied! Ready to read over phone.');
      }).catch(() => {
        showToast('Items ready in your tray.');
      });
    } else {
      showToast('Order ready in tray.');
    }
  };

  return (
    <OrderContext.Provider
      value={{
        orderItems,
        totalQty,
        totalPrice,
        isTrayOpen,
        setIsTrayOpen,
        addToOrder,
        modifyQty,
        clearOrder,
        copyOrderSummary,
        toastMessage,
        showToast
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}

export function useOrder() {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrder must be used within an OrderProvider');
  }
  return context;
}
