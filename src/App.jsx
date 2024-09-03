import { useContext, useState } from "react"
import CountContext from "./context/CountContext";

function App() {

  const [count,setCount] = useState(0);

  return (
    <>
    <div>
        <CountContext.Provider value={{count,setCount}}>
          <Parent></Parent>
        </CountContext.Provider>
    </div>
    </>
  )
}

function Parent() {
  return(
    <div>
      <Child1></Child1>
      <Child2></Child2>
    </div>
  )
}

function Child1() {
  const {count} = useContext(CountContext);
  return (
    <div>{count}</div>
  ) 
}

function Child2() {
  const {setCount} = useContext(CountContext);
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
