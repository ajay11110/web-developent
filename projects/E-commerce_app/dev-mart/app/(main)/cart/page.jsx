"use client"
import Cartcard from "@/components/cartcard";
import React, { useEffect } from "react";
import "./cart.css"
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/authprovider";
import { app } from "@/app/firebase"
import { Firestore, getDocs, collection, getFirestore } from "firebase/firestore";

const firestore = getFirestore(app)

const Cart = () => {//=====================================================

    const { user, loading } = useAuth()
    const router = useRouter()

    useEffect(() => {
        if (loading) return

        if (!user) {
            router.replace("/auth")
        }


    }, [user, loading])

    const readcart = async (id) => {
        const collectionref = collection(firestore, "users", id, "cart")
        const snapshot = await getDocs(collectionref)
    }
    return (
        <>
            <div className="title">Cart</div>
            <Cartcard type="phone" url="https://media-ik.croma.com/Croma%20Assets/Communication/Mobiles/Images/314521_0_v6eqtj.png" title="Nothing 3A silk" description="it is cool phone" price={1000} />
            <div className="buyall">
                <button className="buyallbtn">Buy all</button>
            </div>
        </>
    )
}

export default Cart