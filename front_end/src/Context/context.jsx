// context.js
import { createContext, useContext } from 'react';

export const CombinedContext = createContext();

export const useCombinedContext = () => {
    return useContext(CombinedContext);
};