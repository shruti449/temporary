import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


//using spread operator...counts
//adding array in useState
const App=()=>{
    const [counts,setCounts]=useState({left:0,right:0})
    const [allClicks,setAllClicks]=useState([])
    const inrleft=()=>{
        setCounts({...counts,left:counts.left+1})
        setAllClicks(allClicks.concat('L'))
    }
    const inrright=()=>{
        setCounts({...counts,right:counts.right+1})
        setAllClicks(allClicks.concat('R'))
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
       <br />
       {allClicks.join(',')}
        </>
    )
}

export default App
