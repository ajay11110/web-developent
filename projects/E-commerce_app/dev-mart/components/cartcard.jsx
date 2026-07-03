"use client"
import React from "react";
import "./wishlistcard.css"

const Cartcard = ({ type, url, title, description, price }) => {
    return (
        <>
            <div className="card pointer">
                <div className="start">
                    <div className="img">
                        <img className="photo" src={url} alt="photo" />
                    </div>
                    <div className="lowerpart">
                        <div className="title">{title}</div>
                        <div className="description">{description}</div>
                        <div className="span">
                            <span className="pricetitle">Price : only </span>
                            <span className="price">{price}</span>
                        </div>
                    </div>
                </div>
                <div className="btns">
                    <button className="btn add pointer">Remove from Cart</button>
                    <button className="btn buy pointer">Buy Now</button>
                </div>
            </div>
        </>
    )
}

export default Cartcard