"use client"
import { app } from "../../firebase"
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { Firestore, getDoc, doc, getFirestore } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "./profile.css"
import { useAuth } from "@/app/authprovider";


const auth = getAuth(app)
const firestore = getFirestore(app)

const Profile = () => {//===========================================================

    const { user, loading } = useAuth()


    useEffect(() => {

        if (loading) return

        if (!user) {
            router.replace("/auth")
        }

        readUserData(user.uid)

    }, [user, loading])

    const [profile, setprofile] = useState({
        name: "",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-TPvhpo33NdVX_qJ9clxyvaJ1-ljChnX-iPhnusqE2w&s",
        email: "",
        mobile_no: "",
        gender: ""
    })

    const router = useRouter()

    const logout = async () => {
        router.replace("/auth")
        signOut(auth)
    }

    const readUserData = async (uid) => {
        let docref = doc(firestore, "users", uid)
        const snapshot = await getDoc(docref)
        const data = snapshot.data()

        setprofile({
            name: data.userName,
            photo: data.profilePhoto,
            email: data.email,
            mobile_no: data.mobile,
            gender: data.gender
        })
    }



    return (
        <>
            <div className="profile">
                <div className="upper">
                    <div className="userphoto">
                        <img className="photo" src={profile.photo} alt="user profile photo" />
                    </div>
                    <div className="uname">{profile.name}</div>

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
                            <div className="dname dtext">{profile.name}</div>
                            <div className="demail dtext">{profile.email}</div>
                            <div className="dmobile dtext">{profile.mobile_no}</div>
                            <div className="dgender dtext">{profile.gender}</div>
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
                    <button onClick={() => { router.push("/editprofile") }} className="lbtn pointer editprofile">Edit Profile</button>
                    <button className="lbtn pointer logout" onClick={logout}>Logout</button>
                </div>

                <div className=" lower list">
                    <button className="lbtn listbtn" onClick={()=>{router.replace("/lists")}}>List Product</button>
                </div>
            </div>
        </>
    )
}

export default Profile