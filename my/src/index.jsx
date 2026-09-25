import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './pages/app/App';
import Contador from './pages/contador/index.jsx';
import './index.scss';
import Escrever from './pages/escrever/index.jsx';
import './pages/escrever/index.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contador" element={<Contador />} />
        <Route path="/escrever" element={<Escrever />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);






