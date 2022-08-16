import React from "react";

import { ClickCounter } from "./ClickCounter";

class App extends React.Component {

  render() {
    return (
      <div>
        <ClickCounter />
      </div>
    );
  }
}

export default App;


// Rewrite the ClickCounter component from Events 01 as a function component,
// and use the useState hook to track the state of the counter.