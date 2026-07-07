"use client"
import React, { useEffect, useState } from "react";
import Buycard from "@/components/buycard";
import { useRouter } from "next/navigation";
import "../buy/[slug]/process.css"
import { useAuth } from "@/app/authprovider";
import { app } from "@/app/firebase"
import { doc, getDoc, collection, Firestore, getDocs, getFirestore, writeBatch } from "firebase/firestore";

const firestore = getFirestore(app)

const Buyall = () => {//=================================================================

    const { user, loading } = useAuth()

    const router = useRouter()

    const [itemsdata, setitemsdata] = useState([])
    const [price, setprice] = useState(0)
    const [load, setload] = useState(true)

    useEffect(() => {
        if (loading) return

        if (!user) {
            router.replace("/auth")
        }

        readcart(user.email)

    })

    const readcart = async (id) => {
        const collectionref = collection(firestore, "users", id, "cart")
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

        const total = productDetails.reduce(
            (sum, product) => sum + (Number(product.price) || 0), 0);
        setprice(total)
        setload(false)
    }

    const proceed = async () => {
        const batch = writeBatch(firestore);

        itemsdata.forEach((item) => {
            const docRef = doc(firestore, "users", user.email, "buyed", item.slug);
            batch.set(docRef,
                { itemId: item.slug }
            );

            const docRef2 = doc(firestore, "users", user.email, "cart", item.slug);
            batch.delete(docRef2)
        });
        console.log("done")
        await batch.commit();
        router.replace("/orders")
    };


    return (
        <>
            {itemsdata.map((item) => (
                <Buycard key={item.slug} type={item.type} url={item.photo} title={item.name} description={item.description} price={item.price} />

            ))}

            <div className="productprice">
                <span className="text">Product price - </span>
                <span className="pricetext">{price}</span>
            </div>
            <div className="gst">
                <span className="text">GST - </span>
                {!load && (<span className="pricetext">{(price) * 18 / 100}</span>)}
            </div>
            <div className="totalprice">
                <span className="text imptext">Total price - </span>
                {!load && (<span className="pricetext impprice">{(price) * 1.18}</span>)}
            </div>
            <div className="proceed">
                <button onClick={proceed} className="proceedbtn">Proceed</button>
            </div>
        </>
    )

}

export default Buyall