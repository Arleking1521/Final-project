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

const Details = () => {
    const combinedContext = useContext(CombinedContext);

    const persons = combinedContext.allDatas.Person || [];
    const works  = combinedContext.allDatas.Work || [];
    const techs = combinedContext.allDatas.Tech || [];
    const navigate = useNavigate();

    const { id } = useParams(); // Получаем параметр id из адреса страницы
    const person = persons.find((p) => p.id === Number(id));
    const backButtonClick = () => {
        navigate(`/`);
    };

    return (
        <div className="main_blog">
            <span className="title_head">
                <button onClick={backButtonClick}><img src={back}/></button>
                <p>Резюме</p>
            </span>
            <div className="card">
                <div className="profile">
                    <div className="photo">
                        <img src={person && person.photo ? person.photo : logo }/>
                    </div>
                    <div className="socials">
                        <div className="resume">
                            <a className="social" href="">Резюме на <img src={hh}/></a>
                        </div>
                        <div className="social_list">
                            <a href="" className="social"><img src={wpp}/></a>
                            <a href="" className="social"><img src={git}/></a>
                            <a href="" className="social"><img src={li}/></a>
                            <a href="" className="social"><img src={inst}/></a>
                        </div>
                    </div>
                </div>
                <div className="profile_info">
                    <div className="info_h detail_info">
                        <p className="tech">Front-End</p>
                        {person ? (
                            <>
                                <p className="p_fio">{person.name}</p>
                                <p className="p_age">{person.age} года</p>
                            </>
                        ) : (
                            <p>Loading...</p>
                        )}
                        <span className="skills">
                            <a href="">HTML/CSS</a>
                            <a href="">HTML/CSS</a>
                            <a href="">HTML/CSS</a>
                            <a href="">HTML/CSS</a>
                        </span>
                    </div>
                    <div className="personal_info">
                        <p><span>-Навыки:</span></p>
                        <p><span>-Личные качества:</span></p>
                        {person ? (
                            <>
                                <p><span>-Знание языков: {person.languages}</span></p>
                                {person.work_ex !== "null"? <p><span>-Опыт работы: {person.work_ex}</span></p> : <></>}
                                <p><span>-Телефон: {person.phone}</span></p>
                                <p><span>-Email: {person.email}</span></p>
                            </>
                        ) : (
                            <p>Loading...</p>
                        )}
                    </div>
                </div>
                <div className="profile_cert">

                </div>
            </div>
        </div>
    );
};

export default Details;