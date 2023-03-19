import { useState } from "react";
import "../assets/css/Login.css";
import LoginForm from "../components/LoginForm";

function Login({ setIsLoggedIn }) {

    return <>
        <div className="login-wrapper">
            <LoginForm setIsLoggedIn={setIsLoggedIn} />
        </div>
    </>
}

export default Login;