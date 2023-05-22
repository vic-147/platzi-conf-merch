import React from 'react';
import initalState from '../initialState';
import Products from '../components/Porducts';

function Home() {
  return (
    <Products products={initalState.products} />
  );
}
 
export default Home;