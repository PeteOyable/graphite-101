import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  const onIncrementCounter = () => {
    setCount((count) => count + 1)
  };

  const onDecrementCounter = () => {
    if(count > 0){
      setCount((count) => count - 1)
    }
  }

  return (
    <>
      <h1>Hi world!</h1>
      <p><strong>This is a super counter. All you have to do is click on the button, and the see the magic happening.</strong></p>
      <div className="card">
        <button onClick={onIncrementCounter}>
         Count me in
        </button>
        <button  onClick={onDecrementCounter}>
          Count me out
        </button>
      </div>
      <p className="read-the-docs">
        The count is {count}
      </p>

    </>
  )
}

export default App;
