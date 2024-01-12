import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h3>Hi counter</h3>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Count me in
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          Count me out
        </button>
      </div>
      <p>Count is {count}</p>
    </>
  )
}

export default App
