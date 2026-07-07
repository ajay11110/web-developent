"use client"
import React, { useEffect, useState } from "react";
import "./editprofile.css"
import { useAuth } from "@/app/authprovider";
import { useRouter } from "next/navigation";
import { app } from "@/app/firebase"
import { Firestore, getDoc, doc, getFirestore, updateDoc } from "firebase/firestore";


const firestore = getFirestore(app)

const Editprofile = () => {//====================================================================

    const { user, loading } = useAuth()

    const router = useRouter()

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
                        <input className="dname dtext" value={update.name} onChange={(e) => { change(e, "name") }} type="text" />
                        <input className="dmobile dtext" value={update.mobile} onChange={(e) => { change(e, "mobile") }} type="text" />
                        {/* <input className="dgender dtext" value={update.gender} onChange={(e) => { change(e, "gender") }} type="text" /> */}
                        <select value={update.gender} className="dtext" onChange={e => change(e, "gender")} name="list" id="list">
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Not say">Not say</option>
                            <option value="Custom">Custom</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="btns">
                <button className="btn savebtn" onClick={savebtn}>Save</button>
                <button className="btn discardbtn" onClick={() => { router.replace("/profile") }}>Discard</button>
            </div>
        </>
    )
}

export default Editprofile