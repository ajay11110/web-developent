"use client"
import React, { useEffect, useState } from "react";
import Ordercard from "@/components/ordercard";
import styles from "./order.module.css"
import { useAuth } from "@/app/authprovider";
import { useRouter } from "next/navigation";
import { app } from "@/app/firebase"
import { Firestore, getDocs, getDoc, collection, doc, getFirestore } from "firebase/firestore";
import Loading from "@/components/loading";
import NoDataAvialble from "@/components/nodataavialblle";

const firestore = getFirestore(app)

const Orders = () => {//======================================================================
    const { user, loading } = useAuth()
    const router = useRouter()

    const [itemsdata, setitemsdata] = useState([])
    const [pageloading, setpageloading] = useState(true)
    const [empty, setempty] = useState(0)


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
        setempty(snapshot.docs.length)
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
        setpageloading(false)
    }

    if (pageloading) return <Loading />

    else if (!empty) return <NoDataAvialble message="Please Buy something" />


    return (
        <>
            <div className={styles.header}>Your all Orders</div>
            {itemsdata.map((item) => (
                <Ordercard onclick={()=>{router.replace(`/${item.slug}`)}}  key={item.slug} type={item.type} url={item.photo} title={item.name} description={item.description} price={item.price} />
            ))}
        </>
    )
}

export default Orders