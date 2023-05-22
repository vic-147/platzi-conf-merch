import React from 'react';
import '../style/components/Checkout.css';

function Checkout() {
  return (
    <div className="Checkout">
      <div className="Checkout-container">
        <h3>Lista de Pedidos</h3>
        <div className="Checkout-item">
          <div className="Checkout-element">
            <h4>ITEM name</h4>
            <span>$10</span>
          </div>
          <button type="button">Eliminar</button>
        </div>
      </div>
      <div className="Checkout-sidebar">
        <h3>Precio Total: $ 3</h3>
        <button type="button">Continuar pedido</button>
      </div>
    </div>
  );
}

export default Checkout;
