import React, { useContext } from 'react';
import PostsList from '../Components/PostsList';
import { useNavigate } from 'react-router-dom';
import { PersonContext, TechContext, WorkContext } from '../Context/context';

const Vacancy_list = () => {
    const personsContext = useContext(PersonContext);
    const workContext = useContext(WorkContext);
    const techContext = useContext(TechContext);
    const navigate = useNavigate();

    const { persons } = personsContext;
    const { works } = workContext;
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

            <PostsList persons={persons} works={works} />
        </div>
    );
};

export default Vacancy_list;
