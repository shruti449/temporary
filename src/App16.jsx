import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
    const [selectOption,setOption] = useState("English")

    function handleChange(e) {
      setOption(e.target.value)
    }

    return (
        <>
           <select value={selectOption} onChange={handleChange}>
             <option value="Marathi">Marathi</option>
             <option value="Hindi">Hindi</option>
             <option value="English">English</option>
           </select>
           <br />
           selected option is : {selectOption}
        </>
    )
}

export default App
