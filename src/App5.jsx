import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const App = () => {
   const [count,setCount]=useState(0)
   const handleClick=()=>{
    //console.log("button clicked")
    setCount(count+1);
   }
   
    return (
        <>
      <button onClick={handleClick}>click here</button>
      <br />
      {/*<button onClick={()=>console.log("button2 clicked!!")}>ok</button>*/}
        Count is {count}</>
    )
}

export default App
