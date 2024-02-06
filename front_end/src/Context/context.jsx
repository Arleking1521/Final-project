// context.js
import { createContext, useContext } from 'react';

export const PersonContext = createContext();
export const WorkContext = createContext();
export const TechContext = createContext();

export const usePersonContext = () => {
    return useContext(PersonContext);
};

export const useWorkContext = () => {
    return useContext(WorkContext);
};

export const useTechContext = () => {
    return useContext(TechContext);
};
