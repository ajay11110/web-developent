import { useState, useEffect, useRef } from 'react'
import './App.css'
import { v4 as uuidv4 } from "uuid";

function App() {
  const [form, setform] = useState({ siteurl: "", sitetitle: "", username: "", password: "" })
  const [passwordArray, setpasswordArray] = useState([])
  const [visiblepassword, setvisiblepassword] = useState({})

  const passref = useRef()

  const getpassword = async () => {
    let req = await fetch("http://localhost:3000")
    let passwords = await req.json()
    setpasswordArray(passwords)
    console.log(passwords);
  }

  useEffect(() => {
    getpassword()
  }, [])

  const handelChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }

  const addnewpassword = async () => {
    await fetch("http://localhost:3000/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, id: uuidv4() })
    })
    setpasswordArray([...passwordArray, { ...form, id: uuidv4() }])
    setform({ siteurl: "", sitetitle: "", username: "", password: "" })
  }

  const show = (e, input, index) => {
    setvisiblepassword({ ...visiblepassword, [index]: !visiblepassword[index] })
  }

  const update = (e, item) => {
    console.log(e, item)
  }

  const deletepassword = async (id) => {

    let c = confirm("Do you really want to delete this password ?")
    if (c) {
      setpasswordArray(passwordArray.filter(item => item.id !== id))
      await fetch("http://localhost:3000/", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id })
      }
      )
    }
  }

  const editpassword = async (id) => {
    setform(passwordArray.filter(item => item.id === id)[0])
    setpasswordArray(passwordArray.filter(item => item.id !== id))
        await fetch("http://localhost:3000/", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id })
      }
      )
  }

  const copy = (item) => {
    navigator.clipboard.writeText(item)
  }


  return (
    <>
      <div className="start">
        <div className="brandname">PassLock</div>
      </div>

      <div className='desc'>Save your all passwords at one place</div>

      <div className="main main1">
        <div className="i1">
          <input value={form.siteurl} onChange={(e) => { handelChange(e) }} placeholder='Site url' className='in1 input' type="text" name="siteurl" id="siteurl" />
        </div>
        <div className="i1">
          <input value={form.sitetitle} onChange={(e) => { handelChange(e) }} placeholder='Site Name (optional)' className='in2 input' type="text" name="sitetitle" id="sitetitle" />
        </div>
        <div className="i1 downinput">
          <input value={form.username} onChange={(e) => { handelChange(e) }} placeholder='Username' type="text" className='input in3' name="username" id="username" />
          <input value={form.password} onChange={(e) => { handelChange(e) }} placeholder='password' type="text" className='input in4' name="password" id="password" />
        </div>
        <button className='newpassword' onClick={addnewpassword}>Add</button>
      </div>

      <div className="main2">
        <div className="savedtext">Saved Passwords</div>
        <div className="sitecard header">
          <div className="wrapper htext">Site name</div>
          <div className="wrapper htext">User name</div>
          <div className="wrapper htext">Password</div>
          <img src="../src/assets/show.svg" className='editicon showicon' alt="show" />
          <img src="../src/assets/edit.svg" className='editicon' alt="edit" />
          <img src="../src/assets/delete.svg" className='editicon deleteicon' alt="dalete" />
        </div>
        {passwordArray.length === 0 && <div>No password saved yet</div>}
        {passwordArray.length !== 0 &&
          <>
            {passwordArray.map((item, index) => {
              return (

                <div className="sitecard" key={index}>
                  <div className="wrapper">

                    <input readOnly value={item.sitetitle} placeholder='Site Name' className='input detailsinput' type="text" name="sitetitle" id="sitetitle" />
                  </div>
                  <div className="wrapper">
                    <input readOnly value={item.username} placeholder='Username' type="text" className='input detailsinput' name="username" id="username" />
                    <img src="../src/assets/copy.svg" onClick={() => { copy(item.username) }} className='editicon' alt="copy" />

                  </div>
                  <div className="wrapper">
                    <input readOnly ref={passref} value={item.password} placeholder='password' type={visiblepassword[index] ? "text" : "password"} className='input detailsinput' name="password" id="password" />
                    <img src="../src/assets/show.svg" onClick={(e) => { show(e, item.password, index) }} className='editicon showicon' alt="show" />
                    <img src="../src/assets/copy.svg" onClick={() => { copy(item.password) }} className='editicon' alt="copy" />

                  </div>
                  <img src="../src/assets/edit.svg" onClick={() => { editpassword(item.id) }} className='editicon' alt="edit" />
                  <img src="../src/assets/delete.svg" onClick={() => { deletepassword(item.id) }} className='editicon deleteicon' alt="dalete" />
                </div>
              )
            })}
          </>
        }
      </div>
    </>
  )
}

export default App
