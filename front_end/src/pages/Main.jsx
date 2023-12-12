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

    const [fetchPersons] = useFetching(async () => {
        const fetchedPersons = await PersonService.getAll();
        setPersons(fetchedPersons);
    });

    const [fetchWorks] = useFetching(async () => {
        const fetchedWorks = await ClaimWorkService.getAll();
        setWorks(fetchedWorks);
    });

    const [fetchTechs] = useFetching(async () => {
        const fetchedTechs = await TechService.getAll();
        setTechs(fetchedTechs);
    });

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

    console.log('persons: ', persons);
    console.log('works: ', works);

    const handleDetailsClick = () => {
        navigate(``);
    };

    return (
        <div className="main_blog">
            {techs.map((tech) => (
                <div key={tech.id} className="list_item">
                    <h1>{tech.frame}</h1>
                </div>
            ))}
            <button onClick={handleDetailsClick}>New Post</button>
            <PostsList persons={persons} works={works} />
        </div>
    );
};

export default Main;
