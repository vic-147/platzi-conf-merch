import { useState } from 'react';
import initialState from '../initialState';

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((items) => items.id !== payload.id),
    });
  };

  const addToBayer = (payload) => {
    setState({
      ...state,
      bayer: [...state.buyer, payload],
    });
  };

  const addNewOrder = payload => {
    setState({
      ...state,
      orders: [...state.orders, payload],
  })
  }

  return {
    addToCart,
    removeFromCart,
    addToBayer,
    addNewOrder,
    state,
  };
};

export default useInitialState;
