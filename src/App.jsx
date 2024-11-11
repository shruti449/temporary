import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
    const [data,setData] = useState({fname:"",email:"",lang:"English"})

    function handleNameChange(e) {
      setData({...data,fname:e.target.value})
    setData({fname:e.target.value,email:data.email,lang:data.lang})
    }
    function handleLangChange(e) {
        setData({...data,lang:e.target.value})
      }
      function handleEmailChange(e) {
        setData({...data,email:e.target.value})
      }

    return (
        <>
           <input type="text" value={data.fname} onChange={handleNameChange} />
           <br />
           <input type="email" value={data.email} onChange={handleEmailChange} />
           <br />
           <select value={data.lang} onChange={handleLangChange}>
             <option value="Marathi">Marathi</option>
             <option value="Hindi">Hindi</option>
             <option value="English">English</option>
           </select>
           <br />
           Name: {data.fname}
           <br />
           Email: {data.email}
           <br />
           language: {data.lang}
        </>
    )
}

export default App
