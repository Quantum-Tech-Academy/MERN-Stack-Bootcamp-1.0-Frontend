import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import "../assets/css/Login.css";
import LoginForm from "../components/LoginForm";

function Login({ setIsLoggedIn }) {
    const {token} = useSelector(state => state)
    const navigate = useNavigate();

    useEffect(() => {
        if(token) {
            navigate("/dashboard")
        }
    }, [token])

    return <>
        <div className="login-wrapper">
            <LoginForm setIsLoggedIn={setIsLoggedIn} />
        </div>
    </>
}

export default Login;