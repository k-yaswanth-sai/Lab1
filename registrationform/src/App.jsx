import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount]=useState(0)
  const [value, setValue]=useState(0)

  const increment=()=>{
    if (count<180){
      setCount(count + 1)
    }
  }

  const decrement=()=>{
    if (count >= 1){
      setCount(count - 1)
    }
  }

  const add=()=>{
    const m=document.getElementById('p').value
    const n=document.getElementById('p2').value
    setValue(parseInt(m) + parseInt(n))
  }

  const subtract=()=>{
    const m = document.getElementById('p').value
    const n = document.getElementById('p2').value
    setValue(parseInt(m) - parseInt(n))
  }

  const multiply=()=>{
    const m = document.getElementById('p').value
    const n = document.getElementById('p2').value
    setValue(parseInt(m) * parseInt(n))
  }

  const divide=()=>{
    const m = document.getElementById('p').value
    const n = document.getElementById('p2').value
    if (parseInt(n) !== 0) {
      setValue(parseInt(m) / parseInt(n))
    } else {
      setValue("Error: divide by zero")
    }
  }

  return (
    <div>
      <input type="text" id="p" placeholder="enter number" />
      <br />
      <input type="text" id="p2" placeholder="enter number" />
      <p>Result: {value}</p>7
      <h1>Counter: {count}</h1>
      <br />
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <br /><br />
      <button onClick={add}>+</button>
      <button onClick={subtract}>-</button>
      <button onClick={multiply}>*</button>
      <button onClick={divide}>/</button>
    </div>
  )
}

export default App
