import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

function App() {
 const count = useSelector((state) => state.counter.value)
  return (
    <>

    <div>
      counter is {count}
      hello
    </div>
      
    </>
  )
}

export default App
