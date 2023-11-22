import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
// import Logement from './pages/Logement';
// import Error from './pages/Error';
// import About from './pages/About';

import Header from './components/Header';
// import Footer from './components/Footer';

import './index.css';

const root = createRoot(document.getElementById('root'));

root.render(

  <React.StrictMode>
    <Router>

      <Header />

      <Routes>
        <Route path='/' element={<Home />} />

        {/* <Route path='/logement' element={<Logement />} />

        <Route path='/about' element={<About />} />

        <Route path='*' element={<Error />} /> */}
      </Routes>

      {/* <Footer /> */}

    </Router>
  </React.StrictMode>
);

