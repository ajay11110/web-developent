import { useState, useEffect, useRef } from 'react'

function App() {
  const [show, setshow] = useState(false)
  const [todos, settodos] = useState([
    {
      title: "to do 1",
      desc: "decs 1"
    },

    {
      title: "to do 2",
      desc: "decs 2"
    },

    {
      title: "to do 3",
      desc: "decs 3"
    },

    {
      title: "to do 4",
      desc: "decs 4"
    }
  ])

  const Todo = ({ todo }) => {
    return (
      <>
        <div>{todo.title}</div>
        <div>{todo.desc}</div>
      </>
    )
  }


  return (
    <div>
      <button onClick={() => {
        setshow(!show)
      }}>click to show other</button>

      {/* method 1
      {show ? < button > i am other button</button> : ""} */}

      {/* method 2 new */}
      {/* where we want to show only one statement */}
      {show && < button > i am other button</button>}

      {todos.map((todo) => {
        return <Todo todo={todo} />
      })}

      {/* or to show in other wat better */}
      {
        todos.map((todo) => {
          return (
            <>
            <br />
              <div>{todo.title}</div>
              <div>{todo.desc}</div>

            </>
          )
        })
      }



    </div >
  )
}

export default App
