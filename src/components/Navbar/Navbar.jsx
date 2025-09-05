
import React from "react";

import { NavLink} from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
        
            <NavLink to="/">accueil
            </NavLink>
            <NavLink to="/about">à propos
            </NavLink>  </nav>
    )
}
export default Navbar;   