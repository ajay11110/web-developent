import { useState, useMemo } from 'react'
import './App.css'

const arr = new Array(30_000_000).fill(0).map((_, i) => {
  return {
    index: i,
    iswanted: i === 10_000
  }
})

function App() {
  const [count, setCount] = useState(0)
  const [num, setnum] = useState(arr)
  // const wanted = num.find(item=>{item.iswanted===true})  \\it is very complex problrm that need lot of calculations , on every render
  // to stop this
  const wanted = useMemo(() => num.find((item) => { item.iswanted === true }), [num])
  return (
    <>

      <button
        className="counter"
        onClick={() => {

          if (count === 10) {
            setnum(new Array(10_000_000).fill(0).map((_, i) => {
              return {
                index: i,
                iswanted: i === 3_000
              }
            }))
          }
          setCount((count) => count + 1)
        }
        }
      >
        Count is {count}
      </button>

    </>
  )
}

export default App
