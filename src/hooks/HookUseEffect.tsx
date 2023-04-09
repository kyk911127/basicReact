import React, { useEffect, useState } from 'react';

function HookUseEffect() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("마운트 & 렌더링 시 실행");
  })

  useEffect(() => {
    console.log("마운트 시 실행");
  }, [])

  useEffect(() => {
    console.log("마운트 & text state 변경 시 실행");
  }, [text])

  useEffect(() => {
    console.log("마운트 & count state 변경 시 실행");
    return () => {
      console.log(`clean up : ${count}`)
    }
  }, [count])
  
  const handleClickButton = () => {
    setCount((prevState) => prevState + 1);
  }

  const handleChangeInput = (e: any) => {
    setText(e.target.value);
  }

  return (
    <div>
      <button onClick={handleClickButton}>카운트</button>
      <span>{count}</span>
      <div>
        <input type='text' value={text} onChange={handleChangeInput}/>
        <span>{text}</span>
      </div>
    </div>
  );
}

export default HookUseEffect;
