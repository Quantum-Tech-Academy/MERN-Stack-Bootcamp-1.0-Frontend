import "../assets/css/Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
    return <div className="navbar">
        <h3>Brand Logo</h3>
        <div>
            <ul>
                <li><NavLink to={"/"}>Home</NavLink></li>
                <li><NavLink to={"/users"}>Users</NavLink></li>
                <li><NavLink to="/shops">Shops</NavLink></li>
            </ul>
        </div>
    </div>
}

export default Navbar;