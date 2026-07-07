"use client"
import React from "react";
import "./itemcard.css"

const Itemcard = ({ onwish, url, title, description, price, onclick, buybtn, cartbtn }) => {
    return (
        <>
            <div onClick={onclick} className="card pointer">
                <div className="img">
                    <img className="photo" src={url} alt="photo" />
                    <div className="wishlist">
                        <button className="wishlist-btn">
                            <svg onClick={onwish}
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M12 21s-7-4.438-9.5-9C.5 8.5 2.5 4 7 4c2.2 0 3.5 1.3 5 3 1.5-1.7 2.8-3 5-3 4.5 0 6.5 4.5 4.5 8-2.5 4.562-9.5 9-9.5 9z" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="lowerpart">
                    <div className="title">{title}</div>
                    <div className="description">{description}</div>
                    <span className="pricetitle">Price : only </span>
                    <span className="price">{price}</span>
                    <div className="btns">
                        <button onClick={buybtn} className="btn buy pointer">Buy Now</button>
                        <button onClick={cartbtn} className="btn add pointer">Add to Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Itemcard