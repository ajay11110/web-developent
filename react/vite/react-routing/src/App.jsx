import { useState } from 'react'
import { createBrowserRouter , RouterProvider} from "react-router-dom"
import  Contact  from "./components/contact"
import  Login  from "./components/login"
import  Nav  from "./components/navbar"

import './App.css'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element:<><Nav/></>
    },

    {
      path: "contact",
      element: <><Nav/><Contact /></>
    },

    {
      path: "login",
      element: <><Nav/><Login /></>
    }
  ])

  return (
    <>
    <div>i am everywhere</div>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
