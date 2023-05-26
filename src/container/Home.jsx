import React from 'react';
import { Helmet } from 'react-helmet';
import initalState from '../initialState';
import Products from '../components/Porducts';

function Home() {
  return (
    <>
      <Helmet>
        <title>Platzi Conf Product - Products</title>
      </Helmet>
      <Products products={initalState.products} />
    </>
  );
}

export default Home;
