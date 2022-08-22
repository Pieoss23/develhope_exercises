import React from "react";
import { Routes, Route } from "react-router-dom"
import { Welcome } from "./Welcome";
import { HookCounter } from "./HookCounter";
export function App() {
    
    return (
        <Routes>
            <Route path="/" element={<Welcome name="Pietro" />} />
            <Route path="/counter" element={<HookCounter />} />
        </Routes>
    )

}


/* Add a new Route to the /counter path that renders the Counter component from useState 01.*/
