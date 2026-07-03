import React from "react";
import Buycard from "@/components/buycard";
import "./process.css"

const Process = () => {
    return (
        <>
            <div className="start">
                <Buycard type="phone" url="https://media-ik.croma.com/Croma%20Assets/Communication/Mobiles/Images/314521_0_v6eqtj.png" title="Nothing 3A silk" description="it is cool phone" price={1000} />
            </div>
            <div className="productprice">
                <span className="text">Product price - </span>
                <span className="pricetext">{1000}</span>
            </div>
            <div className="gst">
                <span className="text">GST - </span>
                <span className="pricetext">{10}</span>
            </div>
            <div className="totalprice">
                <span className="text imptext">Total price - </span>
                <span className="pricetext impprice">{1010}</span>
            </div>
            <div className="proceed">
                <button className="proceedbtn">Proceed</button>
            </div>
        </>
    )
}

export default Process