import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layaout from '../components/Layaout';
import Home from '../container/Home';
import Checkout from '../container/Checkout';
import Information from '../container/Information';
import Payment from '../container/Payment';
import Success from '../container/Success';
import NotFound from '../container/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Layaout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/checkout/information" element={<Information />} />
          <Route exact path="/checkout/payment" element={<Payment />} />
          <Route exact path="/checkout/success" element={<Success />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layaout>
    </BrowserRouter>
  );
}

export default App;
