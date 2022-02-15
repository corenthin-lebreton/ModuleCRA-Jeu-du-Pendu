import React from 'react';
import ReactDOM from 'react-dom';
import { Component } from 'react/cjs/react.production.min';
import App from './App';
import pageJeu from './Component/pageJeu'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Interface from './Component/Interface';
ReactDOM.render(
  <React.StrictMode>
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<Interface />} />
          <Route path="/jeu" element = {<pageJeu />} />
        </Routes>
      </Router>
    </main>
  </React.StrictMode>,
  document.getElementById('root')
);

