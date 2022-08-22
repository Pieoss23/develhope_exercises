import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Welcome } from "./Welcome";
import { HookCounter } from "./HookCounter";
import { ShowGithubUser } from "./ShowGithubUser.js";
import { GithubUserList } from "./GithubUserList";

export function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Welcome name="Pietro" />} />
        <Route path="/counter" element={<HookCounter />} />
        <Route path="/users" element={<GithubUserList />}>
        <Route path=":username" element={<ShowGithubUser />} />
        </Route>
      </Routes>
      <Link to="/">Home</Link> | <Link to="/counter">Counter</Link> | <Link to="/users">Github User</Link>
    </div>
  );
}

/* Add a Route to the users path that shows the GihubUserList component from useEffect 04.
 Modify it so that instead of showing the GithubUser component for each username entered,
 it shows a link to a nested route that shows the ShowGithubUser component. 
 In doing so, remove the /users/:username route from the App component, 
 and add a new nested route within the /users route.*/
