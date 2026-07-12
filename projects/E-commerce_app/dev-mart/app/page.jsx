"use client"
import { app } from "./firebase"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Loading from "@/components/loading";

const auth = getAuth(app)

export default function App() {

  const router = useRouter()

  useEffect(() => {
    const stop = onAuthStateChanged(auth, user => {
      if (user) {
        router.replace("/home")
      }

      else {
        router.replace("/auth")
      }

    }
    )
    return () => { stop() }
  }, [router])

  return (
    <>
    <Loading/>
    </>
  )
}