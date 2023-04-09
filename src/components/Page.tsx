import React, { useContext } from 'react';
import { IHookUseContext } from '../interface/IHookUseContext';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

export default function Page() {
    return (
        <div className='page'>
            <Header />
            <Content />
            <Footer />
        </div>
    )
}

// export default function Page(props: IHookUseContext) {
//     return (
//         <div className='page'>
//             <Header isDark={props.isDark}/>
//             <Content isDark={props.isDark}/>
//             <Footer isDark={props.isDark} setIsDark={props.setIsDark}/>
//         </div>
//     )
// }