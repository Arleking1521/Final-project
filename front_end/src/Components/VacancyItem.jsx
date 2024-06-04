import React from 'react';
import { useNavigate } from "react-router-dom";
import logo from '../assets/logo2.png'
import verified from "../assets/icons8-проверено-50.png"
import VacancyService from "../axios/VacancyService";

const VacancyItem = ({ company, vacancy, techs }) => {
    const navigate = useNavigate();

    const handleFilterClick = (event, path) => {
        event.preventDefault(); // Предотвращаем переход по ссылке по умолчанию
        console.log(path);
        navigate(path); // Переход на указанный путь
    };

    const handleDetailsClick = () => {
        navigate(`/vacancy/details/${vacancy.id}`);
    };

    const handleDeleteClick = () => {
        if (window.confirm('Вы уверены, что хотите удалить этот пост?')) {
            VacancyService.deleteWork(vacancy.id)
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
            <div className="avatar" style={{ backgroundImage: `url(${company.photo == null ? logo : company.photo})` }}></div>
            <div className="info">
                <div className="info_h">
                    <p className="tech">{vacancy.name}</p>
                    <span>
                        {vacancy.stack_frame.map((fr) => {
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
                <p className="p_fio">{vacancy.payment} {vacancy.experience} </p>
                <p className="p_info">{company.name}</p>
                <div>
                    <p className="p_info">{vacancy.description}</p>
                </div>
            </div>
            <div className="conf-but">
                <div className="conf">

                </div>
                <a href="" onClick={handleDetailsClick} className="more-but">ПОДРОБНЕЕ...</a>
                {/* <button onClick={handleDeleteClick} className="btn">
                    Delete
                </button>  */}

            </div>
        </div>
    );
};

export default VacancyItem;