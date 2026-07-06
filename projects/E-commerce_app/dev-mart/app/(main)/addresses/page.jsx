"use client"
import React, { useState, useEffect } from "react";
import "./adress.css"
import Addresscard from "@/components/addresscard";
import { useAuth } from "@/app/authprovider";
import { app } from "../../firebase"
import { Firestore, getDocs, getDoc, setdoc, doc, collection, getFirestore, updateDoc, setDoc, deleteDoc } from "firebase/firestore";

const firestore = getFirestore(app)

const Addresses = () => {//===============================================================

    const { user, loading } = useAuth()
    const [addresses, setaddresses] = useState([])
    const [newAddress, setnewaddress] = useState("")
    const [addressCount, setaddresscount] = useState(0)

    useEffect(() => {
        if (loading) return

        loadAddress()

    }, [user, loading])

    const inputchange = (id, newValue) => {
        setaddresses((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, address: newValue } : item
            )
        )
    }

    const deletefn = async (id) => {
        console.log("delete clicked")

        await deleteDoc(doc(firestore, "users", user.email, "addresses", id))
        await updateDoc(doc(firestore, "users", user.email, "addresses", "addressCount"), {
            addressCount: addressCount - 1
        })
        await loadAddress()
    }
    const editfn = async (id) => {
        const item = addresses.find((a) => a.id === id)
        await setDoc(doc(firestore, "users", user.email, "addresses", id), {
            address: item.address
        })
    }
    const addMorebtn = async () => {
        const newadd = "new address"
        setnewaddress(newadd)
        let newcount = addressCount + 1
        let keyname = addressMaker(newcount)
        setaddresscount(newcount)
        console.log(keyname)
        await writeNewAddress(keyname, newadd, newcount)
        await loadAddress()
    }

    const loadAddress = async () => {
        const collectionref = collection(firestore, "users", user.email, "addresses")
        const docsoutput = await getDocs(collectionref)
        const addressList = docsoutput.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }))
        setaddresses(addressList)
        setaddresscount(addressList.filter((item) => item.id === "addressCount")[0].addressCount)
    }

    const addressMaker = (newcount) => {
        return ("address" + newcount)
    }

    const writeNewAddress = async (name, newadd, newcount) => {
        await setDoc((doc(firestore, "users", user.email, "addresses", name)), {
            address: newadd
        })

        await updateDoc(doc(firestore, "users", user.email, "addresses", "addressCount"), {
            addressCount: newcount
        })

    }

    return (
        <>
            <div className="startpage">
                <div className="title">Your Addresses</div>
                {
                    addresses
                        .filter((item) => item.id !== "addressCount")
                        .map((item) => (
                            <Addresscard key={item.id} value={item.address} onchange={(e) => { inputchange(item.id, e.target.value) }} ondelete={() => { deletefn(item.id) }} onedit={() => { editfn(item.id) }} />
                        ))
                }
                <div className="addmore">
                    <button onClick={addMorebtn} className="addmorebtn">Add more</button>
                </div>
            </div>
        </>
    )
}

export default Addresses