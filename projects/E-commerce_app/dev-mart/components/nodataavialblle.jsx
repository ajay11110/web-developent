import React from 'react';
import styles from "./nodata.module.css"

const NoDataAvialble = ({message}) => {
    return (
        <>
            <div className={styles.startcard}>
                <span>{message}</span>
            </div>
        </>
    )
}

export default NoDataAvialble
