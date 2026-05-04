import React from 'react';
import './App.css';
function App() {
  const [count, setCount] = React.useState(0);
  if (count < 0) {
    setCount(0);
  }
  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  )  
}


export default App;