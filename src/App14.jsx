import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
    const [value,setValue] = useState("female")
    function submitForm(e) {
        e.preventDefault()

    }

    // function handleChange(e) {
    //     setValue("male")
    // }
    // function handleChangeSecond(e) {
    //    setValue("female")
    // }

    function handleChange(e) {
        if(e.target.id=="r1"){
            setValue("male")
        }else{
            setValue("female")
        }
        
    }
    return (
        <>
            <form onSubmit={submitForm}>
                Male:<input id='r1' type="radio" checked={value=="male"} onChange={handleChange} name='gender' />
                <br />
                Female:<input id='r2' type="radio" checked={value==="female"} onChange={handleChange} name='gender' />
                <br />
                You Selected : {value}
            </form>
        </>
    )
}

export default App

