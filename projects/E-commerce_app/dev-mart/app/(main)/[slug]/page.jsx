"use client"
import React, { useState, useEffect } from "react";
import "./slug.css"
import "../home/home.css"
import Itemcard from "@/components/itemcard";
import { Firestore, doc, getDoc, getDocs, collection, getFirestore, gotdoc } from "firebase/firestore";
import { app } from "@/app/firebase"
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

const firestore = getFirestore(app)

const data = {
  type: "Phones",
  id: 1234,
  url: "https://media-ik.croma.com/Croma%20Assets/Communication/Mobiles/Images/314521_0_v6eqtj.png",
  title: "Nothing 3A silk 128gb Phone",
  description: "it is cool phone",
  price: 12000,
  rating: 4.8,
  iswishlist: false,
  iscart: false,
  isordered: false
}



export default function Itempage() {//======================================================

  const { slug } = useParams()

  const router = useRouter()

  const [details, setdetails] = useState({})
  const [allproduct, setallproduct] = useState([])


  const readItem = async (slug) => {

    let docref = doc(firestore, "products", slug)
    const snapshot = await getDoc(docref)
    setdetails(snapshot.data())
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
  }, [slug])


  return (


    <div className="ipage">
      <div className="iimg">
        <img className="iphoto" src={details.photo} alt="Product photo" />
      </div>
      <div className="iprice">{details.price}</div>
      <div className="ititle">{details.name}</div>
      <div className="idescription">{details.description}</div>
      <div className="ibtns">
        <button className="ibtn iwish pointer">Add to Wishlist</button>
        <button className="ibtn ibuy pointer">Buy Now</button>
        <button className="ibtn iadd pointer">Add to Cart</button>
      </div>

      <div className="iextra">
        <div className="iextitle ititle">
          {details.specification}
        </div>
        <div className="iexdes">
          very premium phone in this budget
        </div>
      </div>

      <div className="iexplore">
        <div className="iexploremoretitle">Explore more {details.type}</div>
        <div className="ilist">
          <section >
            <div className="sec">
              {allproduct
                .filter((item) => item.type === details.type)
                .filter((item)=> item.slug !==details.slug)
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


