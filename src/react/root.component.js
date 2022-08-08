import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/main_v2" element={<div>Hello</div>} />
      <Route path="/main_v3" element={<div>main_v3</div>} />
    </Routes>
    <Link to={"/main_v2"}>React main</Link>
    <Link to={"/main_v3"}>React main2</Link>
    <Link to={"/main"}>Vue Component</Link>
    <Link to={"/hello"}>Vue Component2</Link>
  </BrowserRouter>
);

export default App;
