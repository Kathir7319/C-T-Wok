import React from 'react';
import { useOrder } from '../context/OrderContext';

export function Toast() {
  const { toastMessage } = useOrder();

  if (!toastMessage) return null;

  return (
    <div className="toast-container">
      <div className="toast">
        <span>✨</span>
        <span>{toastMessage}</span>
      </div>
    </div>
  );
}
