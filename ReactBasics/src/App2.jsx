import { useState } from 'react'
import './App.css'

function App2() {
  
  const [value, setValue]=useState(0)
  const [m,setmM]=useState('')
  const [n,setN]=useState('')
  

  

  

  const add=()=>{
    
    setValue(parseInt(m) + parseInt(n))
  }

  const subtract=()=>{
   
    setValue(parseInt(m) - parseInt(n))
  }

  const multiply=()=>{
    
    setValue(parseInt(m) * parseInt(n))
  }

  const divide=()=>{
    
    if (parseInt(n) !== 0) {
      setValue(parseInt(m) / parseInt(n))
    } else {
      setValue("Error: divide by zero")
    }
  }

  return (
    <div>
      <input type="text" id="p" placeholder="enter number" value={m} onChange={e=>setM(e.target.value)} />
      <br />
      <input type="text" id="p2" placeholder="enter number" value={n} onChange={e=>setN(e.target.value)}/>
      <p>Result: {value}</p>7
      
      <br />
      
      <br /><br />
      <button onClick={add}>+</button>
      <button onClick={subtract}>-</button>
      <button onClick={multiply}>*</button>
      <button onClick={divide}>/</button>
    </div>
  )
}

export default App2
