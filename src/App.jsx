import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Hello counter</h2>
      <p>Click on the button to update the counter.</p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Count me in
        </button>
        <p>
          Count is {count}
        </p>
      </div>
    </>
  )
}

export default App
