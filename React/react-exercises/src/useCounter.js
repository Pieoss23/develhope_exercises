import { useState, useCallback } from "react";

export function useCounter(initialValue) {
    const [counter, setCounter] = useState(initialValue);
  
    const handleCounterIncrement = useCallback(function handleCounterIncrement() {
      setCounter((c) => c + 1);
    }, [])
  
    const handleCounterDecrement = useCallback(function handleCounterDecrement() {
      setCounter((c) => c - 1);
    }, [])
  
    const handleCounterReset = useCallback(function handleCounterReset() {
      setCounter(initialValue);
    }, [initialValue])
    
    
    // extract the logic
    return {
      counter: counter,
      onIncrement: handleCounterIncrement,
      onDecrement: handleCounterDecrement,
      onReset: handleCounterReset,
    }
  }