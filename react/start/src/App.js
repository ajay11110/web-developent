import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Navbar from './components/navbar';



function App() {
 const [state1 , s1] = useState(0)
  return (
    <div className="App">
      <div>{state1}</div>
      <button onClick={() => {
        s1(state1 +1)
      }}>count 1</button>
      <Navbar logo = "it is logo"/>
    </div>
  );
}

export default App;
