import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes/App';
import './index.css'

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(<App />);
