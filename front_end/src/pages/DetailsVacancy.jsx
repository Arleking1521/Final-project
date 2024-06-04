import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import logo from '../assets/logo2.png'
import back from "../assets/back-button.png"
import hh from "../assets/hh.png"
import wpp from "../assets/icons8-whatsapp-50.png"
import git from "../assets/icons8-github-50.png"
import inst from "../assets/icons8-instagram-30.png"
import li from "../assets/icons8-линкедин-50.png"
import { CombinedContext } from "../Context/context";
import { useParams } from "react-router";

const DetailsVacancy = () => {
    const combinedContext = useContext(CombinedContext);

    const vacancies = combinedContext.allDatas.Vacancies || [];
    const companies = combinedContext.allDatas.Companies || [];
    const techs = combinedContext.allDatas.Tech || [];

    const navigate = useNavigate();

    const { id } = useParams(); // Получаем параметр id из адреса страницы
    const vacancy = vacancies.find((v) => v.id === Number(id));
    const company = companies.find((c) => c.id === Number(vacancy.company));
    const backButtonClick = () => {
        navigate(`/vacancy/`);
    };

    const handleFilterClick = (event, path) => {
        event.preventDefault(); // Предотвращаем переход по ссылке по умолчанию
        console.log(path);
        navigate(path); // Переход на указанный путь
    };

    const handleDetailsClick = () => {
        navigate(`/company/details/${company.id}`);
    };

    console.log(vacancy)


    return (
        <div className="main_blog">
            <span className="title_head">
                <button onClick={backButtonClick}><img src={back} /></button>
                <p> О Вакансии</p>
            </span>
            {vacancy ?
                (
                    company ? (
                        <div>
                            <div>
                                <div className="vacancy-card">
                                    <div className="vacancy_info">
                                        <p className="tech-inner">{vacancy.name}</p>
                                        <p className="payment">{vacancy.payment}</p>
                                        <p className="extra">Требуемый опыт работы: {vacancy.experience}</p>
                                        <p className="extra">{vacancy.busyness}</p>
                                        <p className="extra">Необходимые знания:
                                            {vacancy.stack_frame.map((fr) => {
                                                return (
                                                    techs.map((tech) => {
                                                        return (
                                                            tech.id == fr ? 
                                                            (tech.frame == "" ? 
                                                            <a href="" className="skill" key={tech.id} onClick={(event) => handleFilterClick(event, '/stack/'+ tech.stack)}>{tech.stack}</a>
                                                            :
                                                            <a href="" className="skill" key={tech.id} onClick={(event) => handleFilterClick(event, '/stack/'+ tech.stack+ '/frame/' + tech.frame)}>{tech.frame}</a>)
                                                            :
                                                             null                                        
                                                        );
                                                    })
                                                );
                                            })}
                                        </p>
                                    </div>
                                    <div className="company_info">
                                        <div className="company_info_inner">
                                            <div className="vacancy_pic" style={{ backgroundImage: `url(${company && company.photo ? company.photo : logo})` }}>
                                            </div>
                                            <a className="company_name" onClick={handleDetailsClick}>{company.name}</a>
                                            <p className="extra company_adress">{company.place}</p>
                                        </div>
                                    </div>

                                </div>
                                <button className="ans-but">Откликнуться</button>




                                {/* <div className="photo_vacancy">
                                    <img src={company && company.photo ? company.photo : logo }/>
                                </div>
                                <div className="profile_info">
                                    <div className="info_h detail_info">
                                        <p className="tech" onClick={handleDetailsClick}>{company.name}</p>
                                        <p className="tech">{vacancy.name}</p>
                                        
                                        <p className="p_age">Требуемый опыт работы : {vacancy.experience}</p>
                                        <p className="p_age">{vacancy.busyness}</p>
                                        <span className="skills">
                                            <p>Необходимые знания : 
                                        {vacancy.stack_frame.map((fr) =>{
                                            return(
                                                techs.map((tech) =>{
                                                    return(
                                                        tech.id == fr ? <a href="" key={tech.id} onClick={(event) => handleFilterClick(event, '/vacancy/stack/'+ tech.stack+ '/frame/' + tech.frame)}>{tech.frame}</a> : null
                                                    );
                                                })
                                            );
                                            })}
                                            </p>
                                            </span>
                                    </div>
                                </div> */}
                            </div>
                            <div className="sub-card">
                                <p className="tech">{vacancy.title_desc}</p>
                                <p>{vacancy.description} </p>
                                <h3>Что мы предлагаем: </h3>
                                <ul>
                                    {vacancy.offers.split('\n').map((offer) => {
                                        return (
                                            <li>{offer}</li>
                                        );
                                    })}
                                </ul>
                                <h3>У нас вы будете заниматься: </h3>
                                <ul>
                                    {vacancy.duties.split('\n').map((duty) => {
                                        return (
                                            <li>{duty}</li>
                                        );
                                    })}
                                </ul>
                                <h3>Требования: </h3>
                                <ul>
                                    {vacancy.requirements.split('\n').map((requirement) => {
                                        return (
                                            <li>{requirement}</li>
                                        );
                                    })}
                                </ul>
                                <p><span> {vacancy.additionally} </span> </p>

                            </div>
                        </div>
                    ) : null
                ) :
                (<p>Loading...</p>)
            }
        </div>
    );
};

export default DetailsVacancy;