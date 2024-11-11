import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Show } from './Show'


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
