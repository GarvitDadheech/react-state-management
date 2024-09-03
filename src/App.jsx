import { useState } from "react"

function App() {

  const [count,setCount] = useState(0);

  return (
    <>
    <div>
        <Parent count={count} setCount={setCount}></Parent>
    </div>
    </>
  )
}

function Parent({count,setCount}) {
  return(
    <div>
      <Child1 count={count}></Child1>
      <Child2 setCount={setCount}></Child2>
    </div>
  )
}

function Child1(props) {
  return (
    <div>{props.count}</div>
  ) 
}

function Child2({setCount}) {

  function handleDecrement() {
    setCount(count => count-1)
  }

  function handleIncrement() {
    setCount(count => count+1)
  }

  return (
    <div>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default App
