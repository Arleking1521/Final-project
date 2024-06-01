import React, { useContext } from 'react';
import PostsList from '../Components/PostsList';
import { useNavigate, useParams } from 'react-router-dom';
import { CombinedContext } from '../Context/context';
import back from "../assets/back-button.png"


const Main = () => {
    
    const combinedContext = useContext(CombinedContext);
    const navigate = useNavigate();

    const persons = combinedContext.allDatas.Person || [];
    const works  = combinedContext.allDatas.Work || [];
    const techs = combinedContext.allDatas.Tech || [];
    

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
        techs.forEach(tech => {
            if(tech.stack.toLowerCase() === parametrs.stack.toLowerCase()){
                UniqueTechs.push(tech.frame);
            }
        });
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
        if(urlOption === "frame"){
            navigate('/stack/' + parametrs.stack + path); // Переход на указанный путь
        }
        else{
            navigate(path);
        }
      };


    const handleGoBack = () => {
        navigate('/');
    };

    console.log("Person : ", techs);

    return (
        <div className="main_blog">
            <span className="title_head">
                {backButtonShow ? <button onClick={handleGoBack}><img src={back}/></button> : null}
                <h1 className='title'>Наши Ученики</h1>
            </span>
            <div className="filter">
                {UniqueTechs.map((tech) => (
                    <span>
                            {tech ? <a href="" onClick={(event) => handleFilterClick(event, '/'+ urlOption + '/' + tech)}>{tech}</a> : null}
                    </span>
                ))}
            </div>
            {/* <button onClick={handleNewClick}>New Post</button> */}

            <PostsList persons={persons} works={works} techs={techs} filter={parametrs}/>
        </div>
    );
};

export default Main;
