import React from "react";
import Welcome from "./Welcome"
import { Sum } from "./Sum";

class App extends React.Component {

  render() {
    return (
      <div>
        <Welcome />
        <Sum numbers={[18, 21, 27, 30]}/>
      </div>
    );
  }
}

export default App;


// Write a Sum function component that receives a numbers prop (expected to be an array of numbers)
// and renders the sum of all numbers in the array within a h1 tag.