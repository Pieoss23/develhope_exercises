import React from "react";
import { ClickCounter } from "./ClickCounter";
import { ClickTracker } from "./ClickTracker";
import { Counter } from "./Counter";
import { Hello } from "./Hello";
import InteractiveWelcome from "./InterectiveWelcome";
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
      </div>
    );
  }
}

export default App;

//Create an InteractiveWelcome component that renders an input tag and the Welcome component.
// Pass the current content of the input tag to the name prop of the Welcome component. The input tag should be a controlled component.