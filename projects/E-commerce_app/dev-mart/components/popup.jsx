"use client"
import React, { forwardRef, useImperativeHandle, useRef, useState } from "react";
import styles from "./popup.module.css"

const Popup = forwardRef(({ msg }, ref) => {

    const [message, setmessage] = useState(null)

    const belowbarref = useRef()
    const boxref = useRef()

    let progress = 100

    const popup = (msg) => {
        setmessage(msg);
        boxref.current.style.display = "flex"

        let interval = setInterval(() => {
            if (progress === 0) {
                clearInterval(interval)
                boxref.current.style.display = "none"
                progress = 100
                belowbarref.current.style.width = "100%"
            }

            else {
                progress -= 1
                belowbarref.current.style.width = `${progress}%`
            }

        }, 10)
    }

    useImperativeHandle(ref, () => {
        return {
            popup
        }
    })

    return (
        <>
            <div ref={boxref} className={styles.box}>
                <span className={styles.msg}>{message}</span>
                <div ref={belowbarref} className={styles.belowbar}></div>
            </div>
        </>
    )
})

export default Popup