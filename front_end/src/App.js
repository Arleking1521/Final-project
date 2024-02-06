import {BrowserRouter, useNavigate} from "react-router-dom";
import AppRouter from "./Components/AppRouter";
import Header from "./Components/Header";
import "./style/style.css"
import Footer from "./Components/Footer";
import {useEffect, useState} from "react";
import {useFetching} from "./hookes/useFetching";
import PersonService from "./axios/PersonService";
import ClaimWorkService from "./axios/ClaimWorkService";
import TechService from "./axios/TechService";
import {PersonContext, WorkContext, TechContext} from "./Context/context";




function App() {
    const [persons, setPersons] = useState([]);
    const [works, setWorks] = useState([]);
    const [techs, setTechs] = useState([]);

    const [fetchPersons] = useFetching(async () => setPersons(await PersonService.getAll()));
    const [fetchWorks] = useFetching(async () => setWorks(await ClaimWorkService.getAll()));
    const [fetchTechs] = useFetching(async () => setTechs(await TechService.getAll()));

    const loadData = () => {
        fetchPersons();
        fetchWorks();
        fetchTechs();
    };

    useEffect(() => {
        try {
            loadData();
        } catch (error) {
            console.error("Error loading data:", error);
        }
    }, []);

    return (
        <PersonContext.Provider value={{ persons, setPersons }}>
            <WorkContext.Provider value={{ works, setWorks }}>
                <TechContext.Provider value={{ techs, setTechs }}>
                    <BrowserRouter>
                        <Header />
                        <div className="main">
                            <AppRouter />
                        </div>
                        <Footer />
                    </BrowserRouter>
                </TechContext.Provider>
            </WorkContext.Provider>
        </PersonContext.Provider>
  );
}

export default App;
