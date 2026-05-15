"use client"
import Image from "next/image";

export default function Home() {

  const click = async () => {
    let data = {
      name: "Ajay Yadav",
      role: "learner"
    }

    let a = await fetch("/api/add", {
method : "POST", headers : {
  "Content-Type" : "application/json"
}, 
body : JSON.stringify(data)
    })

    let res= await a.json() 
    console.log(res );
    
  }
  return (
    <>
      <div>
        <button onClick={click}>click to get data</button>
      </div>
    </>
  );
}
