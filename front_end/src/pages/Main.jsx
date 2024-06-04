import React, { useContext, useMemo } from 'react';
import PostsList from '../Components/PostsList';
import { useNavigate, useParams } from 'react-router-dom';
import { CombinedContext } from '../Context/context';
import back from "../assets/back-button.png"


const Main = () => {
    const combinedContext = useContext(CombinedContext);
    const persons = combinedContext.allDatas.Person || [];
    const works  = combinedContext.allDatas.Work || [];
    const techs = combinedContext.allDatas.Tech || [];
    const navigate = useNavigate();
    const params = useParams();
    console.log(CombinedContext.allDatas);
    const UniqueTechs = useMemo(() => {
        if (Object.keys(params).length === 0) {
            return Array.from(new Set(techs.map(tech => tech.stack)));
        } else {
            return techs
                .filter(tech => tech.stack.toLowerCase() === params.stack.toLowerCase())
                .map(tech => tech.frame);
        }
    }, [params, techs]);

    const urlOption = useMemo(() => {
        return Object.keys(params).length === 0 ? "stack" : "frame";
    }, [params]);

    const backButtonShow = useMemo(() => {
        return Object.keys(params).length !== 0;
    }, [params]);

    const handleFilterClick = (event, path) => {
        event.preventDefault();
        if (urlOption === "frame") {
            navigate(`/stack/${params.stack}${path}`);
        } else {
            navigate(path);
        }
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
                            {tech ? <a href="" onClick={(event) => handleFilterClick(event, '/'+ urlOption + '/' + tech)}>{tech}</a> : null}
                    </span>
                ))}
            </div>
            {/* <button onClick={handleNewClick}>New Post</button> */}

            <PostsList persons={persons} works={works} techs={techs} filter={params}/>
        </div>
    );
};

export default Main;
