import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
    const [value, setValue] = useState("female")
    const [firstName, setFirstName] = useState("")
    const [number, setPhoneNumber] = useState("")
    const [email, setEmail] = useState("")
    const [marathi, setMarathi] = useState(true)
    const [hindi, setHindi] = useState(false)
    const [english, setEnglish] = useState(false)

    function submitForm(e) {
        e.preventDefault()

    }
    function handleChange(e) {
        if (e.target.id == "r1") {
            setValue("male")
        } else {
            setValue("female")
        }
    }
    function textChange(e) {
        setFirstName(e.target.value)
    }
    function numChange(e) {
        setPhoneNumber(e.target.value)
    }
    function emailChange(e) {
        setEmail(e.target.value)
    }
    function langChange1(e) {
        setMarathi(e.target.checked)
    }
    function langChange2(e) {
        setHindi(e.target.checked)
    }
    function langChange3(e) {
        setEnglish(e.target.checked)
    }

    return (
        <>
            <form onSubmit={submitForm}>
                Name:<input type="text" name='fname' value={firstName} onChange={textChange} />
                <br />
                Phone:<input type="number" name="num" value={number} onChange={numChange} />
                <br />
                Email:<input type="email" name="email" value={email} onChange={emailChange} />
                <br />
                Gender:<input id='r1' type="radio" checked={value == "male"} onChange={handleChange} name='gender' /> Male
                <input id='r2' type="radio" checked={value === "female"} onChange={handleChange} name='gender' /> Female
                <br />
                Language:<input type="checkbox" checked={marathi} onChange={langChange1} /> Marathi
                <input type="checkbox" checked={hindi} onChange={langChange2} /> Hindi
                <input type="checkbox" checked={english} onChange={langChange3} /> English
                <br />
                <input type="submit" />
                <br />
                <br />
                <div>
                    <ul>
                        <table border={1}>
                            <thead>
                                <tr>
                                    <th>NAME</th>
                                    <th>PHONE</th>
                                    <th>EMAIL</th>
                                    <th>GENDER</th>
                                    <th>lANGUAGE</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <td>{firstName}</td>
                                    <td>{number}</td>
                                    <td>{email}</td>
                                    <td>{value}</td>
                                    <td>{marathi ? "marathi" : " "},
                                        {hindi ? "hindi" : " "},
                                        {english ? "english" : " "}</td>
                                </tr>



                            </tbody>
                        </table>
                    </ul>
                </div>
            </form>
        </>
    )
}

export default App

