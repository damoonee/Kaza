import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './/pages/Home';
import Logement from './/pages/Logement';
import Error from './/pages/Error';
import About from './/pages/About';

import Header from './/layout/Header';
import Footer from './/layout/Footer';

import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <React.StrictMode>
    <Router>

      <Header />

      <Routes>
        <Route path='/'>
          <Home />
        </Route>

        <Route path='/logement'>
          <Logement />
        </Route>

        <Route path='/about'>
          <About />
        </Route>

        <Route path='*'>
          <Error />
        </Route>

      </Routes>

      <Footer />

    </Router>
  </React.StrictMode>
);

