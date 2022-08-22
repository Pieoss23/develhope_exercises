import React from "react";
import { Routes, Route } from "react-router-dom";
import { Welcome } from "./Welcome";
import { HookCounter } from "./HookCounter";
import { HookGitHubUser } from "./HookGithubUser";
import { ShowGithubUser } from "./ShowGithubUser.js";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome name="Pietro" />} />
      <Route path="/counter" element={<HookCounter />} />
      <Route path="users/" element={<HookGitHubUser />} />
      <Route path="users/:username" element={<ShowGithubUser />} />
    </Routes>
  );
}

/* Add a new Route to the users/:username path that renders a ShowGithubUser 
  component that receives the username as a path parameter and renders the GithubUser
  component from useEffect 03 by passing it the received username.*/
