import { useState, useEffect } from 'react'
import './App.css'
import Task from './components/taskcard.jsx'

function App() {
  const [task, settask] = useState(() => {
    const saved = localStorage.getItem("tasks")
    return saved ? JSON.parse(saved) : [{ text: 'New Task', done: false }]
  })
  const [inputvalue, setinputvalue] = useState("New Task")
  const [editindex, seteditindex] = useState(null)
  const [btntext, setbtntext] = useState("Add new task")

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(task))
  }, [task])

  function addtask() {
    if (editindex != null) {
      setbtntext("Add new Task")
      const updated = [...task]
      updated[editindex].text = inputvalue
      settask(updated)
      seteditindex(null)
      setinputvalue("")
    }

    else {
      settask([...task, { text: inputvalue, done: false }])
      setinputvalue("")
    }

  }

  function visiblity(index) {
    const updated = [...task]
    updated[index].done = !updated[index].done
    settask(updated)

  }

  function change(e) {
    setinputvalue(e.target.value)
  }

  function edit(text, index) {
    seteditindex(index)
    setinputvalue(text)
    setbtntext("Save")
  }

  function deletetask(index) {
    const updated = task.filter((_, i) => i !== index)
    settask(updated)
  }

  return (
    <>
      <div className="start">
        <div className="card">
          <div className="taskheader">
            <input onChange={change} type="text" name="inputtask" id="inputtask" value={inputvalue} />
            <div className="createtask">
              <button className='tbutton' onClick={addtask}>{btntext}</button>
            </div>
          </div>
          {
            task.map((task, index) => {
              return <Task style={{ textDecoration: task.done ? "line-through" : "none" }} key={index} text={task.text} done={task.done} onClick={() => visiblity(index)} onedit={() => { edit(task.text, index) }} ondelete={() => { deletetask(index) }} />
            })
          }
        </div>
      </div>
    </>
  )
}

export default App
