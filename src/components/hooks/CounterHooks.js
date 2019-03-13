import React, { useState } from 'react';
import { Button } from '../../styles/Button';

function CounterHooks() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Hooks Count: {count}</p>
      <Button
        reset
        type='button'
        disabled={count === 0}
        onClick={() => setCount(0)}
      >
        Reset
      </Button>
      <Button hooks type='button' onClick={() => setCount(count + 1)}>
        Increment
      </Button>
      <Button hooks type='button' onClick={() => setCount(count - 1)}>
        Decrement
      </Button>
    </div>
  );
}

export default CounterHooks;
