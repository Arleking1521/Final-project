import React, { useContext } from 'react';
import PostsList from '../Components/PostsList';
import { useNavigate } from 'react-router-dom';
import { PersonContext, TechContext, WorkContext } from '../Context/context';

const Main = () => {
    const personsContext = useContext(PersonContext);
    const workContext = useContext(WorkContext);
    const techContext = useContext(TechContext);
    const navigate = useNavigate();

    const { persons } = personsContext;
    const { works } = workContext;
    const { techs } = techContext;

    const UniqueTechs = Array.from(new Set(techs.map(tech => tech.stack)));

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
                {UniqueTechs.map((tech) => (
                    <span>
                            <a>{tech}</a>
                    </span>
                ))}
            </div>
            {/* <button onClick={handleNewClick}>New Post</button> */}

            <PostsList persons={persons} works={works} techs={techs} />
        </div>
    );
};

export default Main;
