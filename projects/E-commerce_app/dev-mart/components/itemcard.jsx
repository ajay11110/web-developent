"use client"
import React from "react";
import "./itemcard.css"

const Itemcard = ({type, url, title, description, price}) => {
    return (
        <>
            <div className="card pointer">
                <div className="img">
                    <img className="photo" src= {url} alt="photo" />
                </div>
               <div className="lowerpart">
                 <div className="title">{title}</div>
                <div className="description">{description}</div>
                <span className="pricetitle">Price : only </span>
                <span className="price">{price}</span>
                <div className="btns">
                    <button className="btn buy pointer">Buy Now</button>
                    <button className="btn add pointer">Add to Cart</button>
                </div>
               </div>
            </div>
        </>
    )
}

export default Itemcard