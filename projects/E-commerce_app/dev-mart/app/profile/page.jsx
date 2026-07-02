"use client"
import React from "react";
import { useRouter } from "next/navigation";
import "./profile.css"

const Profile = () => {

    const router = useRouter()

    const userdata = {
        id: 1234,
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz3ATZCehw5N5h__4bDLAwHjU2tTHx2gv-VbLkz49qcw&s=10",
        name: "Ajay Yadav",
        email: "ayajay2006@gmail.com",
        mobile_no: "+91 9911991199",
        gender: "Male"
    }
    return (
        <>
            <div className="profile">
                <div className="upper">
                    <div className="userphoto">
                        <img className="photo" src={userdata.photo} alt="user profile photo" />
                    </div>
                    <div className="uname">{userdata.name}</div>

                </div>

                <div className="middle common">
                    <div className="mtitle title">Personal Information</div>
                    <div className="labdata">
                        <div className="lable">
                            <div className="name ltext">Name</div>
                            <div className="email ltext">Email</div>
                            <div className="mobile ltext">Phone No.</div>
                            <div className="gender ltext"> Gender</div>
                        </div>
                        <div className="data">
                            <div className="dname dtext">{userdata.name}</div>
                            <div className="demail dtext">{userdata.email}</div>
                            <div className="dmobile dtext">{userdata.mobile_no}</div>
                            <div className="dgender dtext">{userdata.gender}</div>
                        </div>
                    </div>
                </div>

                <div className="middlesecond ">
                    <button onClick={() => { router.push("/cart") }} className="m2btn pointer common cart">Cart</button>
                    <button onClick={() => { router.push("/wishlist") }} className="m2btn common pointer cart">Wishlist</button>
                    <button onClick={() => { router.push("/orders") }} className="m2btn common pointer cart">Orders</button>
                    <button onClick={() => { router.push("/addresses") }} className="m2btn common pointer cart">Addresses</button>
                </div>

                <div className="lower">
                    <button className="lbtn pointer editprofile">Edit Profile</button>
                    <button className="lbtn pointer logout">Logout</button>
                </div>
            </div>
        </>
    )
}

export default Profile