import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const Show=({info})=>{
console.log(info)
return(
    <div>
        <ul>
            {/* <li>{info[0].name}</li>
            <li>{info[1].name}</li>
            <li>{info[2].name}</li> */}
            {info.map((item)=><li key={item.id}>{item.name}</li>)}
        </ul>
    </div>
)
}
 const App=()=>{
const students=[{id:1,name:'abc',phone:1234},
    {id:2,name:'xyz',phone:6784},
    {id:3,name:'pqr',phone:1444}
]
   

    return (
        <>
        <Show info={students}></Show>
      </>
    )
}

export default App
