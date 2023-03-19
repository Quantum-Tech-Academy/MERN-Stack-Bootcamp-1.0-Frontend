import "../assets/css/Login.css";
import { useNavigate } from "react-router-dom";
import { useMemo, useReducer, useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

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

function expensiveCalculation(count) {
    for(let i = 0; i < 1000000000; i++) {
        count += 1;
    }
    return count;
}

function LoginForm({ setIsLoggedIn }) {
    const navigate = useNavigate()
    const storeDispatch = useDispatch();


    const [state, dispatch] = useReducer(reducerFunction, initialState);

    const count = useMemo(() => expensiveCalculation(111), [state.error])
    console.log(count)

    function submitHandler(event) {
        event.preventDefault();
        storeDispatch({ type: "LOGIN",})
        storeDispatch({ type: "CHANGE_MESSAGE", payload: "The message is changed..." })
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
            <h1>{count}</h1>
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