import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-red-400 rounded-lg px-8 py-4 mx-10'>Tailwind started !</h1>
     <Card userName="Ashish Kumar " btnText="click here"/>
     <Card userName="Manish Kumar" btnText="click me"/>
     <Card userName="Nisha Maurya" btnText="press me"/>
    </>
  )
}

export default App
