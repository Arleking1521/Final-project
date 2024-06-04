import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import logo from '../assets/logo2.png'
import back from "../assets/back-button.png"
import hh from "../assets/hh.png"
import wpp from "../assets/icons8-whatsapp-50.png"
import git from "../assets/icons8-github-50.png"
import telega from "../assets/icons8-telegram-app-50.png"
import li from "../assets/icons8-линкедин-50.png"
import { CombinedContext } from "../Context/context";
import { useParams } from "react-router";

const Details = () => {
    const combinedContext = useContext(CombinedContext);

    const persons = combinedContext.allDatas.Person || [];
    const works = combinedContext.allDatas.Work || [];
    const techs = combinedContext.allDatas.Tech || [];
    const soc_links = combinedContext.allDatas.SocLinks || [];
    const certificates = combinedContext.allDatas.Certificates || [];
    const navigate = useNavigate();

    const { id } = useParams(); // Получаем параметр id из адреса страницы
    const work = works.find((w) => w.id === Number(id));
    const person = persons.find((p) => p.id === Number(work.person));
    const soc_link = soc_links.find((sl) => sl.person === Number(person.id));
    const backButtonClick = () => {
        navigate(`/`);
    };

    const handleFilterClick = (event, path) => {
        event.preventDefault(); // Предотвращаем переход по ссылке по умолчанию
        console.log(path);
        navigate(path); // Переход на указанный путь
    };

    
    return (
        <div className="main_blog">
            <span className="title_head">
                <button onClick={backButtonClick}><img src={back} /></button>
                <p>Резюме</p>
            </span>
            <div className="card">
                <div className="profile">
                    <div className="photo" style={{ backgroundImage: `url(${person && person.photo ? person.photo : logo})` }}>
                    </div>
                    {soc_link ? (
                        <div className="socials">
                            <div className="resume">
                                {soc_link.resume && (
                                    <a className="social" href={soc_link.resume}>Резюме на <img src={hh} alt="HH" /></a>
                                )}
                            </div>

                            <div className="social_list">
                                {soc_link.WPP && (
                                    <a href={"https://wa.me/" + soc_link.WPP} className="social"><img src={wpp} alt="WhatsApp" /></a>
                                )}
                                {soc_link.Github && (
                                    <a href={"https://github.com/" + soc_link.Github} className="social"><img src={git} alt="GitHub" /></a>
                                )}
                                {soc_link.linkedIn && (
                                    <a href={soc_link.linkedin} className="social"><img src={li} alt="LinkedIn" /></a>
                                )}
                                {soc_link.telegram && (
                                    <a href={"https://www.t.me/" + soc_link.telegram} className="social"><img src={telega} alt="Instagram" /></a>
                                )}
                            </div>
                        </div>
                    ) : (
                        <></>
                    )}
                </div>


                {work ?
                    (

                        person ? (
                            <>
                                <div className="profile_info">
                                    <div className="info_h detail_info">
                                        <p className="tech-inner">{work.title}</p>
                                        <p className="p_fio">{person.name}</p>
                                        <p className="p_age">{person.age} года</p>
                                        <span className="skills">
                                            {work.stack_frame.map((fr) => {
                                                return (
                                                    techs.map((tech) => {
                                                        return (
                                                            tech.id == fr ?
                                                                (tech.frame == "" ?
                                                                    <a href="" key={tech.id} onClick={(event) => handleFilterClick(event, '/stack/' + tech.stack)}>{tech.stack}</a>
                                                                    :
                                                                    <a href="" key={tech.id} onClick={(event) => handleFilterClick(event, '/stack/' + tech.stack + '/frame/' + tech.frame)}>{tech.frame}</a>)
                                                                :
                                                                null
                                                        );
                                                    })
                                                );
                                            })}
                                        </span>
                                    </div>
                                    <div className="personal_info">
                                        <p><span>-Навыки: </span>{work.skills}</p>
                                        <p><span>-Личные качества: </span>{person.personal_qualities}</p>
                                        {person ? (
                                            <>
                                                <p><span>-Знание языков: </span>{person.languages}</p>
                                                {person.work_ex !== "null" ? <p><span>-Опыт работы: </span>{person.work_ex}</p> : <></>}
                                                <p><span>-Телефон: </span>{person.phone}</p>
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
                            (
                                <></>
                            )
                    ) :
                    (<p>Loading...</p>)
                }
            </div>
        </div>
    );
};

export default Details;