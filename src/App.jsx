// App.js
import React, { useEffect, useState, useContext } from 'react';
import ShinCodeContext from './main';

function App() {
  const [count, setCount] = useState(0);
  const shincondeInfo = useContext(ShinCodeContext);

  const handleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log('Hello Hooks');
  }, [count]);

  return (
    <div className='App'>
      <h1>useState, useEffect</h1>
      <button onClick={handleClick}>➕</button>
      <p>{count}</p>
      <h1>useContext</h1>
      <p>{shincondeInfo.name}</p>
      <p>{shincondeInfo.age}</p>
    </div>
  );
}

export default App;
