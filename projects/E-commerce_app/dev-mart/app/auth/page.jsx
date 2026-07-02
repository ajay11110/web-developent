import React from "react";
import "./auth.css"

const Auth = () => {
    return (
        <div className="main">
            <div className="border">
                <div className="brandname">Dev Mart</div>
                <input type="email" className="input email" name="email" placeholder="Email" id="email" />
                <input type="password" className="input password" name="password" placeholder="Password" id="password" />
                <button className="btn signinbtn">Sign in</button>
                <div className="moretext">or continue with</div>
                <div className="options">
                    <button className="google optionbtn">Google</button>
                    <button className="devid optionbtn">Dev Id</button>
                </div>
                <div className="last">
                    <span className="signuptext">New on Dev Mart </span>
                    <span className="signupbtn"> Sign up</span>
                </div>
            </div>
        </div>
    )
}

export default Auth