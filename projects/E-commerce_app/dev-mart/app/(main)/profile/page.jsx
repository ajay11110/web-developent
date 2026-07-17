"use client"
import { app } from "../../firebase"
import { getAuth, signOut } from "firebase/auth";
import { Firestore, getDoc, doc, getFirestore } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./profile.module.css"
import { useAuth } from "@/app/authprovider";
import Loading from "@/components/loading";


const auth = getAuth(app)
const firestore = getFirestore(app)

const Profile = () => {//===========================================================

    const { user, loading } = useAuth()


    useEffect(() => {

        if (loading) return

        if (!user) {
            router.replace("/auth")
        }

        readUserData()

    }, [user, loading])

    const [profile, setprofile] = useState({
        name: "",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-TPvhpo33NdVX_qJ9clxyvaJ1-ljChnX-iPhnusqE2w&s",
        email: "",
        mobile_no: "",
        gender: ""
    })

    const [pageloading, setpageloading] = useState(true)

    const router = useRouter()

    const logout = async () => {
        router.replace("/auth")
        signOut(auth)
    }

    const readUserData = async () => {
        if (!user || !user.email) return

        let docref = doc(firestore, "users", user.email)
        const snapshot = await getDoc(docref)
        const data = snapshot.data()

        if (!data) {
            setpageloading(false)
            return
        }

        setprofile({
            name: data.userName,
            photo: data.profilePhoto,
            email: data.email,
            mobile_no: data.mobile,
            gender: data.gender
        })
        setpageloading(false)
    }

    if (pageloading) return <Loading />

    return (
        <>
            <div className={styles.profile}>
                <div className={styles.upper}>
                    <div>
                        <img className={styles.photo} src={profile.photo} alt="user profile photo" />
                    </div>
                    <div className={styles.uname}>{profile.name}</div>

                </div>

                <div className={styles.common}>
                    <div className={styles.mtitle}>Personal Information</div>
                    <div className={styles.labdata}>
                        <div className={styles.lable}>
                            <div className={styles.ltext}>Name</div>
                            <div className={styles.ltext}>Email</div>
                            <div className={styles.ltext}>Phone No.</div>
                            <div className={styles.ltext}> Gender</div>
                        </div>
                        <div className={styles.data}>
                            <div className={styles.dtext}>{profile.name}</div>
                            <div className={styles.dtext}>{profile.email}</div>
                            <div className={styles.dtext}>{profile.mobile_no}</div>
                            <div className={styles.dtext}>{profile.gender}</div>
                        </div>
                    </div>
                </div>

                <div className={styles.middlesecond}>
                    <button onClick={() => { router.push("/cart") }} className={`${styles.m2btn} pointer ${styles.common} cart`}>Cart</button>
                    <button onClick={() => { router.push("/wishlist") }} className={`${styles.m2btn} ${styles.common} pointer cart`}>Wishlist</button>
                    <button onClick={() => { router.push("/orders") }} className={`${styles.m2btn} ${styles.common} pointer cart`}>Orders</button>
                    <button onClick={() => { router.push("/addresses") }} className={`${styles.m2btn} ${styles.common} pointer cart`}>Addresses</button>
                </div>

                <div className={styles.lower}>
                    <button onClick={() => { router.push("/editprofile") }} className={`${styles.lbtn} pointer ${styles.editprofile}`}>Edit Profile</button>
                    <button className={`${styles.lbtn} pointer ${styles.logout}`} onClick={logout}>Logout</button>
                </div>

                <div className={`${styles.lower} list`}>
                    <button className={`${styles.lbtn} ${styles.list}`} onClick={() => { router.replace("/lists") }}>List Product</button>
                </div>
            </div>
        </>
    )
}

export default Profile