import React from "react";
import { GithubUser } from "./GithubUser";

class App extends React.Component {

  render() {
    return (
      <div className="main_container">
        <GithubUser />
      </div>
    );
  }
}

export default App;


// Create a GithubUser component that fetches the data of the username passed as a prop,
// and renders some of the data within a div tag. The API to query is https://api.github.com/users/${username}.
