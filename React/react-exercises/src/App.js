import React from "react";
import { ClickCounter } from "./ClickCounter";

class App extends React.Component {

  render() {
    return (
      <div className="main_container">
        <ClickCounter />
      </div>
    );
  }
}

export default App;


// Add a side effect to the ClickCounter component from useState 01
// that calls a onCounterChange function with the current value of the counter
// every time value of the counter changes. The function should be received as a prop.