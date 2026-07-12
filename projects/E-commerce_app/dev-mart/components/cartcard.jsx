"use client"
import React from "react";
import styles from "./wishlistcard.module.css"

const Cartcard = ({ type, url, title, description, price , removebtn, buybtn}) => {
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
                    <button onClick={removebtn} className={`${styles.btn} ${styles.add} pointer`}>Remove from Cart</button>
                    <button onClick={buybtn} className={`${styles.btn} ${styles.buy} pointer`}>Buy Now</button>
                </div>
            </div>
        </>
    )
}

export default Cartcard