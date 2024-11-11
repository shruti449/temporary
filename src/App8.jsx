import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App=()=>{
    const [count,setCount]=useState(0)
    const inr=()=>{
        setCount(count+1)
    }
    const dcr=()=>{
        setCount(count-1)
    }
    const zero=()=>{
        setCount(0)
    }
    const handleClick=()=>{
        console.log("button clicked!!")
        setCount(count+1)
    }
    return(
        <>
        {/* <button onClick={handleClick}>click here</button> */}
        <button onClick={inr}>increament</button>
        <button onClick={dcr}>decreament</button>
        <button onClick={zero}>zero</button>
      <br />
      {/* <button onClick={()=>console.log("button2 clicked!!")}>ok</button> */}
        Count is {count}
        </>
    )
}

export default App
