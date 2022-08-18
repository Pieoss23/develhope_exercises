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


// Extract the logic to fetch a Github user's data from the GithubUser component 
// from useEffect-03 into a custom hook called useGithubUser.