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

// Create a TodoList component that renders a ul tag with a li tag for each item contained in the items state variable.
// The items state variable should be an array of strings.
// The TodoList component should also contain an input tag and a button. When the button is clicked,
// the event handler should add the value of the input tag to the items array.