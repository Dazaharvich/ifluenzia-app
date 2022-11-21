import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { TiendaProvider } from './Context/TiendaProvider';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <TiendaProvider>
      <App />
    </TiendaProvider>
  </StrictMode>
);

