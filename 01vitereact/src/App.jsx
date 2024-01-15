import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0);

  const Increment = ()=>{
    count=count+1;
    console.log(count)
    setCount(count);
  }

  const Decrement =()=>{
    count=count -1;
    setCount(count)
  }

  return (
    <div className='wrapper'>
      <div className='container'>
        <button onClick={Increment}>increment </button>
        <div>{count}</div>
        <button onClick={Decrement}>decrement</button>
        <div>Footer:{count}</div>
      </div>
      
    </div>
  )
}

export default App
