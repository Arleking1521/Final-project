import React from 'react';
import { useNavigate } from "react-router-dom";
import verified from "../assets/icons8-проверено-50.png"
import WorkService from "../axios/ClaimWorkService";
import TechService from '../axios/TechService';


const PostItem = ({ person, work, techs, company }) => {
    const navigate = useNavigate();
    const handleFilterClick = (event, path) => {
        event.preventDefault(); // Предотвращаем переход по ссылке по умолчанию
        console.log(path);
        navigate(path); // Переход на указанный путь
    };

    async function incrementClickCounter(techId) {
        try {
            const response = await TechService.getById(techId);
            const tech = response.data;
    
            const updatedTechData = { ...tech, click_counter: tech.click_counter + 1 };
    
            const updateResponse = await TechService.updateTech(techId, updatedTechData);
            
            return updateResponse.data;
        } catch (error) {
            console.error("Ошибка при увеличении счетчика кликов:", error);
            throw error;
        }
    }

    const handleDetailsClick = (event) => {
        event.preventDefault();
        const techFilt = techs.filter(t => work.stack_frame.filter(sf => sf == t))
        techFilt.map((t) => {incrementClickCounter(t.id)})
        navigate(`/details/?c=${company.name.toLowerCase()}&id=${work.id}&`);
    };
    const mainColor = company && company.main_color_hex ? company.main_color_hex : "#FFFFFF"
    const secColor = company && company.secondary_color_hex ? company.secondary_color_hex : "#FFFFFF"

    const handleDeleteClick = () => {
        if (window.confirm('Вы уверены, что хотите удалить этот пост?')) {
            WorkService.deleteWork(work.id)
                .then(() => {
                    navigate('');
                    setTimeout(() => {
                        window.location.reload();
                    }, 100);
                })
                .catch((error) => {
                    console.error('Ошибка при удалении поста:', error);
                });
        }
    };

    return (
        <div className="card">
            <div className="avatar" style={{ backgroundImage: `url(${person && person.photo == null ? company.logo_dark : person.photo})` }}>
            </div>
            <div className="info">
                <div className="info_h">
                    <p className="tech">{work.title}</p>
                    <span>
                        {work.stack_frame.map((fr) => {
                            return (
                                techs.map((tech) => {
                                    return (
                                        tech.id == fr ?
                                            (tech.frame == "" ?
                                                <a href="" style={{color: `${mainColor}`}} key={tech.id} onClick={(event) => handleFilterClick(event, '?c=' + company.name.toLowerCase() + '&stack=' + tech.stack + '&')}>{tech.stack}</a>
                                                :
                                                <a href="" style={{color: `${mainColor}`}} key={tech.id} onClick={(event) => handleFilterClick(event, '?c=' + company.name.toLowerCase() + '&stack=' + tech.stack + '&' + 'frame=' + tech.frame + '&')}>{tech.frame}</a>)
                                            :
                                            null
                                    );
                                })
                            );
                        })}
                    </span>
                </div>
                <p className="p_fio">{person.name}</p>
                <p className="p_info">{work.skills}</p>
            </div>
            <div className="conf-but">
                <div className="conf">
                    {person.certificate_knewit ?
                        <span className="conf_info">
                            <p className="p_cert">имеет сертификат <b>{company.name}</b></p>
                            <div>
                                <img src={verified} alt="" srcSet="" />
                            </div>
                        </span>
                        :
                        null}
                </div>
                <a href="" onClick={(event) => handleDetailsClick(event)} className="more-but" style={{background: `linear-gradient(${secColor}, ${mainColor})`}}>ПОДРОБНЕЕ...</a>
                {/* <button onClick={handleDeleteClick} className="btn">
                    Delete
                </button> */}
            </div>
        </div>
    );
};

export default PostItem;