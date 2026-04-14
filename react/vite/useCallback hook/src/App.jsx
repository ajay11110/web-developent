import { useState, useCallback } from 'react'
import './App.css'
import Nav from './components/navbar'

function App() {
  const [count, setCount] = useState(0)

  const getadjective = useCallback(() => {
    return "nice " + count
  }, [count] //only with count it will allow change , otherwise the value of count will remain 0 (default)
)

// useCallback freezes the function tyo rerender

  return (
    <>
      <button
        className="counter"
        onClick={() => setCount((count) => count + 1)}
      >
        Count is {count}
      </button>
      <Nav adjective="good" getadjective={getadjective} />
    </>
  )
}

export default App
