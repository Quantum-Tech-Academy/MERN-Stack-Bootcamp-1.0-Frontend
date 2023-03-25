import "../assets/css/Login.css";
import { useNavigate } from "react-router-dom";
import { useReducer } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

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
    const storeDispatch = useDispatch();


    const [state, dispatch] = useReducer(reducerFunction, initialState);

    async function loginReq() {
        try {
            const body = {
                email: state.email,
                password: state.password
            }

            const res = await fetch("http://127.0.0.1:4000/api/users/login", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            });

            const data = await res.json();
            console.log('SUCCESS',data)
            storeDispatch({ type: "LOGIN", payload: { token: data.token, user: data.user}});
            navigate("/dashboard");
        } catch (err) {
            console.log("ERR", err);
            toast.error("Something went wrong!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }
    }

    function submitHandler(event) {
        event.preventDefault();
        loginReq();
        // navigate("/dashboard");
    }

    useEffect(() => {
        if(state.email && state.password && state.password.length >= 4) {
            dispatch({ type: "ERROR_CLEARED" });
        } else {
            dispatch({ type: "ERROR" });
        }
    }, [state.password, state.email])

    return <>
    <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
    />
    <form className="login-form" onSubmit={submitHandler}>
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
    </>
}

export default LoginForm;