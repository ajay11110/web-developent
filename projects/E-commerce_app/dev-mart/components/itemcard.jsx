"use client"
import React from "react";
import styles from "./itemcard.module.css"

const Itemcard = ({ onwish, url, title, description, price, onclick, buybtn, cartbtn }) => {
    return (
        <>
            <div onClick={onclick} className={`${styles.card} pointer`}>
                <div className={styles.img}>
                    <img className={styles.photo} src={url} alt="photo" />
                    <div className="wishlist">
                        <button className={styles['wishlist-btn']}>
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
                <div className={styles.lowerpart}>
                    <div className={styles.title}>{title}</div>
                    <div className={styles.description}>{description}</div>
                    <span className="pricetitle">Price : only </span>
                    <span className={styles.price}>{price}</span>
                    <div className={styles.btns}>
                        <button onClick={buybtn} className={`${styles.btn} ${styles.buy} pointer`}>Buy Now</button>
                        <button onClick={cartbtn} className={`${styles.btn} ${styles.add} pointer`}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Itemcard