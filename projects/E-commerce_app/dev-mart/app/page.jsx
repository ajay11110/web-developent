"use client"
import { app } from "./firebase"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const auth = getAuth(app)

export default function App() {

  const router = useRouter()

  useEffect(() => {
    const stop = onAuthStateChanged(auth, user => {
      if (user) {
        console.log("user is loged in" , user)
        router.replace("/home")
      }

      else {
        console.log("user is not logged in")
        router.replace("/auth")
      }

    }
    )
    return () => { stop() }
  }, [router])

  return (
    <>
      <h1>Loading...</h1>
    </>
  )
}