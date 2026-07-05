"use client"
import Cartcard from "@/components/cartcard";
import React, { useEffect, useState } from "react";
import "./cart.css"
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/authprovider";
import { app } from "@/app/firebase"
import { Firestore, doc, deleteDoc, getDoc, getDocs, collection, getFirestore } from "firebase/firestore";

const firestore = getFirestore(app)

const Cart = () => {//=====================================================

    const { user, loading } = useAuth()
    const router = useRouter()

    const [cartdata, setcartdata] = useState([])
    const [itemsdata, setitemsdata] = useState([])

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
        const productList = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }))
        setcartdata(productList)

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
        console.log(productDetails)
    }

    const buyfn = async () => {

    }

    const removefn = async (slug) => {
        const docref = doc(firestore, "users", user.email, "cart", slug)
        await deleteDoc(docref)
        readcart(user.email)
    }


    return (
        <>
            <div className="title">Cart</div>

            {itemsdata.map((item) => (
                <Cartcard removebtn={() => { removefn(item.slug) }} key={item.slug} type={item.type} url={item.photo} title={item.name} description={item.description} price={item.price} />

            ))}

            <div className="buyall">
                <button className="buyallbtn">Buy all</button>
            </div>
        </>
    )
}

export default Cart