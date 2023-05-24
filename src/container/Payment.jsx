import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PayPalButton } from 'react-paypal-button-v2';
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
    clientID: Api,
    intent: 'capture',
    currency: 'USD',
  };

  const buttonStyles = {
    layout: 'horizontal',
    shape: 'rect',
  };

  const handlePaymentSuccess = (data) => {
    console.log(data);
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
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyle={buttonStyles}
            createOrder={(data, actions) => createOrder(data, actions)}
            onApprove={(data, actions) => onApprove(data, actions)}
            onPaymentError={(error) => console.log(error)}
            onPaymentCancel={(data) => console.log(data)}
          />
        </div>
      </div>
    </div>
  );
}

export default Payment;
