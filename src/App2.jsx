import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function Hello(ob) {
  return (
    <div>
      <h1>hello, {ob.name}.Your age is {ob.age} and address is {ob.address} </h1>
    </div>
  )
}
const App = () => {
    const fname="xyz"
    const age=20
    const address="ppp"
  return (
    <>
      <Hello name="abc" age="10" address="rrr"></Hello>
    <Hello name={fname} age={age} address={address}></Hello>
    </>
  )
}

export default App
