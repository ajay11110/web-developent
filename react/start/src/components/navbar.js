import React from "react";

const Navbar = (props) => {
    return (
        <div>
            <ul>
                <li>home</li>
                <li>contact</li>
                <li>about</li>
                {/* <li>{e.logotext}</li> */}
                <li>{props.logo}</li>
            </ul>
        </div>
    )
}

export default Navbar;