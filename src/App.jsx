import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Addmentee from "./pages/AddMentee";
import UserList from "./pages/UserList";
import MenteeLog from "./pages/MenteeLog";
import ClassList from "./pages/ClassList";
import MenteeList from "./pages/MenteeList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/userlist" element={<UserList />} />
        <Route path="/classlist" element={<ClassList />} />
        <Route path="/menteelist" element={<MenteeList />} />
        <Route path="/menteelog" element={<MenteeLog />} />
        <Route path="/addmentee" element={<Addmentee />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
