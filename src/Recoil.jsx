import { useCallback, useState } from "react"
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom } from "./store/atoms/CountAtom";

function Recoil() {

  return (
    <>
    <div>
        <Parent></Parent>
    </div>
    </>
  )
}

function Parent() {
  console.log("Parent re-rendered!");
  return(
    <div>
        <RecoilRoot>
            <Child1></Child1>
            <Child2></Child2>
        </RecoilRoot>
    </div>
  )
}

function Child1() {
    const count = useRecoilValue(countAtom);
  return (
    <div>{count}</div>
  ) 
}

function Child2() {
  const [count,setCount] = useRecoilState(countAtom);
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

export default Recoil
