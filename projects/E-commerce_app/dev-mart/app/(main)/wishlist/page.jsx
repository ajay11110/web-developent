"use client"
import Wishlistcard from "@/components/wishlistcard";
import React, { useEffect, useState } from "react";
import "./wishlist.css"
import { app } from "@/app/firebase"
import { Firestore, writeBatch, setDoc, getDocs, collection, getFirestore, doc, getDoc, deleteDoc } from "firebase/firestore";
import { useAuth } from "@/app/authprovider";
import { useRouter } from "next/navigation";

const firestore = getFirestore(app)

const Wishlist = () => {//=====================================================

    const { user, loading } = useAuth()
    const router = useRouter()

    const [items, setitems] = useState([])

    useEffect(() => {
        if (loading) return

        if (!user) {
            router.replace("/auth")
        }

        readWishlist()
    }, [user, loading])

    const readWishlist = async () => {
        const collectionref = collection(firestore, "users", user.email, "wishlist")
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
            }))

        setitems(productDetails)
    }

    const cartfn = async (id) => {
        const docref = doc(firestore, "users", user.email, "cart", id)
        await setDoc(docref, {
            itemId: id
        })
        await removefn(id)
    }

    const removefn = async (id) => {
        const docref = doc(firestore, "users", user.email, "wishlist", id)
        deleteDoc(docref)
        readWishlist()
    }

    const addAll = async () => {
        const batch = writeBatch(firestore);

        items.forEach((item) => {
            const docRef = doc(firestore, "users", user.email, "cart", item.slug);
            batch.set(docRef,
                { itemId: item.slug }
            );

            const docRef2 = doc(firestore, "users", user.email, "wishlist", item.slug);
            batch.delete(docRef2)
        });
        await batch.commit();
        router.replace("/cart")
    }


    return (
        <>
            <div className="title">Wishlist</div>
            {items.map((item) => (
                <Wishlistcard key={item.slug} oncart={() => { cartfn(item.slug) }} onremove={() => { removefn(item.slug) }} type={item.type} url={item.photo} title={item.name} description={item.description} price={item.price} />
            ))}
            <div className="buyall">
                <button onClick={addAll} className="buyallbtn">Add all to Cart</button>
            </div>
        </>
    )
}

export default Wishlist