import React from "react";
import { HookLogin } from "./HookLogin";

class App extends React.Component {

  render() {
    return (
      <div className="main_container">
        <HookLogin />
      </div>
    );
  }
}

export default App;


// Create a custom hook that keeps track of the state of a controlled form with the username and password inputs,
// and returns the current value of the inputs as well as an event handler to update either input.