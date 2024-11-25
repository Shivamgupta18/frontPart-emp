import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import App from './App'; // Your root component

ReactDOM.render(
  <BrowserRouter>
    <App /> {/* Your app wrapped inside BrowserRouter */}
  </BrowserRouter>,
  document.getElementById('root')
);
