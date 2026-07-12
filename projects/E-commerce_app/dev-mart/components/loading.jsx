import React from "react";
import styles from "./loading.module.css"

const Loading = () => {
    return (
        <div className={styles.starting}>
            <div className={styles.firstring}>
                <div className={styles.secondring}>
                    <div className={styles.textload}>Loading</div>
                </div>
            </div>
        </div>
    )
}

export default Loading