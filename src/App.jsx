import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sample1 from "./pages/Sample1";
import Sample2 from "./pages/Sample2";
import Sample3 from "./pages/Sample3";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sample1 />} />
        <Route path="/2" element={<Sample2 />} />
        <Route path="/3" element={<Sample3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
