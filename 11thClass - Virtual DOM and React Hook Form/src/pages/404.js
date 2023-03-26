import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";

function NotFound() {
    return <>
        <Navbar />
        <h1>OOPS, Error 404. Page not found</h1>
        <NavLink to={"/"}>Go to Dashboard</NavLink>
    </>
}

export default NotFound;