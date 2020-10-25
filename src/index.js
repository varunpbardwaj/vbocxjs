import React from 'react';
import ReactDOM from 'react-dom';
import Layout from "./components/Layout"
import Home from "./components/Home/home";
import Header from "./components/Header";
import Footer from "./components/Footer";

ReactDOM.render(
  <>
    <Header />
    <Layout>
      <Home />
    </Layout>
    <Footer />
  </>,
  document.getElementById('root')
);
