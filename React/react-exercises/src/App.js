import React from "react";
import { ClickCounter } from "./ClickCounter";
import { ClickTracker } from "./ClickTracker";
import { Counter } from "./Counter";
import { Hello } from "./Hello";
import InteractiveWelcome from "./InterectiveWelcome";
import { Login } from "./Login";
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
        <Login />
        <UncontrolledLogin />
      </div>
    );
  }
}

export default App;

// Modify the UncontrolledLogin component so that the username 
// input is automatically focused when the component renders the first time.