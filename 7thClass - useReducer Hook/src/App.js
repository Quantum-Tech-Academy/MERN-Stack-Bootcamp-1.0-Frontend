import { useState, useRef } from "react";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import { Navigate, Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";

import Users from "./pages/Users";
import NotFound from "./pages/404";
import Login from "./pages/Login";
import UserDetails from "./pages/UserDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={"/login"}  />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:userId" element={<UserDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />}  />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
