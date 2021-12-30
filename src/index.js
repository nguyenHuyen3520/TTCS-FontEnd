import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./sass/index.scss"
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"

ReactDOM.render(
  <React.StrictMode>    
      <App />    
  </React.StrictMode>,
  document.getElementById('root')
);

