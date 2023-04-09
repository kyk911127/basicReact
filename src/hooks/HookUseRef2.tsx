import React, { useRef, useState } from 'react';

/** ref와 변수의 차이 */
function HookUseRef2() {
  let count = 0;
  const countRef = useRef(0);
  const [render, setRender] = useState(false);
  
  console.log("렌더링");

  const handleClickButtonVar = () => {
    /** 변수는 렌더링 될때마다 초기화가 된다 */
    count = count + 1;
    console.log(`Var: ${count}`);
  }
  
  const handleClickButtonRef = () => {
    /** ref는 언마운트 전까지 유지된다. */
    countRef.current = countRef.current + 1;
    console.log(`Ref: ${countRef.current}`);
  }

  const handleClickButtonRender = () => {
    setRender((prevState) => !prevState);
  }

  return (
    <div>
      <button onClick={handleClickButtonVar}>Var 카운트</button>
      <button onClick={handleClickButtonRef}>Ref 카운트</button>
      <button onClick={handleClickButtonRender}>렌더링</button>
      <p>Var : {count}</p>
      <p>Ref : {countRef.current}</p>
    </div>
  );
}

export default HookUseRef2;
