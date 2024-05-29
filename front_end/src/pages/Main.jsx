import React, { useContext } from 'react';
import PostsList from '../Components/PostsList';
import { useNavigate, useParams, Link} from 'react-router-dom';
import { PersonContext, TechContext, WorkContext } from '../Context/context';
import back from "../assets/back-button.png"

const Main = () => {
    const personsContext = useContext(PersonContext);
    const workContext = useContext(WorkContext);
    const techContext = useContext(TechContext);
    const navigate = useNavigate();

    const { persons } = personsContext;
    const { works } = workContext;
    const { techs } = techContext;

    const parametrs = useParams();

    let UniqueTechs = [];
    let urlOption;
    let backButtonShow = false;

    const isEmptyObject = (obj) => {
        return Object.keys(obj).length === 0;
      }

    if(isEmptyObject(parametrs)){
        UniqueTechs = Array.from(new Set(techs.map(tech => tech.stack)));
        urlOption = "stack";
    }
    else{
        UniqueTechs = Array.from(techs.map(tech => tech.frame));
        urlOption = "frame";
        backButtonShow = true;
    }

    const handleDetailsClick = () => {
        navigate(``);
    };

    const handleNewClick = () => {
        navigate(`/newperson`);
    };

    const handleFilterClick = (event, path) => {
        event.preventDefault(); // Предотвращаем переход по ссылке по умолчанию
        console.log(path);
        navigate(path); // Переход на указанный путь
      };


    const handleGoBack = () => {
        navigate('/');
    };

    return (
        <div className="main_blog">
            <span className="title_head">
                {backButtonShow ? <button onClick={handleGoBack}><img src={back}/></button> : null}
                <h1 className='title'>Наши Ученики</h1>
            </span>
            <div className="filter">
                {UniqueTechs.map((tech) => (
                    <span>
                            <a href="" onClick={(event) => handleFilterClick(event, '/' + urlOption + '/' + tech)}>{tech}</a>
                    </span>
                ))}
            </div>
            {/* <button onClick={handleNewClick}>New Post</button> */}

            <PostsList persons={persons} works={works} techs={techs} filter={parametrs}/>
        </div>
    );
};

export default Main;
