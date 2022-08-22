import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Welcome } from "./Welcome";
import { HookCounter } from "./HookCounter";
import { HookGitHubUser } from "./HookGithubUser";
import { ShowGithubUser } from "./ShowGithubUser.js";

export function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Welcome name="Pietro" />} />
        <Route path="/counter" element={<HookCounter />} />
        <Route path="users/" element={<HookGitHubUser />} />
        <Route path="users/:username" element={<ShowGithubUser />} />
      </Routes>
      <Link to="/">Home</Link> | <Link to="/counter">Counter</Link> | <Link to="/users">Github User</Link>
    </div>
  );
}

/* Add a Not Found route that renders when a user navigates to a path that does not exist.*/
