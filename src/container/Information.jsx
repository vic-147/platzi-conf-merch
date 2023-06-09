import React, { useContext, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import AppContext from '../context/AppContext';
import '../style/components/Information.css';

function Information() {
  const { state, addToBuyer } = useContext(AppContext);
  const form = useRef(null);
  const navigate = useNavigate();

  const { cart } = state;

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const buyer = {
      name: formData.get('name'),
      email: formData.get('email'),
      address: formData.get('address'),
      adto: formData.get('apto'),
      city: formData.get('city'),
      country: formData.get('country'),
      state: formData.get('state'),
      cp: formData.get('cp'),
      phone: formData.get('phone'),
    };
    addToBuyer(buyer);
    navigate('/payment');
  };

  return (
    <>
      <Helmet>
        <title>Formulario</title>
      </Helmet>
      <div className="Information">
        <div className="Information-container">
          <div className="Information-head">
            <h2>Informacion de contacto:</h2>
          </div>

          <div className="Information-form">
            <form ref={form}>
              <input type="text" placeholder="Nombre completo" name="name" />
              <input
                type="text"
                placeholder="Correo electronico"
                name="email"
              />
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
            <div className="Information-back">
              <Link to="/checkout">Regresar</Link>
            </div>
            <div className="Information-next">
              <button type="button" onClick={handleSubmit}>
                Pagar
              </button>
            </div>
          </div>
        </div>

        <div className="Information-sidebar">
          <h3>Pedidos:</h3>
          {cart.map((item) => (
            <div className="Information-item" key={item.id}>
              <div className="Information-element">
                <h4>{item.title}</h4>
                <span>${item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Information;
