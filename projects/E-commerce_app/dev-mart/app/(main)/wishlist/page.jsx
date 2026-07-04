import Wishlistcard from "@/components/wishlistcard";
import React from "react";
import "./wishlist.css"

const Wishlist=()=>{
    return(
        <>
        <div className="title">Wishlist</div>
            <Wishlistcard type="phone" url="https://media-ik.croma.com/Croma%20Assets/Communication/Mobiles/Images/314521_0_v6eqtj.png" title="Nothing 3A silk" description="it is cool phone" price={1000} />
            <div className="buyall">
                <button className="buyallbtn">Add all to Cart</button>
            </div>
        </>
    )
}

export default Wishlist