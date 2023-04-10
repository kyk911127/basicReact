import React, { useState } from 'react';
import '../../styles/HookUseContext.css';
import Page from './components/Page';
import { ThemeContext } from './context/ThemeContext';

function HookUseContext() {
  const [isDark, setIsDark] = useState(false);
  
  return (
    <ThemeContext.Provider value={{isDark, setIsDark}}>
      <Page/>
    </ThemeContext.Provider>
  );
}

// function HookUseContext() {
//   const [isDark, setIsDark] = useState(false);
  
//   return (
//     <Page isDark={isDark} setIsDark={setIsDark} />
//   );
// }

export default HookUseContext;
