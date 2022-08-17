import { useState, useEffect } from "react";

export function ClickCounter({ initialValue = 0 }) {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log('first render')
    return () => {
      console.log("after render");
    };
  }, []);

  function handleCounterReset() {
    setCounter(initialValue);
  }

  function onCounterChange(value) {
    console.log(value);
  }

  useEffect(onCounterChange, [counter]);

  return (
    <div>
      <h3>Counter: {counter}</h3>
      <button onClick={() => setCounter(counter + 1)}>
        Click to increment
      </button>
      <button onClick={() => setCounter(counter - 1)}>
        Click to decrement
      </button>
      <button onClick={handleCounterReset}>Click to reset</button>
    </div>
  );
}
