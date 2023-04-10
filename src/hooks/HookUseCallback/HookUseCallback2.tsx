import React, { useCallback, useEffect, useState } from 'react';
import Box from './components/Box';

export default function HookUseCallback2() {
    const [size, setSize] = useState(100);
    const [isDark, setIsDark] = useState(false);

    const createBoxStyle = useCallback((): object => {
        return {
            backgroundColor: 'red',
            width: `${size}px`,
            height: `${size}px`
        };
    }, [size]);

    return (
        <div style={{background: isDark ? 'black' : 'white'}}>
            <input type='number' value={size} onChange={(e) => setSize(parseInt(e.target.value))} />
            <button onClick={() => setIsDark(!isDark)}>다크 모드</button>
            <Box createBoxStyle={createBoxStyle} />
        </div>
    )
}