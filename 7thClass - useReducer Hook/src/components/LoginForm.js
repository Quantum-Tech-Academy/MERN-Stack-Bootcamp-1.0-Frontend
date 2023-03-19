import "../assets/css/Login.css";
import { useNavigate } from "react-router-dom";
import { useReducer, useState } from "react";
import { useEffect } from "react";

const initialState = {
    email: "",
    password: "",
    error: true,
}

function reducerFunction(previousState, action) {
    if(action.type === "ERROR_CLEARED") {
        return { ...previousState, error: false }
    } else if(action.type === "ERROR") {
        return { ...previousState, error: true }
    } else if(action.type === "SET_EMAIL") {
        return { ...previousState, email: action.payload }
    } else if(action.type === "SET_PASSWORD") {
        return { ...previousState, password: action.payload }
    }
}

function LoginForm() {
    const navigate = useNavigate()

    const [state, dispatch] = useReducer(reducerFunction, initialState);

    function submitHandler(event) {
        event.preventDefault();
        navigate("/dashboard");
    }

    useEffect(() => {
        if(state.email && state.password && state.password.length >= 8) {
            dispatch({ type: "ERROR_CLEARED" });
        } else {
            dispatch({ type: "ERROR" });
        }
    }, [state.password, state.email])

    return <form className="login-form" onSubmit={submitHandler}>
        <div className="form-group">
            <label>Email</label>
            <input type={"text"} placeholder="Enter Email" onChange={(event) => dispatch({ type: "SET_EMAIL", payload: event.target.value})} value={state.email} />
        </div>
        <div className="form-group">
            <label>Password</label>
            <input type={"password"} placeholder="Enter Password" onChange={(event) => dispatch({ type: "SET_PASSWORD", payload: event.target.value })} value={state.password} />
        </div>
        <button type="submit" disabled={state.error}>Login</button>
    </form>
}

export default LoginForm;