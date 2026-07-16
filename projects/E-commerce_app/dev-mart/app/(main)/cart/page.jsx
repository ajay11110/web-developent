"use client"
import Cartcard from "@/components/cartcard";
import React, { useEffect, useState, useRef } from "react";
import styles from "./cart.module.css"
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/authprovider";
import { app } from "@/app/firebase"
import { Firestore, doc, deleteDoc, getDoc, getDocs, collection, getFirestore } from "firebase/firestore";
import Loading from "@/components/loading";
import NoDataAvialble from "@/components/nodataavialblle";
import Popup from "@/components/popup";

const firestore = getFirestore(app)

const Cart = () => {//=====================================================

    const { user, loading } = useAuth()
    const router = useRouter()
    const popupref = useRef()
    const [itemsdata, setitemsdata] = useState([])
    const [pageloading, setpageloading] = useState(true)
    const [empty, setempty] = useState(0)


    useEffect(() => {
        if (loading) return

        if (!user) {
            router.replace("/auth")
        }

        readcart(user.email)

    }, [user, loading])

    const readcart = async (id) => {
        const collectionref = collection(firestore, "users", id, "cart")
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

    const buyfn = (slug) => {
        router.replace(`buy/${slug}`)
    }

    const removefn = async (slug) => {
        const docref = doc(firestore, "users", user.email, "cart", slug)
        await deleteDoc(docref)
        readcart(user.email)
        popupref.current.popup("Item removed from Cart")
    }

    const buyallfn = () => {
        router.replace("/buyall")
    }

    if (pageloading) {
        return <Loading />
    }

    else if (!empty) return <NoDataAvialble message="Please add Products to Cart" />

    else return (
        <>
            <div className={styles.title}>Cart</div>
            {itemsdata.map((item) => (
                <Cartcard removebtn={() => { removefn(item.slug) }} buybtn={() => { buyfn(item.slug) }} key={item.slug} type={item.type} url={item.photo} title={item.name} description={item.description} price={item.price} />
            ))}
            <Popup ref={popupref} />
            <div className={styles.buyall}>
                <button onClick={buyallfn} className={styles.buyallbtn}>Buy all</button>
            </div>
        </>
    )
}

export default Cart