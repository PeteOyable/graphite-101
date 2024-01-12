import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello world!</h1>
      <p><strong>This is a super counter. All you have to do is click on the button, and the see the magic happening.</strong></p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
         Count me in
        </button>
      </div>
      <p className="read-the-docs">
        The count is {count}
      </p>
    </>
  )
}

export default App
