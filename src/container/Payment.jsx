import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import AppContext from '../context/AppContext';
import handleSumTotal from '../components/utils';
import '../style/components/Payment.css';

const Api = process.env.client_Api;

function Payment() {
  const navigate = useNavigate();
  const {
    state: { cart, buyer },
    addNewOrder,
  } = useContext(AppContext);

  const paypalOptions = {
    'client-id': Api,
    intent: 'capture',
    currency: 'USD',
  };

  const buttonStyles = {
    layout: 'horizontal',
    shape: 'rect',
  };

  // funcion de redireccionamineto
  const handlePaymentSuccess = (data) => {
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data,
      };
      addNewOrder(newOrder);
      navigate('/success');
    }
  };

  const total = handleSumTotal(cart);

  // pasar precio a paypal
  const createOrder = (_data, actions) =>
    actions.order.create({
      purchase_units: [
        {
          amount: {
            value: total,
          },
        },
      ],
    });

  // paypal result - redireccionamiento
  const onApprove = (_data, actions) =>
    actions.order.capture().then((data) => {
      handlePaymentSuccess(data);
    });

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen de pedido</h3>
        {cart.map((item) => (
          <div className="Payment-item" key={item.id}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>$ {item.price}</span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          <PayPalScriptProvider options={paypalOptions}>
            <PayPalButtons
              Style={buttonStyles}
              createOrder={(data, actions) => createOrder(data, actions)}
              onApprove={(data, actions) => onApprove(data, actions)}
              onPaymentError={(err) => console.log(err)}
              onPaymentCancel={(data) => console.log(`Cancel order${data}`)}
            />
          </PayPalScriptProvider>
        </div>
      </div>
    </div>
  );
}

export default Payment;
