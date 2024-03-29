import React from 'react';
import logo from '../assets/logo1.png'
import {useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const handleDetailsClick = () => {
        navigate(`/`);
    };
    return (
        <div className="myHeader">
            <div className="logo">
                <div className="pic">
                    <img src={logo}/>
                </div>
                <span>PEOPLE</span>
            </div>
            <div className="menu">
                <a href="" className="link" onClick={handleDetailsClick}>ученики</a>
                <a href="" className="link">Вакансии</a>
                <a href="https://knewit.kz/" className="link">KnewIT.kz</a>
            </div>
        </div>
    );
};

export default Header;