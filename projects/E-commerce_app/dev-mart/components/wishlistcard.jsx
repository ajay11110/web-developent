"use client"
import React from "react";
import "./wishlistcard.css"

const Wishlistcard = ({ url, title, description, price, onremove, oncart }) => {
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
                    <button onClick={onremove} className="btn add pointer">Remove from Wishlist</button>
                    <button onClick={oncart} className="btn buy pointer">Add to Cart</button>
                </div>
            </div>
        </>
    )
}

export default Wishlistcard