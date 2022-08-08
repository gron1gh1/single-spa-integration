import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
const App = () => (
  <BrowserRouter>
    <Link to={"/main_v2"}>React main</Link>
    <Link to={"/main_v3"}>React main2</Link>
    <Link to={"/vue/main"}>Vue Component</Link>
    <Link to={"/vue/hello"}>Vue Component2</Link>
    <Routes>
      <Route path="/main_v2" element={<div>React 1</div>} />
      <Route path="/main_v3" element={<div>React 2</div>} />
    </Routes>
  </BrowserRouter>
);

export default App;
