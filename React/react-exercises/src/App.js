import React from "react";
import { HookCounter } from "./HookCounter";

class App extends React.Component {

  render() {
    return (
      <div className="main_container">
        <HookCounter />
      </div>
    );
  }
}

export default App;


// Create a custom hook useCounter that keeps track of the state of a counter,
// and returns the current value of the counter as well as three functions to increment, decrement and reset the counter.