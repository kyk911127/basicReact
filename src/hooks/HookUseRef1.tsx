import React, { useRef, useState } from 'react';

  /** ref와 state의 차이 */
function HookUseRef1() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  
  console.log("렌더링");

  const handleClickButtonState = () => {
    setCount((prevState) => prevState + 1);
  }
  
  const handleClickButtonRef = () => {
    countRef.current = countRef.current + 1;
    /** state는 값이 변경될 때마다 렌더링이 되지만 ref는 렌더링이 되지 않는다. */
    console.log(`Ref: ${countRef.current}`);
  }

  const handleClickButtonShow = () => {
    setTimeout(() => {
      console.log(`State: ${count}`);
      /** ref의 값은 항상 최신 값을 가진다. */
      console.log(`Ref: ${countRef.current}`);
    }, 3000);
  }

  return (
    <div>
      <button onClick={handleClickButtonState}>State 카운트</button>
      <button onClick={handleClickButtonRef}>Ref 카운트</button>
      <button onClick={handleClickButtonShow}>Show</button>
      <p>State : {count}</p>
      <p>Ref : {countRef.current}</p>
    </div>
  );
}

export default HookUseRef1;
