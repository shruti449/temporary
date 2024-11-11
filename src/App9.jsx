import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App=()=>{
    const [counts,setCounts]=useState({left:0,right:0})
    const inrleft=()=>{
        setCounts({left:counts.left+1,right:counts.right})
    }
    const inrright=()=>{
        setCounts({left:counts.left,right:counts.right+1})
    }
   
    return(
        <>
        {/* <button onClick={handleClick}>click here</button> */}
        <button onClick={inrleft}>left</button>
        <button onClick={inrright}>right</button>
      <br />
      {/* <button onClick={()=>console.log("button2 clicked!!")}>ok</button> */}
       left count is {counts.left}
       <br />
       right count is {counts.right}
        </>
    )
}

export default App
