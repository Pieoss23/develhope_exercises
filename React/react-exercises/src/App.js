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
        <Route index element={<h3>Add a user and select it</h3>}/>
        <Route path=":username" element={<ShowGithubUser />} />
        </Route>
      </Routes>
      <Link to="/">Home</Link> | <Link to="/counter">Counter</Link> | <Link to="/users">Github User</Link>
    </div>
  );
}

/* Modify the useGithubUser hook so that it returns a function to manually refetch the data when invoked. */
