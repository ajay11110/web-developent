import React from "react";
import Ordercard from "@/components/ordercard";
import "./order.css"

const Orders = () => {
    return (
        <>
            <div className="header">Your all Orders</div>
            <Ordercard type="phone" url="https://media-ik.croma.com/Croma%20Assets/Communication/Mobiles/Images/314521_0_v6eqtj.png" title="Nothing 3A silk" description="it is cool phone" price={1000} />
        </>
    )
}

export default Orders