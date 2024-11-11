import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
    const [selected1,setSelected1] = useState(true)
    const [selected2,setSelected2] = useState(false)
    function submitForm(e) {
        e.preventDefault()

    }

    function handleChange(e) {
        setSelected1(e.target.checked)
    }
    function handleChangeSecond(e) {
        setSelected2(e.target.checked)
    }

    return (
        <>
            <form onSubmit={submitForm}>
                select option 1:<input type="checkbox" checked={selected1} onChange={handleChange} name='option1' />
                <br />
                {/* we cannot display boolean value  */}
                {selected1?"option 1 selected":"option 1 not selected"}
                <br />
                select option 2:<input type="checkbox" checked={selected2} onChange={handleChangeSecond} name='option2' />
                <br />
                {selected2?"option 2 selected":"option 2 not selected"}
            </form>
        </>
    )
}

export default App
