"use client"
import React, { useRef } from "react";
import "./list.css"
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
        console.log(e.target.value, selectref.current.value)
    }

    return (
        <>
            <div className="title">List new Product</div>
            <div className="middle common">
                <div className="labdata">
                    <div className="lable">
                        <div className="type ltext">Type</div>
                        <div className="name ltext">Name</div>
                        <div className="desc ltext">Description</div>
                        <div className="photo ltext">Photo Url</div>
                        <div className="photo ltext">Price</div>
                        <div className="photo ltext">Specification</div>
                    </div>
                    <div className="data">
                        {/* <input ref={typeref} className="dname dtext" type="text" /> */}
                        <select className="dtext" onChange={e => change(e)} ref={selectref} name="list" id="list">
                            <option value="">choose an option</option>
                            <option value="phone">Phones</option>
                            <option value="watch">Watches</option>
                            <option value="cloth">clothes</option>
                            <option value="book">Books</option>
                            <option value="homedecor">Home Decor</option>
                        </select>
                        <input ref={nameref} className="dmobile dtext" type="text" />
                        <input ref={descriptionref} className="dgender dtext" type="text" />
                        <input ref={photoref} className="dgender dtext" type="text" />
                        <input ref={priceref} className="dgender dtext" type="text" />
                        <input ref={specificationref} className="dgender dtext" type="text" />
                    </div>
                </div>
            </div>

            <div className="btns">
                <button className="btn savebtn" onClick={savebtn}>Add</button>
                <button className="btn discardbtn" onClick={() => { router.replace("/profile") }}>Discard</button>
            </div>
        </>
    )
}

export default Lists