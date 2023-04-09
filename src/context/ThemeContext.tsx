import { createContext } from 'react';
import { IHookUseContext } from '../interface/IHookUseContext';

export const ThemeContext = createContext<IHookUseContext>({});