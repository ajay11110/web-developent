"use client"
import React, { useState, useEffect } from "react";
import "./adress.css"
import Addresscard from "@/components/addresscard";
import { useAuth } from "@/app/authprovider";
import { app } from "../../firebase"
import { Firestore, getDocs, getDoc, setdoc, doc, collection, getFirestore, updateDoc } from "firebase/firestore";

const firestore = getFirestore(app)

let docref

const Addresses = () => {//===============================================================

    const { user, loading } = useAuth()
    const [addresses, setaddresses] = useState({})
    const [newAddress, setnewaddress] = useState(null)
    const [addressCount, setaddresscount] = useState(null)

    useEffect(() => {
        if (loading) return

        docref = doc(firestore, "users", user.email, "addresses", "address")

        loadAddress(docref)

    }, [user, loading])

    const inputchange = () => {

    }
    const deletefn = () => {

    }
    const editfn = () => {

    }

    const addMorebtn = async () => {
        const newadd = "new address"
        setnewaddress(newadd)
         let newcount = addressCount + 1
         let keyname = addressMaker(newcount) 
         setaddresscount(newcount)
        console.log(keyname)
        await writeNewAddress(docref, keyname, newadd, newcount)
        await loadAddress(docref)
    }

    const loadAddress = async (docref) => {
        let docoutput = await getDoc(docref)
            .then((e) => {
                setaddresses(e.data())
                setaddresscount(e.data().addressCount)
            })
    }

    const addressMaker = (newcount) => {
        return ("address" + newcount)
    }

    const writeNewAddress = async (docref, name, newadd, newcount) => {
        await updateDoc(docref, {
            [name]: newadd,
            addressCount: newcount
        })
        console.log("done writing")
    }


    return (
        <>
            <div className="startpage">
                <div className="title">Your Addresses</div>
                {
                    Object.entries(addresses)
                        .filter(([key]) => key !== "addressCount")
                        .map(([keys, values]) => (
                            <Addresscard key={keys} value={values} onchange={(e) => { inputchange(e) }} ondelete={deletefn} onedit={editfn} />

                        ))
                }
                {/* <Addresscard value={"ajay"} onchange={inputchange} ondelete={deletefn} onedit={editfn} /> */}
                <div className="addmore">
                    <button onClick={addMorebtn} className="addmorebtn">Add more</button>
                </div>
            </div>
        </>
    )
}

export default Addresses