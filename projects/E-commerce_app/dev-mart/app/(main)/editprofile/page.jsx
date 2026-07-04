"use client"
import React, { useEffect, useState, useRef } from "react";
import "./editprofile.css"
import { useAuth } from "@/app/authprovider";
import { useRouter } from "next/navigation";
import { app } from "@/app/firebase"
import { Firestore, getDoc, doc, getFirestore, updateDoc } from "firebase/firestore";


const firestore = getFirestore(app)

const Editprofile = () => {//====================================================================
    const userdata = {
        id: 1234,
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz3ATZCehw5N5h__4bDLAwHjU2tTHx2gv-VbLkz49qcw&s=10",
        name: "Ajay Yadav",
        email: "ayajay2006@gmail.com",
        mobile_no: "+91 9911991199",
        gender: "Male"
    }

    const { user, loading } = useAuth()

    const router = useRouter()

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

        setprofile({
            name: data.userName,
            photo: data.profilePhoto,
            email: data.email,
            mobile_no: data.mobile,
            gender: data.gender
        })

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
                        <input className="dgender dtext" value={update.gender} onChange={(e) => { change(e, "gender") }} type="text" />
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