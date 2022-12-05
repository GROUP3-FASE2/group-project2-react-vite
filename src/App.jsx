import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Sample2 from "./pages/Sample2";
import Sample3 from "./pages/Sample3";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/2" element={<Sample2 />} />
        <Route path="/3" element={<Sample3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
