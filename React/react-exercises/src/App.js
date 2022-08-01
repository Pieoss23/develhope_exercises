import React from "react";
import { TodoList } from "./TodoList";
// import { ClickCounter } from "./ClickCounter";
// import { ClickTracker } from "./ClickTracker";
// import { Counter } from "./Counter";
// import { Hello } from "./Hello";
// import InteractiveWelcome from "./InterectiveWelcome";
// import { Login } from "./Login";
// import { UncontrolledLogin } from "./UncontrolledLogin";
import { Welcome } from "./Welcome";

class App extends React.Component {
  render() {
    return (
      <div>
        <Welcome />
         {/*<Hello />
        <Counter />
        <ClickCounter />
        <ClickTracker />
        <InteractiveWelcome />
        <Login />
        <UncontrolledLogin /> */}
        <TodoList />
      </div>
    );
  }
}

export default App;

// Create an index.css file and import it within the index.js file. 
// Add a .welcome class to the Welcome component that changes its background color and adds a border.
