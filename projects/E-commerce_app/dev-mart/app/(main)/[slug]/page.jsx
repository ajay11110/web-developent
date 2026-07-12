"use client"
import React, { useState, useEffect } from "react";
import styles from "./slug.module.css"
import Itemcard from "@/components/itemcard";
import { Firestore, doc, getDoc, getDocs, collection, getFirestore, gotdoc, setDoc } from "firebase/firestore";
import { app } from "@/app/firebase"
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/authprovider";
import Loading from "@/components/loading";

const firestore = getFirestore(app)

export default function Itempage() {//======================================================

  const { user, loading } = useAuth()
  const { slug } = useParams()
  const router = useRouter()

  const [details, setdetails] = useState({})
  const [allproduct, setallproduct] = useState([])
  const [pageLoading, setpageLoading] = useState(true)


  const readItem = async (slug) => {

    let docref = doc(firestore, "products", slug)
    const snapshot = await getDoc(docref)
    setdetails(snapshot.data())
    setpageLoading(false)
  }

  const readdata = async () => {
    const snapshot = await getDocs(collection(firestore, "products"))
    const productList = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }))
    setallproduct(productList)
  }

  useEffect(() => {
    readItem(slug)
    readdata()
  }, [slug, loading, user])

  const wishfn = async () => {
    const docref = doc(firestore, "users", user.email, "wishlist", slug)
    await setDoc(docref, {
      itemId: slug
    })
  }

  const buyfn = async () => {
    const docref = doc(firestore, "users", user.email, "buyed", slug)
    await setDoc(docref, {
      itemId: slug
    })

  }

  const cartfn = async () => {
    const docref = doc(firestore, "users", user.email, "cart", slug)
    await setDoc(docref, {
      itemId: slug
    })
  }

  if (pageLoading) {
    return (
      <>
        <Loading />
      </>
    )
  }

  else return (
    <div className={styles.ipage}>
      <div className={styles.iimg}>
        <img className={styles.iphoto} src={details.photo} alt="Product photo" />
      </div>
      <div className={styles.iprice}>{details.price}</div>
      <div className={styles.ititle}>{details.name}</div>
      <div className={styles.idescription}>{details.description}</div>
      <div className={styles.ibtns}>
        <button onClick={wishfn} className={`${styles.ibtn}  pointer`}>Add to Wishlist</button>
        <button onClick={buyfn} className={`${styles.ibtn} ${styles.ibuy} pointer`}>Buy Now</button>
        <button onClick={cartfn} className={`${styles.ibtn} ${styles.iadd} pointer`}>Add to Cart</button>
      </div>

      <div className="iextra">
        <div className={styles.ititle}>
          {details.specification}
        </div>
        <div className={styles.iexdes}>
          very premium phone in this budget
        </div>
      </div>

      <div className="iexplore">
        <div className={styles.iexploremoretitle}>Explore more {details.type}</div>
        <div className="ilist">
          <section >
            <div className={styles.sec}>
              {allproduct
                .filter((item) => item.type === details.type)
                .filter((item) => item.slug !== details.slug)
                .map((item) => (
                  <Itemcard onclick={() => { router.replace(item.slug) }} key={item.slug} type={item.type} url={item.photo} title={item.name} description={item.description} price={item.price} />
                ))}
            </div>
          </section>
        </div>
      </div>

    </div>
  );
}


