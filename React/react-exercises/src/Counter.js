import {useEffect, useState} from "react"

export function Counter({ 
    initialValue = 0,
    incrementBy = 1,
    intervalTime = 1000 })
     {

  const [count, setCount] = useState(initialValue);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => c + incrementBy);
    }, intervalTime);

    return () => {
      clearInterval(interval);
    };
  }, [count, incrementBy, intervalTime]);

  return (
    <div>
      <h1>Counter: {count}</h1>
    </div>
  );
}