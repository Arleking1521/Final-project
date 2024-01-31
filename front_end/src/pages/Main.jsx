import React, { useEffect, useState } from 'react';
import { useFetching } from "../hookes/useFetching";
import PostsList from "../Components/PostsList";
import PersonService from "../axios/PersonService";
import ClaimWorkService from "../axios/ClaimWorkService";
import TechService from "../axios/TechService";
import { useNavigate } from "react-router-dom";


const Main = () => {
    const [persons, setPersons] = useState([]);
    const [works, setWorks] = useState([]);
    const [techs, setTechs] = useState([]);
    const navigate = useNavigate();

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

    const handleDetailsClick = () => {
        navigate(``);
    };
    const handleNewClick = () => {
        navigate(`/newperson`);
    };
    return (
        <div className="main_blog">
            <h1 className="title">
                Наши Ученики
            </h1>
            <div className="filter">
            {techs.map((tech) => (
                <span key={tech.id} >
                    {tech.frame.split(',').map((frame) =>(
                    <a key={frame}>{frame}</a>))}
                </span>
            ))}
            </div>
            <button onClick={handleNewClick}>New Post</button>

            <PostsList persons={persons} works={works} />
        </div>
    );
};

export default Main;
