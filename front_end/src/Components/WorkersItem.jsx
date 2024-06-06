import React from 'react';
import { useNavigate } from "react-router-dom";
import verified from "../assets/icons8-проверено-50.png"


const PostItem = ({ person, techs, company }) => {
    const navigate = useNavigate();
    const handleFilterClick = (event, path) => {
        event.preventDefault(); // Предотвращаем переход по ссылке по умолчанию
        console.log(path);
        navigate('/workers/'+path); // Переход на указанный путь
    };
    const handleDetailsClick = (event) => {
        event.preventDefault();
        navigate(`/workers/details/?c=${company.name.toLowerCase()}&id=${person.id}&`);
    };
    const mainColor = company && company.main_color_hex ? company.main_color_hex : "#FFFFFF"
    const secColor = company && company.secondary_color_hex ? company.secondary_color_hex : "#FFFFFF"

    return (
        <div className="card">
            <div className="avatar" style={{ backgroundImage: `url(${person && person.photo == null ? company.logo_dark : person.photo})` }}>
            </div>
            <div className="info">
                <div className="info_h">
                    <p className="tech">{person.name}</p>
                </div>
                <p className='position' style={{color: `${mainColor}`}}>{person.position}</p>
                <p className="p_fio">{person.age}</p>
                <p className="p_info">{person.company_employee}</p>
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
                <a href="" onClick={event => handleDetailsClick(event)} className="more-but" style={{background: `linear-gradient(${secColor}, ${mainColor})`}}>ПОДРОБНЕЕ...</a>
                {/* <button onClick={handleDeleteClick} className="btn">
                    Delete
                </button> */}
            </div>
        </div>
    );
};

export default PostItem;