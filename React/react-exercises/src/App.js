import React from "react";
import { GithubUser } from "./GithubUser";

class App extends React.Component {

  render() {
    return (
      <div className="main_container">
        <GithubUser username='Pieoss23' />
      </div>
    );
  }
}

export default App;


// Create a GithubUserList component that maintains an array of usernames, showing a GithubUser component for each username entered.
// The usernames should be added to the array using an input field and a button.