import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
    return <>

    <NavLink to="/contact">Contact</NavLink>
    <NavLink to="/login">Login</NavLink>
    
    <div className="hello">i am navbar</div>
    </>
}

export default Nav