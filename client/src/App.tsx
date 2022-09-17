import React from "react";
import PostsPage from "./pages/PostsPage"
import { Routes, Route } from "react-router-dom";
import './assets/less/App.less';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PostsPage />} />
        <Route path="*" element={<p>There is nothing here: 404! </p>} />
      </Routes>
    </div>
  )
}

export default App
