import { memo } from "react";
import React from "react";

// function Nav(probs) {  then in return probs.adjective  or use direct
function Nav({ adjective, getadjective }) {

    console.log("navbar is rendered");
    
    return (
        <>
            i am {adjective} navbar
            <button onClick={()=> {getadjective()}}>{getadjective()}</button>
        </>
    )
}

export default memo(Nav) 
//memo is used to prevent re rendering of navbar
// but it will change bcz the fuction is called that changes everytime of rendering and memo takes it as a change and allow re-rendering, untill usecallback is not used