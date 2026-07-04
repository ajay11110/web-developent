"use client"

import "./home.css"
import Itemcard from "@/components/itemcard";
import Loading from "@/components/loading";
import { app } from "../../firebase"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Firestore, getDocs, doc, getFirestore, collection } from "firebase/firestore";

const auth = getAuth(app)
const firestore = getFirestore(app)

const Home = () => {//====================================================

    const [allproduct, setallproducts] = useState(null)

    const router = useRouter()

    const [islogin, setIsLogin] = useState(false);

    useEffect(() => {
        const stop = onAuthStateChanged(auth, user => {
            if (user) {
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

        setallproducts(snapshot.docs)
        console.log(snapshot.docs)
        console.log(productList)
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
                    <div className="capsules all">All</div>
                    <div className="capsules phones">Phones</div>
                    <div className="capsules wathes">Watches</div>
                    <div className="capsules clothes">Clothes</div>
                    <div className="capsules books">Books</div>
                    <div className="capsules homedecore">Home Decore</div>
                </div>
                <div className="listing">
                    <section id="all">
                        <section id="phones">
                            <div className="sectiontitle">Phones</div>
                            <div className="phonessec sec">
                                <Itemcard type="phone" url="https://media-ik.croma.com/Croma%20Assets/Communication/Mobiles/Images/314521_0_v6eqtj.png" title="Nothing 3A silk" description="it is cool phone" price={1000} />


                            </div>
                        </section>

                    </section>
                </div>
            </div>
        </div>
    )
}

export default Home