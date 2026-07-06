"use client"
import React, { useEffect, useState } from "react";
import Ordercard from "@/components/ordercard";
import "./order.css"
import { useAuth } from "@/app/authprovider";
import { useRouter } from "next/navigation";
import { app } from "@/app/firebase"
import { Firestore, getDocs, getDoc, collection, doc, getFirestore } from "firebase/firestore";

const firestore = getFirestore(app)

const Orders = () => {//======================================================================
    const { user, loading } = useAuth()
    const router = useRouter()

    const [itemsdata, setitemsdata] = useState([])

    useEffect(() => {
        if (loading) return

        if (!user) {
            router.replace("/auth")
        }

        readbuy(user.email)

    }, [user, loading])

    const readbuy = async (id) => {
        const collectionref = collection(firestore, "users", id, "buyed")
        const snapshot = await getDocs(collectionref)
        const productList = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }))

        const productDetails = await Promise.all(
            productList.map(async (item) => {
                const productRef = doc(firestore, "products", item.itemId)
                const productSnap = await getDoc(productRef)

                return productSnap.exists()
                    ? { id: productSnap.id, ...productSnap.data() }
                    : null;
            })
        );
        setitemsdata(productDetails)
    }


    return (
        <>
            <div className="header">Your all Orders</div>
            {itemsdata.map((item) => (
                <Ordercard key={item.slug} type={item.type} url={item.photo} title={item.name} description={item.description} price={item.price} />
            ))}
        </>
    )
}

export default Orders