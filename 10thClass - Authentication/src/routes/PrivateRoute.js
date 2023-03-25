import { useSelector } from "react-redux";
import { Navigate, Route } from "react-router";

export default function PrivateRoute({ children }) {
    const { token } = useSelector(state => state);

    return <>{token ? children : <Navigate to={"/login"} />}</>
}