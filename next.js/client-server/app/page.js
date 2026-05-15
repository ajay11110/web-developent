"use client"
import { useState } from "react";

export default function Home() {

  const [count, setcount] = useState(0)
  return (
    <div>

      it is component

      <div>count is {count}</div>
      <div><button onClick={() => {
        setcount(count + 1)
      }
      }>click me</button></div>
    </div>
  );
}
