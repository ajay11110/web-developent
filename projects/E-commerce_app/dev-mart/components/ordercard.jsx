import React from "react";
import styles from "./ordercard.module.css"

const Ordercard = ({ type, url, title, description, price }) => {

    return (
        <>
            <div className={`${styles.card} pointer`}>
                <div className={styles.first}>
                    <div className={styles.img}>
                        <img className={styles.photo} src={url} alt="photo" />
                    </div>
                    <div className={styles.lowerpart}>
                        <div className={styles.title}>{title}</div>
                        <div className={styles.description}>{description}</div>
                        <span className="pricetitle">Price : only </span>
                        <span className={styles.price}>{price}</span>
                    </div>
                </div>
                <div className={styles.btns}>
                    <button className={`${styles.btn} ${styles.buy}`}>Arriving Tommorow</button>
                </div>
            </div>
        </>
    )
}

export default Ordercard