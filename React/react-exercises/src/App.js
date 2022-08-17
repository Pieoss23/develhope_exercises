import React from "react";
import { Counter } from "./Counter";

class App extends React.Component {

  render() {
    return (
      <div className="main_container">
        <Counter />
      </div>
    );
  }
}

export default App;


//Rewrite the Counter component from State 1 as a function component and add a side effect 
// that initializes the interval as soon as the component renders, and clears it when the component unmounts.

