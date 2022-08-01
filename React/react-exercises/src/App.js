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

// Add a "login" button to the Login component. 
// This button should be disabled as long as the username and password inputs are empty.
// When clicked, the event handler attached to the button should call an 
// onLogin function passed as a prop to the Login component, passing it the state.