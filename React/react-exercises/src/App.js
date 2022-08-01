import React from "react";
import { ClickCounter } from "./ClickCounter";
import { ClickTracker } from "./ClickTracker";
import { Counter } from "./Counter";
import { Hello } from "./Hello";
import InteractiveWelcome from "./InterectiveWelcome";
import { UncontrolledLogin } from "./UncontrolledLogin";
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
        <UncontrolledLogin />
      </div>
    );
  }
}

export default App;

