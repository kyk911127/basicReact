import React, { useContext } from 'react';
import { IHookUseContext } from '../interface/IHookUseContext';
import { ThemeContext } from '../context/ThemeContext';

export default function Footer() {
    const { isDark, setIsDark } = useContext(ThemeContext);

    const toggleDarkMode = () => {
        if(setIsDark === undefined) return;
        setIsDark(!isDark);
    };

    return (
        <footer 
            className='footer'
            style={{
                backgroundColor: isDark ? 'black' : 'lightgray'
            }}
        >
            <button className='button' onClick={toggleDarkMode}>다크모드</button>
        </footer>
    )
}

// export default function Footer(props: IHookUseContext) {
//     const toggleDarkMode = () => {
//         if(props.setIsDark === undefined) return;
//         props.setIsDark(!props.isDark);
//     };

//     return (
//         <footer 
//             className='footer'
//             style={{
//                 backgroundColor: props.isDark ? 'black' : 'lightgray'
//             }}
//         >
//             <button className='button' onClick={toggleDarkMode}>다크모드</button>
//         </footer>
//     )
// }