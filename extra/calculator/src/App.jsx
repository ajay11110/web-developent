import { useState } from 'react'
import './App.css'

function App() {
  const [number1, setnumber1] = useState(0)
  const [number2, setnumber2] = useState(0)
  const [ans, setans] = useState(0)
  const [operation, setoperation] = useState(0)
  const [display, setdisplay] = useState(0)
  const [point, setpoint] = useState(false)
  const [decimal, setdecimal] = useState(0)

  function calculate() {

    setpoint(false)
    setdecimal(0)
    if (operation == 1) {
      let temp = number1 + number2
      setans(temp)
      setdisplay(temp)
      setoperation(0)
    }

    else if (operation == 2) {
      let temp = number1 - number2
      setans(temp)
      setdisplay(temp)
      setoperation(0)
    }

    else if (operation == 3) {
      let temp = number1 * number2
      setans(temp)
      setdisplay(temp)
      setoperation(0)
    }

    else if (operation == 4) {
      let temp = number1 / number2
      setans(temp)
      setdisplay(temp)
      setoperation(0)
    }

    else if (operation == 5) {
      let temp = (number1 * number2) / 100
      setans(temp)
      setdisplay(temp)
      setoperation(0)
    }

    else {
      setans(0)
      setdisplay(0)
    }

  }

  function engine(val) {
    if (operation != 0) {
      return fn2(val)
    }

    else {
      return fn1(val)
    }
  }

  function fn1(val) {

    if (point === true) {

      let temp = (decimal * 10) + Number(val)
      let len = temp.toString().length
      let temp2 = number1 + (temp) / (10 ** (len))
      setdecimal(temp)
      setdisplay(temp2)
      setnumber1(temp2)
    }

    else {
      let temp = (number1 * 10) + Number(val)
      setnumber1(temp)
      setdisplay(temp)
    }

  }

  function fn2(val) {

    if (point === true) {

      let temp = (decimal * 10) + Number(val)
      let len = temp.toString().length

      let temp2 = number2 + (temp) / (10 ** (len))
      setdecimal(temp)
      setdisplay(temp2)
      setnumber2(temp2)

    }

    else {
      let temp = (number2 * 10) + Number(val)
      setnumber2(temp)
      setdisplay(temp)
    }
  }

  function op(val) {

    setpoint(false)
    setdecimal(0)

    if (val == "+") {
      setoperation(1)
      setdisplay("+")
    }

    if (val == "-") {
      setoperation(2)
      setdisplay("-")
    }

    if (val == "x") {
      setoperation(3)
      setdisplay("x")
    }

    if (val == "/") {
      setoperation(4)
      setdisplay("/")
    }

    if (val == "%") {
      setoperation(5)
      setdisplay("%")
    }
  }

  function clear() {
    setdisplay(0)
    setnumber1(0)
    setnumber2(0)
    setoperation(0)
  }

  function del() {

    if (operation == 0) {
      let temp = Math.floor(number1 / 10)
      setnumber1(temp)
      setdisplay(temp)
    }

    else {
      let temp = Math.floor(number2 / 10)
      setnumber2(temp)
      setdisplay(temp)
    }

  }

  function dot() {
    setpoint(true)
  }


  function doublezero() {
    if (operation != 0) {
      let temp = number2 * 100
      setnumber2(temp)
      setdisplay(temp)
    }

    else {
      let temp = number1 * 100
      setnumber1(temp)
      setdisplay(temp)
    }
  }

  return (
    <>
      <div className="start">
        <div className="con1">
          <div className="display">{display}</div>
          <div className="con2">
            <button onClick={clear} className="btn r1 green">AC</button>
            <button onClick={(val) => { op(val.target.innerText) }} className="btn r1 green">%</button>
            <button onClick={del} className="btn r1 green">DE</button>
            <button onClick={(val) => { op(val.target.innerText) }} className="btn r1 calc">/</button>
            <button onClick={(val) => { engine(val.target.innerText) }} className="btn r2">7</button>
            <button onClick={(val) => { engine(val.target.innerText) }} className="btn r2">8</button>
            <button onClick={(val) => { engine(val.target.innerText) }} className="btn r2">9</button>
            <button onClick={(val) => { op(val.target.innerText) }} className="btn r2 calc">x</button>
            <button onClick={(val) => { engine(val.target.innerText) }} className="btn r3">4</button>
            <button onClick={(val) => { engine(val.target.innerText) }} className="btn r3">5</button>
            <button onClick={(val) => { engine(val.target.innerText) }} className="btn r3">6</button>
            <button onClick={(val) => { op(val.target.innerText) }} className="btn r3 calc">-</button>
            <button onClick={(val) => { engine(val.target.innerText) }} className="btn r4">1</button>
            <button onClick={(val) => { engine(val.target.innerText) }} className="btn r4">2</button>
            <button onClick={(val) => { engine(val.target.innerText) }} className="btn r4">3</button>
            <button onClick={(val) => { op(val.target.innerText) }} className="btn r4 calc">+</button>
            <button onClick={doublezero} className="btn r5">00</button>
            <button onClick={(val) => { engine(val.target.innerText) }} className="btn r5">0</button>
            <button onClick={dot} className="btn r5">.</button>
            <button onClick={calculate} className="btn r5 bg">=</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
