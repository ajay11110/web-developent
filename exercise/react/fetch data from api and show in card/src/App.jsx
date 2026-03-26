import { useState, useEffect } from 'react'
import "./App.css"

function App() {
  const [userdata, setuserdata] = useState([])


  async function getdata() {
    let a = await fetch("https://jsonplaceholder.typicode.com/posts")
    let data = await a.json()

    setuserdata(data)
    //  console.log(arr);


  }

  useEffect(() => {
    getdata();

  }, [])

  return (
    <div>
      {
        userdata.map(item => {
          return (
            <div key={item.id} className='card'>
              <div className="header">
                <div>id :</div>
                <div>userId :</div>
                <div>title :</div>
                <div> body :</div>
              </div>
              <div className="data">
                <div className='id'>{item.id}</div>
                <div className='userid'>  {item.userId}</div>
                <div className='title'> {item.title}</div>
                <div className='body'>  {item.body}</div>
              </div>

            </div>)
        })
      }
    </div>
  )
}

export default App
