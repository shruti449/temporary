import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import { Show } from '.componants/Show'

const App=()=>{
   
   function submitForm(e) {
    e.preventDefault()
    console.log("data submitted")
    
   }
    return(
        <>
        <form onSubmit={submitForm} >
            <input type="text" name='fname' />
            <input type="submit" />
        </form>
        </>
    )
}

export default App
