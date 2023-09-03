import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const shincondeInfo = {
  name:"shincode",
  age: 24,
};

const ShinCodetext = createContext(shincondeInfo);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ShinCodetext.Provider value ={shincondeInfo}>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </ShinCodetext.Provider>
)
