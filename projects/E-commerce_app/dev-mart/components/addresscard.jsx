import React from "react";
import styles from "./addresscard.module.css"

const Addresscard = ({ value, onchange, onedit, ondelete }) => {
    return (
        <>
            <div className={styles.start}>
                <input value={value} onChange={onchange} className={styles.addressinput} type="text" name="address" id="address" placeholder="Address" />
                <div className={styles.btns}>
                    <button onClick={onedit} className={`${styles.editbtn} ${styles.btn}`}>Edit</button>
                    <button onClick={ondelete} className={`${styles.deletebtn} ${styles.btn}`}>Delete</button>
                </div>
            </div>
        </>
    )
}

export default Addresscard