"use client"
import React from "react";
import styles from "./wishlistcard.module.css"

const Wishlistcard = ({ url, title, description, price, onremove, oncart }) => {
    return (
        <>
            <div className={`${styles.card} pointer`}>
                <div className={styles.start}>
                    <div className={styles.img}>
                        <img className={styles.photo} src={url} alt="photo" />
                    </div>
                    <div className={styles.lowerpart}>
                        <div className={styles.title}>{title}</div>
                        <div className={styles.description}>{description}</div>
                        <div className={styles.span}>
                            <span className="pricetitle">Price : only </span>
                            <span className={styles.price}>{price}</span>
                        </div>
                    </div>
                </div>
                <div className={styles.btns}>
                    <button onClick={onremove} className={`${styles.btn} ${styles.add} pointer`}>Remove from Wishlist</button>
                    <button onClick={oncart} className={`${styles.btn} ${styles.buy} pointer`}>Add to Cart</button>
                </div>
            </div>
        </>
    )
}

export default Wishlistcard