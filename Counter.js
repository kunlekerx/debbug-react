import React, { useState } from 'react';

function Counter({ initialCount }) {
  const [count, setCount] = useState(initialCount);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
}

export default Counter;
