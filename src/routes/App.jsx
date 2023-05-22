import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from '../components/Layaout';
import Home from '../container/Home';
import Checkout from '../container/Checkout';
import Information from '../container/Information';
import Payment from '../container/Payment';
import Success from '../container/Success';
import NotFound from '../container/NotFound';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';

function App() {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" Component={Checkout} />
            <Route path="/information" Component={Information} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/success" element={<Success />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
