import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import logo from '../assets/logo2.png'
import back from "../assets/back-button.png"
import hh from "../assets/hh.png"
import wpp from "../assets/icons8-whatsapp-50.png"
import git from "../assets/icons8-github-50.png"
import telega from "../assets/icons8-telegram-app-50.png"
import li from "../assets/icons8-линкедин-50.png"
import { CombinedContext } from "../Context/context";
import { useParams } from "react-router";

const WorkerDetails = () => {
    const combinedContext = useContext(CombinedContext);

    const persons = combinedContext.allDatas.Person || [];
    const works = combinedContext.allDatas.Work || [];
    const techs = combinedContext.allDatas.Tech || [];
    const soc_links = combinedContext.allDatas.SocLinks || [];
    const certificates = combinedContext.allDatas.Certificates || [];
    const companies = combinedContext.allDatas.Companies || [];
    const company = companies.find(c => c.name.toLowerCase() == combinedContext.companyURL.toLowerCase())
    const navigate = useNavigate();
    const location = useLocation();
    const parametrs = new URLSearchParams(location.search);
    const id = parametrs.get('id');
    const person = persons.find((p) => p.id === Number(id));
    const soc_link = soc_links.find((sl) => sl.person === Number(person.id));
    const backButtonClick = () => {
        navigate(`/workers/?c=${company.name.toLowerCase()}&`);
    };

    const company_photo = company ? company.logo_dark : null
    const profile_photo = person ? person.photo : null
    const mainColor = company && company.main_color_hex ? company.main_color_hex : "#FFFFFF"

    const handleFilterClick = (event, path) => {
        event.preventDefault(); // Предотвращаем переход по ссылке по умолчанию
        navigate('/workers/'+path); // Переход на указанный путь
    };


    console.log("person", company)
    
    return (
        <div className="main_blog">
            <span className="title_head">
                <button onClick={backButtonClick}><img src={back} /></button>
                <p>Информация</p>
            </span>
            <div className="card">
                <div className="profile">
                    <div className="photo" style={{ backgroundImage: `url(${profile_photo ? profile_photo : company_photo})` }}>
                    </div>
                    {soc_link ? (
                        <div className="socials">
                            <div className="resume">
                                {soc_link.resume && (
                                    <a className="social" href={soc_link.resume}>Резюме на <img src={hh} alt="HH" /></a>
                                )}
                            </div>

                            <div className="social_list">
                                {soc_link.Github && (
                                    <a href={"https://github.com/" + soc_link.Github} className="social"><img src={git} alt="GitHub" /></a>
                                )}
                                {soc_link.linkedIn && (
                                    <a href={soc_link.linkedin} className="social"><img src={li} alt="LinkedIn" /></a>
                                )}
                            </div>
                        </div>
                    ) : (
                        <></>
                    )}
                </div>

                        {person ? (
                            <>
                                <div className="profile_info">
                                    <div className="info_h detail_info">
                                        <p className="tech-inner">{person.name}</p>
                                        <p className='position' style={{color: `${mainColor}`}}>{person.position}</p>
                                        <p className="p_age">{person.age}</p>
                                    </div>
                                    <div className="personal_info">
                                        {person ? (
                                            <>
                                                <p><span>-Работает в: </span>{person.company_employee}</p>
                                                <p><span>-Знание языков: </span>{person.languages}</p>
                                                {person.work_ex !== "null" ? <p><span>-Опыт работы: </span>{person.work_ex}</p> : <></>}
                                                <p><span>-Email: </span>{person.email}</p>
                                            </>
                                        ) : (
                                            <p>Loading...</p>
                                        )}
                                    </div>
                                </div>
                                <div className="profile_cert">
                                    {person.certificates.map((pcert) => {
                                        return (
                                            certificates.map((ccert) => {
                                                return (
                                                    ccert.id == pcert ? <img src={ccert.file} /> : null
                                                );
                                            })
                                        );
                                    })}
                                </div>
                            </>
                    ) :
                    (<p>Loading...</p>)
                    }
            </div>
        </div>
    );
};

export default WorkerDetails;