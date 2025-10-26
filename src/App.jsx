import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Agent from "./pages/Agent";
import Project from "./pages/Project";

function App() {
  return (
    <> 
      <div className="text-white text-3xl">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/agent" element={<Agent />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
