import { useState } from 'react'
import DilogBox from './components/DilogBox'
import './App.css'

function App() {
  const [dilogbox, setDilogbox] = useState(0)
  const handleDilo = () => {
    setDilogbox(1);
  }


  return (
    <>
    {!dilogbox ? (<DilogBox count={handleDilo} />) : null}
     
    </>
  )
}

export default App
