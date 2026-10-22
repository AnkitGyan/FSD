import { useState } from 'react'
import './App.css'
import Sum from './components/sum'

function App() {
  const [count, setCount] = useState(0);

  console.log("App component rendered");

  return (
    <>
      <section id="center">
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
        <Sum number={1000}></Sum>
      </section>
    </>
  )
}

export default App;
