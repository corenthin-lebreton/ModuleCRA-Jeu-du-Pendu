import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Pagejeu from './Component/Pagejeu'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Interface from './Component/Interface';
ReactDOM.render(
  <React.StrictMode>
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<Interface />} />
          <Route path="/jeu" element = {<Pagejeu />} />
        </Routes>
      </Router>
    </main>
  </React.StrictMode>,
  document.getElementById('root')
);

