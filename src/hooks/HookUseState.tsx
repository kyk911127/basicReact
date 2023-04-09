import React, { useState } from 'react';

const initCount = () => {
  console.log("count 초기화")
  return 1;
}

function HookUseState() {
  /** 초기값을 함수로 줄 경우 렌더링마다 매번 실행되는데 콜백으로 함수를 주면 초기랜더링 시에만 실행된다. */
  const [count, setCount] = useState(() => initCount());

  /** state가 변경될 때마다 컴포넌트가 재실행되기 때문에 렌더링이 발생한다. */
  console.log(`컴포넌트 렌더링 ${count}`);

  const handleClickUpdate = () => {
    /** prevState 렌더링 이전 값 */
    setCount(prevState => prevState + 1);
  }

  const handleClickShow = () => {
    setTimeout(() => {
      /** 
       * state는 렌더링 된 값들을 고정한다. 
       * Show 버튼이 클릭되어졌을때의 count state값을 가짐.
      */
      console.log(count);
    }, 3000);
  }

  return (
    <div>
      <span>카운트: {count /** count값이 새로 렌더링된다 */ }</span>  
      <div>
        <button onClick={handleClickUpdate}>Update</button>
        <button onClick={handleClickShow}>Show</button>
      </div>
    </div>
  );
}

export default HookUseState;
