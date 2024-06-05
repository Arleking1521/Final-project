import {BrowserRouter, useLocation } from "react-router-dom";
import AppRouter from "./Components/AppRouter";
import Header from "./Components/Header";
import "./style/style.css"
import Footer from "./Components/Footer";
import { useEffect, useState, useMemo, useCallback } from "react";
import {useFetching} from "./hookes/useFetching";
import APIService from "./axios/APIService";
import {CombinedContext} from "./Context/context";




function App() {
    const queryParams = new URLSearchParams(window.location.search);
    const companyURL = queryParams.get('c');

    const [allDatas, setAllDatas] = useState([]);
    
    const [fetchAllDatas] = useFetching(async () => setAllDatas(await APIService.getAll()));


    const loadData = useCallback(() => {
        fetchAllDatas();
       
    }, [fetchAllDatas]);

    useEffect(() => {
        try {
            loadData();
        } catch (error) {
            console.error("Error loading data:", error);
        }
    }, []);

    
    return (
        <CombinedContext.Provider value={{ allDatas, setAllDatas, companyURL}}>
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
