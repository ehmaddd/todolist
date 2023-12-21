/** @jsxImportSource @emotion/react */
import { useState } from 'react';

function MyPage() {
  // Define state using the useState hook
  const [count, setCount] = useState(0);

  // Event handler to update the state
  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Main Page</h1>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default MyPage;
