import React from 'react';
import {useNavigate} from "react-router-dom";
import logo from '../assets/logo2.png'
import verified from "../assets/icons8-проверено-50.png"
import VacancyService from "../axios/VacancyService";

const VacancyItem = ({company, vacancy}) => {
    const navigate = useNavigate();
    const handleDetailsClick = () => {
        navigate(`/details/${vacancy.id}`);
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
            <div className="avatar">
                <img src={company.photo == null ? logo : company.photo} alt={company.name} />
            </div>
            <div className="info">
                <div className="info_h">
                    <p className="tech">{vacancy.name}</p>
                    {/* <span>
                        {work.frame.split(',').map((fr) =>{
                        return(
                            <a href="" key={fr}>{fr}</a>
                        );
                        })}
                    </span> */}
                </div>
                {/* <p className="p_fio">{person.name}</p>
                <p className="p_info">{work.skills}</p> */}
            </div>
            <div className="conf-but">
                {/* <div className="conf">
                    {person.certificate_knewit ?
                        <span className="conf_info">
                            <p className="p_cert">имеет сертификат <b>KnewIT</b></p>
                            <div>
                                <img src={verified} alt="" srcSet=""/>
                            </div>
                        </span>
                        :
                    null}
                </div> */}
                <a href="" onClick={handleDetailsClick} className="more-but">ПОДРОБНЕЕ...</a>
                {/* <button onClick={handleDeleteClick} className="btn">
                    Delete
                </button>  */}
               
            </div>
        </div>
    );
};

export default VacancyItem;