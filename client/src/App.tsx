import React from "react";
import HomePage from "./pages/HomePage";
import PostsPage from "./pages/PostsPage"
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/> }/>
        <Route path="/posts" element={<PostsPage/> }/>
      </Routes>
    </div>
  )
}

export default App
