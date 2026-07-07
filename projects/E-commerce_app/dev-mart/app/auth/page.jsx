"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "./auth.css"
import { app } from "../firebase"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Firestore, addDoc, doc, collection, getFirestore, setDoc } from "firebase/firestore";

const auth = getAuth(app)
const googleprovider = new GoogleAuthProvider()

const firestore = getFirestore(app)

const writeUserData = async (name, email, password, uid) => {
    let result = await setDoc(doc(firestore, "users", email), {
        userName: name,
        email: email,
        password: password,
        profilePhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-TPvhpo33NdVX_qJ9clxyvaJ1-ljChnX-iPhnusqE2w&s",
        mobile: "not set yet",
        gender: "not set yet",
        uid: uid
    })

    await setDoc(doc(firestore, "users", email, "addresses", "addressCount"), {
        addressCount: 1
    })

    await setDoc(doc(firestore, "users", email, "addresses", "address1"), {
        address: "not set"
    })

}

const Auth = () => {

    const [issignup, setsignup] = useState(false)
    const [email, setemail] = useState(null)
    const [password, setpassword] = useState(null)
    const [name, setname] = useState(null)

    const router = useRouter()

    // const user = useAuth()

    const signupbtn = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((value) => { writeUserData(name, email, password, value.user.uid) })
            .then(() => { router.replace("/") })
    }

    const signinbtn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(value => console.log(value))
            .then(() => { router.replace("/") })
    }

    const googlelogin = () => {
        signInWithPopup(auth, googleprovider)
            .then(value => console.log(value))
            .then(router.replace("/"))

    }

    const signuptext = () => {
        setsignup(true)

    }

    const signintext = () => {
        setsignup(false)

    }

    return (
        <div className="main">
            <div className="border">
                <div className="brandname">Dev Mart</div>
                {issignup && (<input
                    type="text"
                    onChange={(e) => {
                        setname(e.target.value)
                    }}
                    className="input name"
                    name="name"
                    placeholder="Name"
                    id="name" />)}
                <input
                    type="email"
                    className="input email"
                    onChange={(e) => {
                        setemail(e.target.value)
                    }}
                    name="email"
                    placeholder="Email"
                    id="email" />
                <input
                    type="password"
                    className="input password"
                    onChange={(e) => {
                        setpassword(e.target.value)
                    }}
                    name="password"
                    placeholder="Password"
                    id="password" />
                {!issignup && (<button className="pointer btn signinbtn" onClick={() => { signinbtn() }}>Sign in</button>)}
                {issignup && (<button id="signup" className="pointer btn  signinbtn" onClick={signupbtn}>Sign up</button>)}
                <div className="moretext">or continue with</div>
                <div className="options">
                    <button className="google optionbtn" onClick={googlelogin}>Google</button>
                    <button className="devid optionbtn">Dev Id</button>
                </div>
                <div className="last">
                    <span className="signuptext">New on Dev Mart </span>
                    {!issignup && (<span className="pointer signupbtn" onClick={signuptext}> Sign up</span>)}
                    {issignup && (<span id="belowsignin" onClick={signintext} className="pointer signupbtn"> Sign in</span>)}
                </div>
            </div>
        </div>
    )
}

export default Auth