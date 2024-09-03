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
  const setCount = useSetRecoilState(countAtom);
  console.log("Button re-rendered!");
  const handleDecrement = (() => {
    setCount(count => count-1)
  });

  const handleIncrement = (() => {
    setCount(count => count+1)
  });

  return (
    <div>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default Recoil
