import React from 'react';
import '../style/components/Payment.css';

function Payment() {
  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen de pedido</h3>
        <div className="Payment-button">Boton de pago conpaypel</div>
      </div>
    </div>
  );
}

export default Payment;
