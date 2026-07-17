"use client"
import React, { useState, useEffect, useRef } from "react";
import styles from "./slug.module.css"
import Itemcard from "@/components/itemcard";
import { Firestore, doc, getDoc, getDocs, collection, getFirestore, gotdoc, setDoc } from "firebase/firestore";
import { app } from "@/app/firebase"
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/authprovider";
import Loading from "@/components/loading";
import Popup from "@/components/popup";

const firestore = getFirestore(app)

export default function Itempage() {//======================================================

  const { user, loading } = useAuth()
  const { slug } = useParams()
  const router = useRouter()
  const popupref = useRef()

  let message = null

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

  const wishfn = async (e, slug) => {
    e.stopPropagation()
    const docref = doc(firestore, "users", user.email, "wishlist", slug)
    await setDoc(docref, {
      itemId: slug
    })
    popupref.current.popup("Item added to Wishlist")
  }

  const buyfn = (e, slug) => {
    e.stopPropagation()
    router.replace(`/buy/${slug}`)
  }

  const cartfn = async (e, slug) => {
    e.stopPropagation()
    const docref = doc(firestore, "users", user.email, "cart", slug)
    await setDoc(docref, {
      itemId: slug
    })
    popupref.current.popup("Item added to Cart")
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
      <Popup ref={popupref} />
      <div className={styles.iimg}>
        <img className={styles.iphoto} src={details.photo} alt="Product photo" />
      </div>
      <div className={styles.iprice}>{details.price}</div>
      <div className={styles.ititle}>{details.name}</div>
      <div className={styles.idescription}>{details.description}</div>
      <div className={styles.ibtns}>
        <button onClick={(e) => { wishfn(e, slug) }} className={`${styles.ibtn}  pointer`}>Add to Wishlist</button>
        <button onClick={(e) => { buyfn(e, slug) }} className={`${styles.ibtn} ${styles.ibuy} pointer`}>Buy Now</button>
        <button onClick={(e) => { cartfn(e, slug) }} className={`${styles.ibtn} ${styles.iadd} pointer`}>Add to Cart</button>
      </div>

      <div className="iextra">
        <div className={styles.ispecification}>
          {details.specification}
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
                  <Itemcard onclick={() => { router.replace(item.slug) }} onwish={(e) => { wishfn(e, item.slug) }} cartbtn={(e) => { cartfn(e, item.slug) }} buybtn={(e) => { buyfn(e, item.slug) }} key={item.slug} type={item.type} url={item.photo} title={item.name} description={item.description} price={item.price} />
                ))}
            </div>
          </section>
        </div>
      </div>

    </div>
  );
}


