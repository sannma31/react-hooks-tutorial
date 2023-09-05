import './App.css'
import { useEffect, useState, useContext } from 'react';
import ShinCodetext from './main';

function App() {
  const[count,setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1)
  }

  useEffect(() => {
    console.log('Hello Hooks');
  },[count])

  return (<div className='App'>
    <h1>useState,useEffect</h1>
    <button onClick={handleClick}>➕</button>
    <p>
      {count}
    </p>
    <h1>
      useCotext
    </h1>
  </div>
  )
}

export default App
