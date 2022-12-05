import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Addmentee from "./pages/AddMentee";
import Sample2 from "./pages/Sample2";
import Sample3 from "./pages/Sample3";
import UserList from "./pages/UserList";

import MenteeLog from "./pages/MenteeLog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Login />} />
        <Route path="/userlist" element={<UserList />} />
        <Route path="/3" element={<Sample3 />} />
        <Route path="/menteelog" element={<MenteeLog />} />
        <Route path="/addmentee" element={<Addmentee />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
