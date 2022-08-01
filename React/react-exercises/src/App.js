import React from "react";
import { TodoList } from "./TodoList";
// import { ClickCounter } from "./ClickCounter";
// import { ClickTracker } from "./ClickTracker";
// import { Counter } from "./Counter";
// import { Hello } from "./Hello";
// import InteractiveWelcome from "./InterectiveWelcome";
// import { Login } from "./Login";
// import { UncontrolledLogin } from "./UncontrolledLogin";
// import { Welcome } from "./Welcome";

class App extends React.Component {
  render() {
    return (
      <div>

        {/* <Hello />
        <Welcome age name = "John" />
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

// Modify the TodoList by adding a "reset" button that clears the items array when clicked.

