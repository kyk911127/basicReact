import React, { useContext } from 'react';
import { IHookUseContext } from '../interface/IHookUseContext';
import { ThemeContext } from '../context/ThemeContext';

export default function Header() {
    const { isDark } = useContext(ThemeContext);
    return (
        <header 
            className='header'
            style={{
                backgroundColor: isDark ? 'black' : 'lightgray',
                color: isDark ? 'white' : 'black'
            }}
        >
            <h1>useContext</h1>
        </header>
    )
}

// export default function Header(props: IHookUseContext) {
//     return (
//         <header 
//             className='header'
//             style={{
//                 backgroundColor: props.isDark ? 'black' : 'lightgray',
//                 color: props.isDark ? 'white' : 'black'
//             }}
//         >
//             <h1>useContext</h1>
//         </header>
//     )
// }