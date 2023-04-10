import React, { useCallback, useEffect, useState } from 'react';

export default function HookUseCallback() {
    const [count, setCount] = useState(0);
    const [toggle, setToggle] = useState(true);

    /** show 변수에는 함수의 주소 값을 가지고 있기 때문에 useEffect를 매번 실행한다. */
    const show = (): void => {
        console.log(`show: ${count}`);
        return;
    };

    useEffect(() => {
        console.log("show() 렌더링");
    }, [show]);

    /** callbackShow 함수 Memoization */
    const callbackShow = useCallback(() => {
        console.log(`callback Show: ${count}`);
        return;
    }, [count]);

    useEffect(() => {
        console.log("callbackShow() 렌더링");
    }, [callbackShow]);

    return (
        <div>
            <input type='number' value={count} onChange={(e) => setCount(parseInt(e.target.value))} />
            <button onClick={callbackShow}>show</button>
            <button onClick={() => setToggle(!toggle)}>{toggle.toString()}</button>
        </div>
    )
}