import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import Map from './Map';
import '../style/components/Success.css';

function Success() {
  const {
    state: { buyer },
  } = useContext(AppContext);

  return (
    <div className="Success">
      <div className="Success-content">
        <h2>{`${buyer.name}, Gracias por su compra`}</h2>
        <span>Tu pedido llegara en 3 dias</span>
        <div className="Succes-map">
          <Map />
        </div>
      </div>
    </div>
  );
}

export default Success;
