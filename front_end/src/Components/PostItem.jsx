import React from 'react';
import {useNavigate} from "react-router-dom";
import logo from '../assets/logo2.png'
import verified from "../assets/icons8-проверено-50.png"
import WorkService from "../axios/ClaimWorkService";


const PostItem = ({person, work, techs}) => {
    const navigate = useNavigate();
    const handleFilterClick = (event, path) => {
        event.preventDefault(); // Предотвращаем переход по ссылке по умолчанию
        console.log(path);
        navigate(path); // Переход на указанный путь
      };
    const handleDetailsClick = () => {
        navigate(`/details/${person.id}`);
    };

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
            <div className="avatar">
                <img src={person.photo == null ? logo : person.photo} alt={person.name} />
            </div>
            <div className="info">
                <div className="info_h">
                    <p className="tech">{work.title}</p>
                    <span>
                        {work.stack_frame.map((fr) =>{
                        return(
                            techs.map((tech) =>{
                                return(
                                    tech.id == fr ? <a href="" key={tech.id} onClick={(event) => handleFilterClick(event, '/stack/'+ tech.stack+ '/frame/' + tech.frame)}>{tech.frame}</a> : null
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
                            <p className="p_cert">имеет сертификат <b>KnewIT</b></p>
                            <div>
                                <img src={verified} alt="" srcSet=""/>
                            </div>
                        </span>
                        :
                    null}
                </div>
                <a href="" onClick={handleDetailsClick} className="more-but">ПОДРОБНЕЕ...</a>
                {/* <button onClick={handleDeleteClick} className="btn">
                    Delete
                </button> */}
            </div>
        </div>
    );
};

export default PostItem;