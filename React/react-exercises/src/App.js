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


// Modify the useGithubUser hook to return the function to fetch the data of a Github user,
// along with the data of the user and the error and loading states.