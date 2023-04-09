import React, { useEffect, useRef } from 'react';
import { LegacyRef } from 'react';

/** ref의 DOM접근 */
function HookUseRef3() {
  const inputRef: LegacyRef<HTMLInputElement> = useRef(null);
  
  useEffect(() => {
    console.log(inputRef);
    if(inputRef.current === null) return;
    inputRef.current.focus();
  }, []);

  const login = () => {
    if(inputRef.current === null) return;
    alert(inputRef.current.value);
    inputRef.current.focus();
  }

  return (
    <div>
      <input ref={inputRef} type='text' placeholder='DOM'/>
      <button onClick={login}>확인</button>
    </div>
  );
}

export default HookUseRef3;
