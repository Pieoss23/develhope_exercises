import React from "react";
import { ClickCounter } from "./ClickCounter";
import { ClickTracker } from "./ClickTracker";
import { Counter } from "./Counter";
import { Hello } from "./Hello";
import InteractiveWelcome from "./InterectiveWelcome";
import { Login } from "./Login";
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
        <InteractiveWelcome />
        <Login />
      </div>
    );
  }
}

export default App;

// Implement an UncontrolledLogin component that implements all 
// the operations of the Login component, but does so using uncontrolled components.