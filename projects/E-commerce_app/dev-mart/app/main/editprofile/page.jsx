"use client"
import React from "react";
import "./editprofile.css"

const Editprofile = () => {
    const userdata = {
        id: 1234,
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz3ATZCehw5N5h__4bDLAwHjU2tTHx2gv-VbLkz49qcw&s=10",
        name: "Ajay Yadav",
        email: "ayajay2006@gmail.com",
        mobile_no: "+91 9911991199",
        gender: "Male"
    }

    const change = (type) => {
        if (type === "name") {

        }
        else if (type === "mobile") {

        }
        else if (type === "gender") {

        }
    }
    return (
        <>
            <div className="middle common">
                <div className="labdata">
                    <div className="lable">
                        <div className="name ltext">Name</div>
                        <div className="mobile ltext">Phone No.</div>
                        <div className="gender ltext"> Gender</div>
                    </div>
                    <div className="data">
                        <input className="dname dtext" value={userdata.name} onChange={() => { change(name) }} type="text" />
                        <input className="dmobile dtext" value={userdata.mobile_no} onChange={() => { change(mobile) }} type="text" />
                        <input className="dgender dtext" value={userdata.gender} onChange={() => { change(gender) }} type="text" />
                    </div>
                </div>
            </div>

            <din className="btns">
                <button className="btn savebtn">Save</button>
                <button className="btn discardbtn">Discard</button>
            </din>
        </>
    )
}

export default Editprofile