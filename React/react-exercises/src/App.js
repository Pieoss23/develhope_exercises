import React from "react";
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
      </div>
    );
  }
}

export default App;
