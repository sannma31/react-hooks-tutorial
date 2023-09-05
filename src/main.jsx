// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createContext } from 'react';

const shincondeInfo = {
  name: "shincode",
  age: 24,
};

const ShinCodeContext = createContext(shincondeInfo);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ShinCodeContext.Provider value={shincondeInfo}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ShinCodeContext.Provider>
);

export { ShinCodeContext };
