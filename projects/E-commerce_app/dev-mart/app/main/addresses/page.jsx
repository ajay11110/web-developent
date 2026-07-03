"use client"
import React from "react";
import "./adress.css"
import Addresscard from "@/components/addresscard";

const Addresses = () => {

    const inputchange = () => {

    }
    const deletefn = () => {

    }
    const editfn = () => {

    }
    return (
        <>
            <div className="startpage">
                <div className="title">Your Addresses</div>
                <Addresscard value={"ajay"} onchange={inputchange} ondelete={deletefn} onedit={editfn} />
                <Addresscard value={"ajay"} onchange={inputchange} ondelete={deletefn} onedit={editfn} />
                <div className="addmore">
                    <button className="addmorebtn">Add more</button>
                </div>
            </div>
        </>
    )
}

export default Addresses