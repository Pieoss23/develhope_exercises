import React from "react";
import { HookCounter } from "./HookCounter"



class App extends React.Component {

  render() {
    return (
      <div className="main_container">
        <HookCounter />
      </div>
    );
  }
}

export default App;


// Modify the useCounter custom hook from Custom Hooks 01 to use 
// the useCallback to memoize the functions used to increment, decrement and reset the counter.