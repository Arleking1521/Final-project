import React, { useContext } from 'react';
import VacancyList from '../Components/VacancyList';
import { useNavigate } from 'react-router-dom';
import { VacancyContext, CompaniesContext, TechContext } from '../Context/context';

const Vacancy_list = () => {
    const vacancyContext = useContext(VacancyContext);
    const companiesContext = useContext(CompaniesContext);
    const techContext = useContext(TechContext);
    const navigate = useNavigate();

    const { vacancies } = vacancyContext;
    const { companies } = companiesContext;
    const { techs } = techContext;

    const handleDetailsClick = () => {
        navigate(``);
    };

    const handleNewClick = () => {
        navigate(`/newperson`);
    };

    return (
        <div className="main_blog">
            <h1 className="title">Вакансии от компаний</h1>
            <div className="filter">
                {techs.map((tech) => (
                    <span key={tech.id}>
            {tech.frame.split(',').map((frame) => (
                <a key={frame}>{frame}</a>
            ))}
          </span>
                ))}
            </div>
            {/* <button onClick={handleNewClick}>New Post</button> */}

            <VacancyList companies={companies} vacancies={vacancies} />
        </div>
    );
};

export default Vacancy_list;
