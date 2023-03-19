import { useState, useRef } from "react";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import { Navigate, Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";

import Users from "./pages/Users";
import NotFound from "./pages/404";
import Login from "./pages/Login";
import UserDetails from "./pages/UserDetails";
import AuthContext from "./store/auth";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn: isLoggedIn }}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={"/login"}  />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:userId" element={<UserDetails />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="*" element={<NotFound />}  />
      </Routes>
    </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
