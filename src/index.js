import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MoviesProvider from './context/MoviesContext';

ReactDOM.render(
  <React.StrictMode>
    <MoviesProvider>
      <App />
    </MoviesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

