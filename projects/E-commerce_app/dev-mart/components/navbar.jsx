"use client"
import React from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {

    const router = useRouter()

    return (
        <div className="navbar">
            <div className="brand">Dev Mart</div>
            <div className="navsidebar">
                <div onClick={() => { router.push("/home") }} className="navtitle homebtn pointer">Home</div>
                <div onClick={() => { router.push("/orders") }} className="navtitle ordersbtn pointer">Orders</div>
                <div onClick={() => { router.push("/profile") }} className="navtitle profilebtn pointer">Profile</div>
                <div className="navtitle ">
                    <button onClick={()=>{router.replace("/cart")}} className="cartbtn pointer">Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar