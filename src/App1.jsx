import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// const Hello=()=>{
//   return(
//     <div>
//       <h1>hello world</h1>
//     </div>
//   )
// }

function Hello() {
  return (
    <div>
      <h1>hello world</h1>
    </div>
  )
}
const App = () => {
  return (
    <>
      <Hello></Hello>
      <Hello></Hello>
    </>
  )
}

export default App
