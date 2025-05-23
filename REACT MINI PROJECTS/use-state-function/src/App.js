import React, { useState } from 'react';

const App = () => {
  const [ isCount, setCount ] = useState(0);
  console.log(isCount);
  console.log(setCount);

  const handleClick1 = () => {
    setCount(isCount + 1);
  }

  const handleClick2 = () => {
    setCount(isCount - 1);
  }


  return (
    <div>
      <h1> {isCount} </h1>
      <button onClick={handleClick1}> + </button>
      <button onClick={handleClick2}> - </button>
    </div>
  )
}

export default App;