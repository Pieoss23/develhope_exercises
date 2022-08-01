import React from "react";
import { TodoList } from "./TodoList";
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
        <Welcome />
        <Login />
         <Hello />
        <Counter />
        <ClickCounter />
        <ClickTracker />
        <InteractiveWelcome />
        <TodoList />
        <UncontrolledLogin />
      </div>
    );
  }
}

export default App;

// Modify the Login component from Forms 03 so that the "login" 
// button background color is "red" when the inputted password's 
// length is shorter than 8 characters, green otherwise.

