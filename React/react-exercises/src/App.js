import React from "react";
import { Login } from "./Login";

class App extends React.Component {

  render() {
    return (
      <div>
        <Login />
      </div>
    );
  }
}

export default App;


// Rewrite the Login component from Forms 03 as a function component,
// and use the useState hook to track the state of the username,
// password and remember inputs. Tip: you can use useState more than once.