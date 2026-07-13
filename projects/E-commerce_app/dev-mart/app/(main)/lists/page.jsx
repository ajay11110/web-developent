"use client"
import React, { useRef } from "react";
import styles from "./list.module.css"
import { v4 as uuidv4 } from "uuid"
import { useRouter } from "next/navigation";
import { app } from "../../firebase"
import { Firestore, setDoc, doc, getFirestore } from "firebase/firestore";

const firestore = getFirestore(app)


const Lists = () => {//=============================================================

    let router = useRouter()

    let selectref = useRef()

    const typeref = useRef()
    const nameref = useRef()
    const photoref = useRef()
    const priceref = useRef()
    const descriptionref = useRef()
    const specificationref = useRef()

    const slugmaker = (name) => {

        const result = name
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9\s-]/g, "")
            .replace(/\s+/g, "-")
            .replace(/-+/g, "-")

        return `${result}-${uuidv4()}`
    }

    const savebtn = async () => {

        writedata(slugmaker(nameref.current.value))
            .then(() => { router.replace("/profile") })

    }

    const writedata = async (slug) => {
        await setDoc(doc(firestore, "products", slug), {
            type: selectref.current.value,
            name: nameref.current.value,
            slug: slug,
            price: priceref.current.value,
            photo: photoref.current.value,
            description: descriptionref.current.value,
            specification: specificationref.current.value
        })
    }

    const change = (e) => {
    }

    return (
        <>
            <div className={styles.title}>List new Product</div>
            <div className="middle common">
                <div className={styles.labdata}>
                    <div className={styles.lable}>
                        <div className={styles.ltext}>Type</div>
                        <div className={styles.ltext}>Name</div>
                        <div className={styles.ltext}>Description</div>
                        <div className={styles.ltext}>Photo Url</div>
                        <div className={styles.ltext} > Price</div>
                        <div className={styles.ltext}>Specification</div>
                    </div>
                    <div className={styles.data}>
                        <select className={styles.dtext} ref={selectref} name="list" id="list">
                            <option value="">choose an option</option>
                            <option value="phone">Phones</option>
                            <option value="watch">Watches</option>
                            <option value="cloth">clothes</option>
                            <option value="book">Books</option>
                            <option value="home decor">Home Decor</option>
                        </select>
                        <input ref={nameref} className={styles.dtext} type="text" />
                        <input ref={descriptionref} className={styles.dtext} type="text" />
                        <input ref={photoref} className={styles.dtext} type="text" />
                        <input ref={priceref} className={styles.dtext} type="text" />
                        <input ref={specificationref} className={styles.dtext} type="text" />
                    </div>
                </div>
            </div >

            <div className={styles.btns}>
                <button className={`${styles.btn} ${styles.savebtn}`} onClick={savebtn}>Add</button>
                <button className={`${styles.btn} ${styles.discardbtn}`} onClick={() => { router.replace("/profile") }}>Discard</button>
            </div>
        </>
    )
}

export default Lists