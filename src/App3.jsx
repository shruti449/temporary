import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function Hello({name,year}) {
    function getAge() {
        let cyear = new Date().getFullYear()
        let age = cyear - year
        return age

    }
    return (
        <div>
            <h1>hello, {name}.Your age is {getAge()} </h1>
        </div>
    )
}
const App = () => {
    const fname = "xyz"
    const year = 2003
    return (
        <>
            <Hello name={fname} year={year}></Hello>
        </>
    )
}

export default App
