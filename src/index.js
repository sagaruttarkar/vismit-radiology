// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>   {/* Only here */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
