import React from "react";
import { counterContext } from "../context/context";
import { useContext } from "react";


function C2() {
    const value = useContext(counterContext)

    return <>
        <div>  i am c2</div>

        <button onClick={
            ()=> {
                value.setCount(value.count+1)
            }
        }>i am btn of c2 and count is {value.count}</button>

    </>

}

export default C2