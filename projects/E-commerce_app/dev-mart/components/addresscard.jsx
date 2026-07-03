import React from "react";
import "./addresscard.css"

const Addresscard=({value, onchange, onedit , ondelete})=>{
    return(
        <>
        <div className="start">
            <input value={value} onChange={onchange} className="addressinput" type="text" name="address" id="address" placeholder="Address" />
            <div className="btns">
                <button className="editbtn btn">Edit</button>
                <button className="deletebtn btn">Delete</button>
            </div>
        </div>
        </>
    )
}

export default Addresscard