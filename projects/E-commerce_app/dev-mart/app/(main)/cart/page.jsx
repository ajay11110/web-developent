import Cartcard from "@/components/cartcard";
import React from "react";
import "./cart.css"

const Cart=()=>{
    return(
        <>
        <div className="title">Cart</div>
            <Cartcard type="phone" url="https://media-ik.croma.com/Croma%20Assets/Communication/Mobiles/Images/314521_0_v6eqtj.png" title="Nothing 3A silk" description="it is cool phone" price={1000} />
            <div className="buyall">
                <button className="buyallbtn">Buy all</button>
            </div>
        </>
    )
}

export default Cart