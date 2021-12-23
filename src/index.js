import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';
import "./sass/index.scss"
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"


ReactDOM.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>,
  document.getElementById('root')
);

