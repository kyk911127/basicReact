import React, { useContext } from 'react';
import { IHookUseContext } from '../interface/IHookUseContext';
import { ThemeContext } from '../context/ThemeContext';

export default function Content() {
    const { isDark } = useContext(ThemeContext);
    return (
        <div 
            className='content'
            style={{
                backgroundColor: isDark ? 'black' : 'white',
                color: isDark ? 'white' : 'black'
            }}
        >
            <p>useContext</p>
        </div>
    )
}

// export default function Content(props: IHookUseContext) {
//     return (
//         <div 
//             className='content'
//             style={{
//                 backgroundColor: props.isDark ? 'black' : 'white',
//                 color: props.isDark ? 'white' : 'black'
//             }}
//         >
//             <p>useContext</p>
//         </div>
//     )
// }