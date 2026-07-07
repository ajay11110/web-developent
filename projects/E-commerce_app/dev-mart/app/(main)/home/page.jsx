"use client"

import "./home.css"
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

    const [islogin, setIsLogin] = useState(false);

    useEffect(() => {
        const stop = onAuthStateChanged(auth, user => {
            if (user) {
                userid = user.email
                setIsLogin(true)
                readdata()
            }

            else {
                console.log("user is not logged in")
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

    if (!islogin) {
        return (
            <>
                <Loading />
            </>
        )
    }

    else return (
        <div className="start">
            <div className="searchbox">
                <div className="sbox">
                    <input placeholder="Search Product" type="text" name="Search" id="search" />
                    <svg className="searchsvg pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" color="#000000" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 17L21 21"></path>
                        <path d="M19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19C15.4183 19 19 15.4183 19 11Z"></path>
                    </svg>
                </div>
            </div>

            <div className="homebelow">
                <div className="catagory">
                    <Link className="capsules phones" href="#phones">Phones</Link>
                    <Link href="#watches" className="capsules wathes">Watches</Link>
                    <Link href="#clothes" className="capsules clothes">Clothes</Link>
                    <Link href="#books" className="capsules books">Books</Link>
                    <Link href="#homedecor" className="capsules homedecore">Home Decore</Link>
                </div>
                <div className="listing">
                    <section id="all">
                        <section id="phones">
                            <div className="sectiontitle">Phones</div>
                            <div className="phonessec sec">
                                {allproduct
                                    .filter((item) => item.type === "phone")
                                    .map((item) => (
                                        <Itemcard onwish={(e) => { wishfn(e, item.slug) }} buybtn={(e) => { buybtnfn(e, item.slug) }} cartbtn={(e) => { cartbtnfn(e, item.slug, userid) }} onclick={() => { router.replace(item.slug) }} key={item.slug} type={item.type} url={item.photo} title={item.name} description={item.description} price={item.price} />
                                    ))}
                            </div>
                        </section>

                        <section id="watches">
                            <div className="sectiontitle">Watches</div>
                            <div className="watchessec sec">
                                {allproduct
                                    .filter((item) => item.type === "watch")
                                    .map((item) => (
                                        <Itemcard onwish={(e) => { wishfn(e, item.slug) }} buybtn={(e) => { buybtnfn(e, item.slug, userid) }} cartbtn={(e) => { cartbtnfn(e, item.slug, userid) }} onclick={() => { router.replace(item.slug) }} key={item.slug} type={item.type} url={item.photo} title={item.name} description={item.description} price={item.price} />
                                    ))}
                            </div>
                        </section>
                        <section id="clothes">
                            <div className="sectiontitle">Clothes</div>
                            <div className="clothesssec sec">
                                {allproduct
                                    .filter((item) => item.type === "cloth")
                                    .map((item) => (
                                        <Itemcard onwish={(e) => { wishfn(e, item.slug) }} buybtn={(e) => { buybtnfn(e, item.slug, userid) }} cartbtn={(e) => { cartbtnfn(e, item.slug, userid) }} onclick={() => { router.replace(item.slug) }} key={item.slug} type={item.type} url={item.photo} title={item.name} description={item.description} price={item.price} />
                                    ))}
                            </div>
                        </section>
                        <section id="books">
                            <div className="sectiontitle">Books</div>
                            <div className="bookssec sec">
                                {allproduct
                                    .filter((item) => item.type === "book")
                                    .map((item) => (
                                        <Itemcard onwish={(e) => { wishfn(e, item.slug) }} buybtn={(e) => { buybtnfn(e, item.slug, userid) }} cartbtn={(e) => { cartbtnfn(e, item.slug, userid) }} onclick={() => { router.replace(item.slug) }} key={item.slug} type={item.type} url={item.photo} title={item.name} description={item.description} price={item.price} />
                                    ))}
                            </div>
                        </section>
                        <section id="homedecor">
                            <div className="sectiontitle">Home Decor</div>
                            <div className="homedecorsec sec">
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