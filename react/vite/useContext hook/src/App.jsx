import { useState } from 'react'
import './App.css'
import Nav from './components/nav'
import { counterContext } from './context/context'

function App() {
  const [count, setCount] = useState(0)

  const click = () => {
    setCount(count + 1)
  }

  return (
    <>
      <counterContext.Provider value={{count , setCount}}>
        <Nav/>
        <div className="count"></div>
        <button onClick={click}>count is {count}</button>
      </counterContext.Provider>
    </>
  )
}

export default App
