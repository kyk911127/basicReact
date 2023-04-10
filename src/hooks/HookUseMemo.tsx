import React, { useEffect, useMemo, useState } from 'react';

export default function HookUseMemo() {
    const [count, setCount] = useState(0);
    const [isYn, setIsYn] = useState(false);

    /** 
     * str 변수가 원시 타입이라면 값을 비교한다.
     * count state가 바뀌더라도 str 값은 변하지 않기 때문에 useEffect가 실행되지 않는다. 
     */
    const str = isYn ? "A" : "B";

    useEffect(() => {
        console.log("원시 타입 렌더링");
    }, [str]);

    /**
     * obj 변수가 객체 타입이라면 주소를 비교한다.
     * count state가 바뀌면 obj의 주소는 다르기 때문에 useEffect를 실행한다.
     */
    const obj = { char : isYn ? "A" : "B" };

    useEffect(() => {
        console.log("객체 타입 렌더링");
    }, [obj]);

    /**
     * memoObj 변수 Memoization
     */
    const memoObj = useMemo(() => {
        return { char : isYn ? "A" : "B" };
    }, [isYn]);

    useEffect(() => {
        console.log("useMemo 렌더링");
    }, [memoObj]);

    return (
        <div>
            <input type='number' value={count} onChange={(e) => setCount(parseInt(e.target.value))} />
            <h2>Memo</h2>
            <p>{str}</p>
            <p>{obj.char}</p>
            <p>{memoObj.char}</p>
            <button onClick={() => setIsYn(!isYn)}>클릭</button>
        </div>
    )
}