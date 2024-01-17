import React from 'react';
import {useNavigate} from "react-router-dom";
import PersonService from "../axios/PersonService";
// import test from '/media/photo/3505889_BIRPshu.jpg'
const PostItem = ({person, works}) => {
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
    return (
        <div className="post_item">
            <div className="post_header">
                <h1>{works ? works.stack: 'No stack'}</h1>
                <p>{works ? works.frame : 'No frames'}</p>
                <div>
                {/*<button onClick={handleDetailsClick} className="btn">*/}
                {/*    Details*/}
                {/*</button>*/}
                <button onClick={handleDeleteClick} className="btn">
                    Delete
                </button>
                </div>
            </div>
            <img src={person.photo} alt={person.name} />
            <p>Name: {person.name}</p>
            <p>{person.skills}</p>
            {person.certificate_knewit ? <div>True</div> : null}


        </div>
    );
};

export default PostItem;