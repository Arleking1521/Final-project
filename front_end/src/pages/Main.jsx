import React, { useContext, useMemo } from 'react';
import PostsList from '../Components/PostsList';
import { useNavigate, useLocation, } from 'react-router-dom';
import { CombinedContext } from '../Context/context';
import back from "../assets/back-button.png"


const Main = () => {
    const combinedContext = useContext(CombinedContext);
    const persons = combinedContext.allDatas.Person || [];
    const works = combinedContext.allDatas.Work || [];
    const techs = combinedContext.allDatas.Tech || [];
    const companies = combinedContext.allDatas.Companies || [];
    const company = companies.find(c => c.name.toLowerCase() == combinedContext.companyURL.toLowerCase())
    const filteredPersons = persons.filter(p => p.company == company.id && p.company_employee == null)
    const filteredTechs = techs.filter(t => t.company == company.id)
    const navigate = useNavigate();
    const location = useLocation();
    const parametrs = new URLSearchParams(location.search);
    const stack = parametrs.get('stack');
    const frame = parametrs.get('frame')
    const mainColor = company && company.main_color_hex ? company.main_color_hex : "#FFFFFF"
    const secColor = company && company.secondary_color_hex ? company.secondary_color_hex : "#FFFFFF"
    const mainColorOpacity = company && company.main_color_hex ? company.main_color_hex+"33" : "#FFFFFF"
    const params = { stack: stack, frame: frame }
    const UniqueTechs = useMemo(() => {
        if (params.stack == null && params.frame == null) {
            return Array.from(new Set(filteredTechs.map(tech => tech.stack)));
        } else {
            return filteredTechs
                .filter(tech => tech.stack.toLowerCase() === params.stack.toLowerCase())
                .map(tech => tech.frame);
        }
    }, [params, techs]);

    const urlOption = useMemo(() => {
        return params.stack == null && params.frame == null ? "stack" : "frame";
    }, [params]);

    const backButtonShow = useMemo(() => {
        return !(params.stack == null && params.frame == null);
    }, [params]);

    const handleFilterClick = (event, path) => {
        event.preventDefault();
        if (urlOption === "frame") {
            navigate(`/?c=${company.name.toLowerCase()}&stack=${params.stack}&${path}`);
        } else {
            navigate(`/?c=${company.name.toLowerCase()}&${path}`);
        }
    };

    const handleGoBack = () => {
        navigate(`/?c=${company.name.toLowerCase()}&`);
    };


    console.log(companies)

    return (
        <div className="main_blog">
            <span className="title_head">
                {backButtonShow ? <button onClick={handleGoBack}><img src={back} /></button> : null}
                <h1 className='title'>Наши Ученики</h1>
            </span>
            <div className="filter">
                {UniqueTechs.map((tech) => (
                    <span>
                        {tech ? <a href="" style={{backgroundColor: `${mainColorOpacity}`, color: `${mainColor}`}} onClick={(event) => handleFilterClick(event, urlOption + '=' + tech + '&')}>{tech}</a> : null}
                    </span>
                ))}
            </div>
            {/* <button onClick={handleNewClick}>New Post</button> */}

            <PostsList persons={filteredPersons} works={works} techs={filteredTechs} filter={params} company={company} />
        </div>
    );
};

export default Main;
