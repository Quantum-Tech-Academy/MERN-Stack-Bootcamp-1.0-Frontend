import "../assets/css/Login.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

function LoginForm() {
    const navigate = useNavigate()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(true)

    function submitHandler(event) {
        event.preventDefault();
        navigate("/dashboard");
    }

    useEffect(() => {
        if(email && password && password.length >= 8) {
            setError(false);
        } else {
            setError(true);
        }
    }, [password, email])

    return <form className="login-form" onSubmit={submitHandler}>
        <div className="form-group">
            <label>Email</label>
            <input type={"text"} placeholder="Enter Email" onChange={(event) => setEmail(event.target.value)} value={email} />
        </div>
        <div className="form-group">
            <label>Password</label>
            <input type={"password"} placeholder="Enter Password" onChange={(event) => setPassword(event.target.value)} value={password} />
        </div>
        <button type="submit" disabled={error}>Login</button>
    </form>
}

export default LoginForm;