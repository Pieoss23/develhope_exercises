import { useState } from "react";

export function ClickCounter({initialValue = 0}){
    const [counter, setCounter] = useState(initialValue)

    function handleCounterIncrement(){
        setCounter((c) => c + 1)
    }

    function handleCounterDecrement(){
        setCounter((c) => c - 1)
    }

    function handleCounterReset(){
        setCounter(initialValue)
    }

    return(
        <div>
            <h3>Counter: {counter}</h3>
            <button onClick={handleCounterIncrement}>Click to increment</button>
            <button onClick={handleCounterDecrement}>Click to decrement</button>
            <button onClick={handleCounterReset}>Click to reset</button>
        </div>
    )
}