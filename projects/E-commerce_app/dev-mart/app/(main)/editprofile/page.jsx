"use client"
import React, { useEffect, useState } from "react";
import styles from "./editprofile.module.css"
import { useAuth } from "@/app/authprovider";
import { useRouter } from "next/navigation";
import { app } from "@/app/firebase"
import { Firestore, getDoc, doc, getFirestore, updateDoc } from "firebase/firestore";
import Loading from "@/components/loading";


const firestore = getFirestore(app)

const Editprofile = () => {//====================================================================

    const { user, loading } = useAuth()

    const router = useRouter()

    const [pageloading, setpageloading] = useState(true)

    useEffect(() => {

        if (loading) return

        if (!user) {
            router.replace("/auth")
        }

        readUserData(user.email)

    }, [user, loading])

    const [update, setupdate] = useState({
        name: "",
        mobile: "",
        gender: "",
    })

    const [docrefsave, setdocref] = useState(null)

    const readUserData = async (uid) => {

        let docref = doc(firestore, "users", uid)
        setdocref(docref)
        const snapshot = await getDoc(docref)
        const data = snapshot.data()

        setupdate({
            name: data.userName,
            mobile: data.mobile,
            gender: data.gender
        })

        setpageloading(false)
    }

    const savebtn = async () => {
        await updateDoc(docrefsave, {
            userName: update.name,
            mobile: update.mobile,
            gender: update.gender
        })

            .then(() => {
                router.replace("/profile")
            })

    }

    const change = (e, type) => {
        if (type === "name") {
            setupdate((previous) => ({ ...previous, [type]: e.target.value }))
        }
        else if (type === "mobile") {
            setupdate((previous) => ({ ...previous, [type]: e.target.value }))
        }
        else if (type === "gender") {
            setupdate((previous) => ({ ...previous, [type]: e.target.value }))
        }
    }

    if (pageloading) return <Loading />

    return (
        <>
            <div className="middle common">
                <div className={styles.labdata}>
                    <div className={styles.lable}>
                        <div className= {styles.ltext}>Name</div>
                        <div className={styles.ltext}>Phone No.</div>
                        <div className={styles.ltext}> Gender</div>
                    </div>
                    <div className={styles.data}>
                        <input className={styles.dtext} value={update.name} onChange={(e) => { change(e, "name") }} type="text" />
                        <input className={styles.dtext} value={update.mobile} onChange={(e) => { change(e, "mobile") }} type="text" />
                        <select value={update.gender} className={styles.dtext} onChange={e => change(e, "gender")} name="list" id="list">
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Not say">Not say</option>
                            <option value="Custom">Custom</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className={styles.btns}>
                <button className={`${styles.btn} ${styles.savebtn}`} onClick={savebtn}>Save</button>
                <button className={`${styles.btn} ${styles.discardbtn}`} onClick={() => { router.replace("/profile") }}>Discard</button>
            </div>
        </>
    )
}

export default Editprofile