import {BrowserRouter, useNavigate} from "react-router-dom";
import AppRouter from "./Components/AppRouter";
import Header from "./Components/Header";
import "./style/style.css"
import Footer from "./Components/Footer";
import { useEffect, useState, useMemo, useCallback } from "react";
import {useFetching} from "./hookes/useFetching";
import PersonService from "./axios/PersonService";
import ClaimWorkService from "./axios/ClaimWorkService";
import TechService from "./axios/TechService";
import {CombinedContext} from "./Context/context";
import VacancyService from "./axios/VacancyService";
import CompanyService from "./axios/CompanyService";




function App() {
    const [persons, setPersons] = useState([]);
    const [works, setWorks] = useState([]);
    const [techs, setTechs] = useState([]);
    const [vacancies, setVacancy] = useState([]);
    const [companies, setCompany] = useState([]);

    const [fetchPersons] = useFetching(async () => setPersons(await PersonService.getAll()));
    const [fetchWorks] = useFetching(async () => setWorks(await ClaimWorkService.getAll()));
    const [fetchTechs] = useFetching(async () => setTechs(await TechService.getAll()));
    const [fetchVacancy] = useFetching(async () => setVacancy(await VacancyService.getAll()));
    const [fetchCompany] = useFetching(async () => setCompany(await CompanyService.getAll()));

    const loadData = useCallback(() => {
        fetchPersons();
        fetchWorks();
        fetchTechs();
        fetchVacancy();
        fetchCompany();
    }, [fetchPersons, fetchWorks, fetchTechs, fetchVacancy, fetchCompany]);

    useEffect(() => {
        try {
            loadData();
        } catch (error) {
            console.error("Error loading data:", error);
        }
    }, []);

    
    
    return (
        <CombinedContext.Provider value={{
            persons,
            setPersons,
            works,
            setWorks,
            techs,
            setTechs,
            vacancies,
            setVacancy,
            companies,
            setCompany
        }}>
            <BrowserRouter>
                <Header />
                <div className="main">
                    <AppRouter />
                </div>
                <Footer />
            </BrowserRouter>
        </CombinedContext.Provider>
  );
}

export default App;
