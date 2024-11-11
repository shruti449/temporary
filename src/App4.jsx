import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const App = () => {
   const handleClick=()=>{
    console.log("button clicked")
   }
    return (
        <>
      <button onClick={handleClick}>click here</button>
      <br />
      <button onClick={()=>console.log("button2 clicked!!")}>ok</button>
        </>
    )
}

export default App
