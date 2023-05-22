import React from 'react';
import '../style/components/Information.css';

function Information() {
  return (
    <div className="Information">
      <div className="Information-container">
        <div className="Information-head">
          <h2>Informacion de contacto:</h2>
        </div>

        <div className="Information-form">
          <form action="">
            <input type="text" placeholder="Nombre completo" name="name" />
            <input type="text" placeholder="Correo electronico" name="email" />
            <input type="text" placeholder="Direccion" name="address" />
            <input type="text" placeholder="Apto" name="apto" />
            <input type="text" placeholder="Ciudad" name="city" />
            <input type="text" placeholder="Pais" name="country" />
            <input type="text" placeholder="Estado" name="state" />
            <input type="text" placeholder="Codigo postal" name="cp" />
            <input type="text" placeholder="Telefono" name="phone" />
          </form>
        </div>

        <div className="Information-buttons">
          <div className="Information-back">Regresar</div>
          <div className="Information-next">Pagar</div>
        </div>
      </div>

      <div className="Infomation-sidebar">
        <h3>Pedidos:</h3>
        <div className="Infomation-item">
          <h4>Item name</h4>
          <span>$10</span>
        </div>
      </div>
    </div>
  );
}

export default Information;
