import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Test 2025</h1>
      <h2>Nje aplikacion për testim - klikoni në butonin e poshtëm</h2>
      <p>
          <button onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
    </>
  )
}

export default App
