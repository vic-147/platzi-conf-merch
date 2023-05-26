import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import AppContext from '../context/AppContext';
import handleSumTotal from '../components/utils';
import '../style/components/Checkout.css';

function Checkout() {
  const { state, removeFromCart } = useContext(AppContext);
  const { cart } = state;

  const handleRemove = (product) => () => {
    removeFromCart(product);
  };

  return (
    <>
      <Helmet>
        <title>Lista de pedidos</title>
      </Helmet>
      <div className="Checkout">
        <div className="Checkout-container">
          {cart.lenght > 0 ? (
            <h3>Lista de Pedidos:</h3>
          ) : (
            <h3>Sin Pedidos...</h3>
          )}

          {cart.map((item) => (
            <div className="Checkout-item">
              <div className="Checkout-element">
                <h4>{item.title}</h4>
                <span>${item.price}</span>
              </div>
              <button
                type="button"
                className="btn-delete"
                onClick={handleRemove(item)}
              >
                <i className="fa-solid fa-trash-can fa-xl" />
              </button>
            </div>
          ))}
        </div>

        {cart.length > 0 && (
          <div className="Checkout-sidebar">
            <h3>{`Precio Total: $ ${handleSumTotal(cart)}`}</h3>
            <Link to="/information">
              <button type="button">Continuar pedido</button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

export default Checkout;
