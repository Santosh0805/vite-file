import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <h1> Hello world </h1>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          <button onClick={() => setCount((const)=> count-1)}>
          </button>
          count is {count}
        </button>
        <button>
          count is {count}
        </button>
      </div>
      
    </>
  )
}

export default App
