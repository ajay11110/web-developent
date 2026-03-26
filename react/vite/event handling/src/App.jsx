import { useState } from 'react'
import './App.css'

function App() {
  const [name, setname] = useState("username")
  const [form, setform] = useState({ email: "user@example.com", phone: "xxxxxxxxxx" })

  function handclick() {
    alert("i am clicked")
  }

  function mouseover() {
    alert("mouse over")
  }

  function handlechange(e) {
    setname(e.target.value)
  }

  function handlechange2(e) {
    setform({ ...form, [e.target.name]: e.target.value })
  }
  return (
    <>
      <div className="button">
        <button onClick={handclick}>click me</button>
      </div>
      <span className="box" onMouseOver={mouseover}>hello hover on me</span>

      {/* input have a different type in it */}
      <div className="input">
        <input type="text" value={name} onChange={handlechange} />
        <input type="email" name='email' value={form.email} on onChange={handlechange2} />
        <input type="text" name='phone' value={form.phone} on onChange={handlechange2} />
      </div>
    </>
  )
}

export default App
