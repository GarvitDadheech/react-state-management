import { useCallback, useContext, useState } from "react"
import CountContext from "./context/CountContext";

function ContextApi() {

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
  console.log("Parent re-render");
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
  const {count,setCount} = useContext(CountContext);
  const handleDecrement = useCallback(() => {
    setCount(count => count-1)
  },[count]);

  const handleIncrement = useCallback(() => {
    setCount(count => count+1)
  },[count]);

  return (
    <div>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default ContextApi
