// context.js
import { createContext, useContext } from 'react';

export const PersonContext = createContext();
export const WorkContext = createContext();
export const TechContext = createContext();
export const CompaniesContext = createContext();
export const VacancyContext = createContext();

export const usePersonContext = () => {
    return useContext(PersonContext);
};

export const useWorkContext = () => {
    return useContext(WorkContext);
};

export const useTechContext = () => {
    return useContext(TechContext);
};

export const useCompaniesContext = () => {
    return useContext(CompaniesContext);
};

export const useVacancyContext = () => {
    return useContext(VacancyContext);
};