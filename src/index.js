import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';
import "./sass/index.scss"
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});
ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Layout />

    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

