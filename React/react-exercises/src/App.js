import React from "react";
import { ClickCounter } from "./ClickCounter";
import { ClickTracker } from "./ClickTracker";
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
        <ClickCounter />
        <ClickTracker />
      </div>
    );
  }
}

export default App;

// Create a ClickTracker component that renders three buttons. Implement a single event handler for all three buttons, and track of which button was pressed last. 
// Show the last button that was pressed in an h1 tag within the ClickTracker component. Tip: you can use the event object to access the target property of the event.