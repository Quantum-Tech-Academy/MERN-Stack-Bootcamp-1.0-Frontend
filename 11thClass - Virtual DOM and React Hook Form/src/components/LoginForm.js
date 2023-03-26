import "../assets/css/Login.css";
import { useNavigate } from "react-router-dom";
import { useReducer } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { useForm } from "react-hook-form";

function LoginForm() {
    const navigate = useNavigate()
    const storeDispatch = useDispatch();

    // React hook form
    const { handleSubmit, register, setError, formState: { errors } } = useForm({
        criteriaMode: 'all',
      });
    // const obj = {
    //     handleSubmit: () => {},
    //     register: () => {},
    //     formState: {
    //         errors: {}
    //     }
    // }
    console.log("ERR", errors)

    async function loginReq(body) {
        try {

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

    function submitHandler(data) {
        console.log("SUBMITTED", data);
        // loginReq(data);
        // navigate("/dashboard");
    }

    useEffect(() => {
        if(errors.password) {
            setError("password", {
                type: {
                    required: "Password is required",
                    minLength: "Password must contain min 4 chars"
                }
            })
        }
    }, [setError])

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
    <form className="login-form" onSubmit={handleSubmit(submitHandler)}>
        <div className="form-group">
            <label>Email</label>
            <input type={"text"} placeholder="Enter Email" {...register("email", { required: true, })} />
        </div>
        <div className="form-group">
            <label>Password</label>
            <input type={"password"} placeholder="Enter Password" {...register("password", { required: true, minLength: 4, })}/>
        </div>
        <button type="submit" disabled={Object.keys(errors).length}>Login</button>
    </form>
    </>
}

export default LoginForm;