import React, { useContext } from 'react';
import PostsList from '../Components/PostsList';
import { useNavigate } from 'react-router-dom';
import { PersonContext, TechContext, WorkContext } from '../Context/context';

const Vacancy_list = () => {
    const companiesContext = useContext(CompaniesContext);
    const vacancyContext = useContext(VacancyContext);
    const navigate = useNavigate();

    const { companies } = companiesContext;
    const { vacancies } = vacancyContext;

    const handleDetailsClick = () => {
        navigate(``);
    };

    const handleNewClick = () => {
        navigate(`/newperson`);
    };

    return (
        <div className="main_blog">
            <h1 className="title">Наши Ученики</h1>
            <div className="filter">
                {techs.map((vacancies) => (
                    <span key={vacancies.id}>
            {vacancies.frame.split(',').map((frame) => (
                <a key={frame}>{frame}</a>
            ))}
          </span>
                ))}
            </div>
            {/* <button onClick={handleNewClick}>New Post</button> */}

            <PostsList persons={persons} works={works} />
        </div>
    );
};

export default Vacancy_list;
