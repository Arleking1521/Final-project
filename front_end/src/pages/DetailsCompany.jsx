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

const DetailsCompany = () => {
    const combinedContext = useContext(CombinedContext);

    const vacancies = combinedContext.allDatas.Vacancies || [];
    const companies  = combinedContext.allDatas.Companies || [];
    
    const navigate = useNavigate();

    const { id } = useParams(); // Получаем параметр id из адреса страницы
    const vacancy = vacancies.find((v) => v.id === Number(id));
    const company = companies.find((c) => c.id === Number(vacancy.company));
    const backButtonClick = () => {
        navigate(`/vacancy/`);
    };


    return (
        <div className="main_blog">
            <span className="title_head">
                <button onClick={backButtonClick}><img src={back}/></button>
                <p> О Компании</p>
            </span>
                {company ? (
                <>
                    <div className="card">
                        <div className="profile">
                            <div className="photo">
                                <img src={company && company.photo ? company.photo : logo }/>
                            </div>
                            
                        </div>
                        <div className="profile_info">
                            <div className="info_h detail_info">
                                <p className="tech">{company.name}</p>
                                <p className="p_fio">{vacancy.payment}</p>
                                <p className="p_age">Требуемый опыт работы : {vacancy.experience}</p>
                                <p className="p_age">{vacancy.busyness}</p>
                            </div>
                        </div>
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
            )}
        </div>
    );
};

export default DetailsCompany;