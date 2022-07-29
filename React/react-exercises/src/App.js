import React from "react";
import { ClickCounter } from "./ClickCounter";
import { Counter } from "./Counter";
import { Hello } from "./Hello";
import { Welcome } from "./Welcome";

class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome age name = "John" />
        <Counter />
        <ClickCounter  />
      </div>
    );
  }
}

export default App;


// Create a ClickCounter class component that increments a counter every time a user clicks on a button.
// Render both the current value of the counter and the button within the ClickCounter component.