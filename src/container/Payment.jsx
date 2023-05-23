import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
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
    "client-id": Api,
    intent: 'capture',
    currency: 'USD',
  };

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  };

  const handlePaymentSuccess = (data) => {
    console.log(data);
    if (data.status === 'COMPLITED') {
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
  const toStringTotal = toString(total);

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
             
              buttonStyle={buttonStyles}
              amount={toStringTotal}
              onPaymentStart={() => console.log('Start Payment')}
              onPaymentSuccess={(data) => handlePaymentSuccess(data)}
              onPaymentError={(error) => console.log(error)}
              onPaymentCancel={(data) => console.log(data)}
            />
          </PayPalScriptProvider>
        </div>
      </div>
    </div>
  );
}

export default Payment;
