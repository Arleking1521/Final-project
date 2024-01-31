import React from 'react';
import {useNavigate} from "react-router-dom";
import PersonService from "../axios/PersonService";
import verified from "../assets/icons8-проверено-50.png"

// import test from '/media/photo/3505889_BIRPshu.jpg'
const PostItem = ({person, work}) => {
    const navigate = useNavigate();
    // const handleDetailsClick = () => {
    //     navigate(`/post/${person.id}`);
    // };

    const handleDeleteClick = () => {
        if (window.confirm('Вы уверены, что хотите удалить этот пост?')) {
            PersonService.deletePerson(person.id)
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
    console.log( 'work1:',  work);
    return (
        // <div className="post_item">
        //     <div className="post_header">
        //         <h1>{work ? work.stack: 'No stack'}</h1>
        //         <p>{work ? work.frame : 'No frames'}</p>
        //         <div>
        //         {/*<button onClick={handleDetailsClick} className="btn">*/}
        //         {/*    Details*/}
        //         {/*</button>*/}
        //         <button onClick={handleDeleteClick} className="btn">
        //             Delete
        //         </button>
        //         </div>
        //     </div>
        //     <img src={person.photo} alt={person.name} />
        //     <p>Name: {person.name}</p>
        //     <p>{person.skills}</p>
        //     {person.certificate_knewit ? <div>True</div> : null}
        //
        //
        // </div>
        <div className="card">
            <div className="avatar">
                <img src={person.photo} alt={person.name} />
            </div>
            <div className="info">
                <div className="info_h">
                    <p className="tech">{work.stack}</p>
                    <span>
                        {work.frame.split(',').map((fr) =>{
                        return(
                            <a href="" key={fr}>{fr}</a>
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
                <a href="" className="more-but">ПОДРОБНЕЕ...</a>
            </div>
        </div>
    );
};

export default PostItem;