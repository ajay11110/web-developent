"use client"
import React, { useEffect, useState } from "react";
import Buycard from "@/components/buycard";
import { useParams, useRouter } from "next/navigation";
import styles from "./process.module.css"
import { useAuth } from "@/app/authprovider";
import { app } from "@/app/firebase"
import { doc, Firestore, getDoc, getFirestore, setDoc, deleteDoc } from "firebase/firestore";
import Loading from "@/components/loading";

const firestore = getFirestore(app)

const Process = () => {//==================================================================

    const { slug } = useParams()
    const { user, loading } = useAuth()

    const router = useRouter()

    const [productdata, setproductdata] = useState({})
    const [load, setload] = useState(true)

    useEffect(() => {
        if (loading) return

        if (!user) {
            router.replace("/auth")
        }

        readData()

    })

    const readData = async () => {
        const docref = doc(firestore, "products", slug)
        const snapshot = await getDoc(docref)
        setproductdata(snapshot.data());
        setload(false)
    }

    const proceed = async () => {
        const docref = doc(firestore, "users", user.email, "buyed", slug)
        await setDoc(docref, {
            itemId: slug
        })
        await removefn(slug)
        router.replace("/orders")
    }

    const removefn = async (slug) => {
        const docref = doc(firestore, "users", user.email, "cart", slug)
        await deleteDoc(docref)
    }

    if (load) {
        return <Loading />
    }

    else return (
        <>
            <div className="start">
                <Buycard type={productdata.type} url={productdata.photo} title={productdata.name} description={productdata.description} price={productdata.price} />
            </div>
            <div className="productprice">
                <span className={styles.text}>Product price - </span>
                <span className={styles.pricetext}>{productdata.price}</span>
            </div>
            <div className="gst">
                <span className={styles.text}>GST - </span>
                {!load && (<span className={styles.pricetext}>{(productdata.price) * 18 / 100}</span>)}
            </div>
            <div className="totalprice">
                <span className={`${styles.text} ${styles.imptext}`}>Total price - </span>
                {!load && (<span className={styles.pricetext}>{(productdata.price) * 1.18}</span>)}
            </div>
            <div className={styles.proceed}>
                <button onClick={proceed} className={styles.proceedbtn}>Proceed</button>
            </div>
        </>
    )
}

export default Process