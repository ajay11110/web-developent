import { useState } from 'react'
import './App.css'
import { useForm } from "react-hook-form"

function App() {
  const [count, setCount] = useState(0)

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const delay = async (t) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, t * 1000)
    })
  }

  const onSubmit = async (data) => {
    // await delay(3);
    let a = await fetch("http://localhost:3000", {
      method: "POST", headers: {
        "Content-Type": "application/json"
      }, body: JSON.stringify(data)
    })
    let res = await r.text()
    console.log(data, res)

    if (data.username == "ajay") {
      setError("extraerrors", { message: "this user is banned not allowed in this space" })
    }

    else {
      setError("extraerrors", { message: "welcome to the web" })
    }
  }

  return (
    <>
      {isSubmitting && <div>loading...</div>}
      <div className="start">
        <div className="con">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input className='id' type="text" {...register("username", { required: { value: true, message: "this field is required" }, minLength: { value: 3, message: "min length is 3" }, maxLength: { value: 8, message: "max length is 8" } })} placeholder='Username' />
          {errors.username && <div>{errors.username.message}</div>}
          <input className='id' type="password"  {...register("password")} placeholder='Password' />
          <input className='btn' type="submit" disabled={isSubmitting} value="Submit" />
          {errors.extraerrors && <div>{errors.extraerrors.message}</div>}
        </form>
      </div>
      </div>
    </>
  )
}

export default App
