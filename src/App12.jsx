import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
    const [firstName, setFirstName] = useState("")
    function submitForm(e) {
        e.preventDefault()
        //send data to server by using axios
        console.log("data submitted")

    }
    function handleChange(e) {
        let s1 = e.target.value
        setFirstName(s1)
    }

    return (
        <>
            <form onSubmit={submitForm}>
                <input type="text" name='fname' value={firstName} onChange={handleChange} />
                <input type="submit" />
                <br />
                you typed:{firstName}
            </form>
        </>
    )
}

export default App
