import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import HookUseState from './hooks/HookUseState';
import HookUseEffect from './hooks/HookUseEffect';
import HookUseRef1 from './hooks/HookUseRef1';
import HookUseRef2 from './hooks/HookUseRef2';
import HookUseRef3 from './hooks/HookUseRef3';
import HookUseContext from './hooks/HookUseContext/HookUseContext';
import HookUseMemo from './hooks/HookUseMemo';
import HookUseCallback from './hooks/HookUseCallback/HookUseCallback';
import HookUseCallback2 from './hooks/HookUseCallback/HookUseCallback2';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <HookUseCallback2 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
