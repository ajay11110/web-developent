import React from "react";
import "./ordercard.css"

const Ordercard = ({ type, url, title, description, price }) => {

    return (
        <>
            <div className="card pointer">
                <div className="img">
                    <img className="photo" src={url} alt="photo" />
                </div>
                <div className="lowerpart">
                    <div className="title">{title}</div>
                    <div className="description">{description}</div>
                    <span className="pricetitle">Price : only </span>
                    <span className="price">{price}</span>
                </div>
                    <div className="btns">
                        <button className="btn buy">Arriving Tommorow</button>
                    </div>
            </div>
        </>
    )
}

export default Ordercard