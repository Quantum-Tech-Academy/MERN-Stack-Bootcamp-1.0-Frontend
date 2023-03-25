import { useState, useRef } from "react";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import { Navigate, Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";

import Users from "./pages/Users";
import NotFound from "./pages/404";
import Login from "./pages/Login";
import { Provider } from "react-redux";
import store from "./store/index";
import { PersistGate } from "redux-persist/integration/react";
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from "./routes/PrivateRoute";
import Blogs from "./pages/Blogs";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Provider store={store.store}>
      <PersistGate persistor={store.persistor}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={"/login"}  />} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/users" element={<PrivateRoute><Users /></PrivateRoute>} />
        <Route path="/blogs" element={<PrivateRoute><Blogs /></PrivateRoute>} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="*" element={<NotFound />}  />
      </Routes>
    </BrowserRouter>
    </PersistGate>
    </Provider>
  );
}

export default App;
