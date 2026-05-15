"use client"
import {submitaction} from "@/actions/server";
import { useRef } from "react";


export default function Home() {
  let ref = useRef()
  return (
   <>
   <form ref={ref} action={(e) => {
     submitaction(e) , ref.current.reset()
   }}>
    <div>
      <label htmlFor="name">name</label>
      <input type="text" name="name" id="name" className="bg-amber-50 my-1 px-0.5 mx-1 text-black"/>
    </div>
    <div>
      <label htmlFor="name">password</label>
      <input type="password" name="password" id="password" className="my-1 bg-amber-50 px-0.5 mx-1 text-black"/>
    </div>
    <div className="width-full flex justify-center">
     <button className="bg-green-400 px-3 py-2">submit</button>
    </div>
   </form>
   </>
  );
}
