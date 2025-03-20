import { useState } from "react";
import "./App.css";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import App1 from "./components/App1";
import App2 from "./components/App2";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to="app1">App1</Link>
        <Link to="app2">App2</Link>
      </div>
      <hr />
      <div>
        <Routes>
          <Route index element={<App1 />}></Route>
          <Route path="app1" element={<App1 />}></Route>
          <Route path="app2" element={<App2 />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
