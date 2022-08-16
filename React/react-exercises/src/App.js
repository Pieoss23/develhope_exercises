import React from "react";
import Welcome from "./Welcome"
import { Sum } from "./Sum";

class App extends React.Component {

  render() {
    return (
      <div>
        <Welcome />
        <Sum />
      </div>
    );
  }
}

export default App;


// What happens if the numbers prop of the Sum component is not set?
// How can you set a default value for this prop?