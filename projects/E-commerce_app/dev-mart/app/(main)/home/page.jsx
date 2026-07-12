"use client"

import styles from "./home.module.css"
import Itemcard from "@/components/itemcard";
import Loading from "@/components/loading";
import Link from "next/link";
import { app } from "../../firebase"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Firestore, getDocs, doc, getFirestore, collection, setDoc } from "firebase/firestore";

const auth = getAuth(app)
const firestore = getFirestore(app)
let userid

const Home = () => {//====================================================

    const [allproduct, setallproducts] = useState([])

    const router = useRouter()

    const [pageloading, setpageloading] = useState(true);

    useEffect(() => {
        const stop = onAuthStateChanged(auth, user => {
            if (user) {
                userid = user.email
                readdata()
            }

            else {
                router.replace("/auth")
            }
        }
        )

        return () => { stop() }
    }, [router])

    const readdata = async () => {
        const snapshot = await getDocs(collection(firestore, "products"))

        const productList = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }))
        setallproducts(productList)
        setpageloading(false)
    }

    const buybtnfn = async (e, id) => {
        e.stopPropagation();
        router.replace(`/buy/${id}`)
    }

    const cartbtnfn = async (e, id, userId) => {
        e.stopPropagation()
        const docref = doc(firestore, "users", userId, "cart", id)
        await setDoc(docref, {
            itemId: id
        })
    }

    const wishfn = async (e, id) => {
        e.stopPropagation()
        const docref = doc(firestore, "users", userid, "wishlist", id)
        await setDoc(docref, {
            itemId: id
        })
    }

    if (pageloading) {
        return (
            <>
                <Loading />
            </>
        )
    }

    else return (
        <div className={styles.start}>
            <div className={styles.searchbox}>
                <div className={styles.sbox}>
                    <input placeholder="Search Product" type="text" name="Search" id="search" />
                    <svg className={`${styles.searchsvg} pointer`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" color="#000000" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 17L21 21"></path>
                        <path d="M19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19C15.4183 19 19 15.4183 19 11Z"></path>
                    </svg>
                </div>
            </div>

            <div className="homebelow">
                <div className={styles.catagory}>
                    <Link className={styles.capsules} href="#phones">Phones</Link>
                    <Link href="#watches" className={styles.capsules}>Watches</Link>
                    <Link href="#clothes" className={styles.capsules} >Clothes</Link>
                    <Link href="#books" className={styles.capsules}>Books</Link>
                    <Link href="#homedecor" className={styles.capsules}>Home Decore</Link>
                </div>
                <div className="listing">
                    <section id="all">
                        <section id="phones">
                            <div className={styles.sectiontitle}>Phones</div>
                            <div className={styles.sec}>
                                {allproduct
                                    .filter((item) => item.type === "phone")
                                    .map((item) => (
                                        <Itemcard onwish={(e) => { wishfn(e, item.slug) }} buybtn={(e) => { buybtnfn(e, item.slug) }} cartbtn={(e) => { cartbtnfn(e, item.slug, userid) }} onclick={() => { router.replace(item.slug) }} key={item.slug} type={item.type} url={item.photo} title={item.name} description={item.description} price={item.price} />
                                    ))}
                            </div>
                        </section>

                        <section id="watches">
                            <div className={styles.sectiontitle}>Watches</div>
                            <div className={styles.sec}>
                                {allproduct
                                    .filter((item) => item.type === "watch")
                                    .map((item) => (
                                        <Itemcard onwish={(e) => { wishfn(e, item.slug) }} buybtn={(e) => { buybtnfn(e, item.slug, userid) }} cartbtn={(e) => { cartbtnfn(e, item.slug, userid) }} onclick={() => { router.replace(item.slug) }} key={item.slug} type={item.type} url={item.photo} title={item.name} description={item.description} price={item.price} />
                                    ))}
                            </div>
                        </section>
                        <section id="clothes">
                            <div className={styles.sectiontitle}>Clothes</div>
                            <div className={styles.sec}>
                                {allproduct
                                    .filter((item) => item.type === "cloth")
                                    .map((item) => (
                                        <Itemcard onwish={(e) => { wishfn(e, item.slug) }} buybtn={(e) => { buybtnfn(e, item.slug, userid) }} cartbtn={(e) => { cartbtnfn(e, item.slug, userid) }} onclick={() => { router.replace(item.slug) }} key={item.slug} type={item.type} url={item.photo} title={item.name} description={item.description} price={item.price} />
                                    ))}
                            </div>
                        </section>
                        <section id="books">
                            <div className={styles.sectiontitle}>Books</div>
                            <div className={styles.sec}>
                                {allproduct
                                    .filter((item) => item.type === "book")
                                    .map((item) => (
                                        <Itemcard onwish={(e) => { wishfn(e, item.slug) }} buybtn={(e) => { buybtnfn(e, item.slug, userid) }} cartbtn={(e) => { cartbtnfn(e, item.slug, userid) }} onclick={() => { router.replace(item.slug) }} key={item.slug} type={item.type} url={item.photo} title={item.name} description={item.description} price={item.price} />
                                    ))}
                            </div>
                        </section>
                        <section id="homedecor">
                            <div className={styles.sectiontitle}>Home Decor</div>
                            <div className={styles.sec}>
                                {allproduct
                                    .filter((item) => item.type === "home decor")
                                    .map((item) => (
                                        <Itemcard onwish={(e) => { wishfn(e, item.slug) }} buybtn={(e) => { buybtnfn(e, item.slug, userid) }} cartbtn={(e) => { cartbtnfn(e, item.slug, userid) }} onclick={() => { router.replace(item.slug) }} key={item.slug} type={item.type} url={item.photo} title={item.name} description={item.description} price={item.price} />
                                    ))}
                            </div>
                        </section>

                    </section>
                </div>
            </div>
        </div >
    )
}

export default Home