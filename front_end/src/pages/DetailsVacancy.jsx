import React, {useContext} from 'react';
import {useNavigate} from "react-router-dom";
import logo from '../assets/logo2.png'
import back from "../assets/back-button.png"
import hh from "../assets/hh.png"
import wpp from "../assets/icons8-whatsapp-50.png"
import git from "../assets/icons8-github-50.png"
import inst from "../assets/icons8-instagram-30.png"
import li from "../assets/icons8-линкедин-50.png"
import {CombinedContext} from "../Context/context";
import {useParams} from "react-router";

const DetailsVacancy = () => {
    const combinedContext = useContext(CombinedContext);

    const vacancies = combinedContext.allDatas.Vacancies || [];
    const companies  = combinedContext.allDatas.Companies || [];
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


    return (
        <div className="main_blog">
            <span className="title_head">
                <button onClick={backButtonClick}><img src={back}/></button>
                <p> О Вакансии</p>
            </span>
            {vacancy ? 
                    (
                        company ? (
                        <>
                            <div className="vacancy_info">
                                <div>
                                    <p>{vacancy.name}</p>
                                    <p>{vacancy.payment == "" ? vacancy.payment : "Уровень дохода не указан"}</p>
                                    <p>Требуемый опыт работы : {vacancy.experience}</p>
                                    <p>{vacancy.busyness}</p>
                                </div>
                                
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
                            <div className="card">
                                <div className="profile_info">
                                    <div className="personal_info">
                                        <p><span> {vacancy.title_desc}</span></p>
                                        <p>{vacancy.description} </p>
                                        <p><span> Что мы предлагаем: </span> </p>
                                        <ul>
                                            {vacancy.offers.split('\n').map((offer) => {
                                                    return(
                                                        <li>{offer}</li>
                                                    );})}
                                        </ul>
                                        <p><span> У нас вы будете заниматься: </span> </p>
                                        <ul>
                                            {vacancy.duties.split('\n').map((duty) => {
                                                    return(
                                                        <li>{duty}</li>
                                                    );})}
                                        </ul>
                                        <p><span> Требования: </span> </p>
                                        <ul>
                                            {vacancy.requirements.split('\n').map((requirement) => {
                                                    return(
                                                        <li>{requirement}</li>
                                                    );})}
                                        </ul>
                                        <p><span> {vacancy.additionally} </span> </p>
                                    </div>
                                </div>
                                
                            </div>
                        </>
                    ): 
                    (
                        <></>
                    )
                ):
                    (<p>Loading...</p>)
            }
        </div>
    );
};

export default DetailsVacancy;