import React from "react";
import "./navbar.css"
import Link from "next/link";

const Navbar= () => {
  return (
    <div className="div">
        <ul className="ul">
           <Link href="/"> <li>home</li></Link>
           <Link href="/about"> <li>about</li></Link>
           <Link href="/contact"> <li>contact</li></Link>
        </ul>
    </div>
  )
}

export default Navbar