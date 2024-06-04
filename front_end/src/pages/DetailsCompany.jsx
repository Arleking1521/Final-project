import React, {useContext} from 'react';
import {useNavigate} from "react-router-dom";
import logo from '../assets/logo2.png'
import back from "../assets/back-button.png"
import hh from "../assets/hh.png"
import wpp from "../assets/icons8-whatsapp-50.png"
import git from "../assets/icons8-github-50.png"
import inst from "../assets/icons8-instagram-30.png"
import li from "../assets/icons8-линкедин-50.png"
import {CombinedContext} from "../Context/context";
import {useParams} from "react-router";

const DetailsCompany = () => {
    const combinedContext = useContext(CombinedContext);

    const vacancies = combinedContext.allDatas.Vacancies || [];
    const companies  = combinedContext.allDatas.Companies || [];
    
    const navigate = useNavigate();

    const { id } = useParams(); // Получаем параметр id из адреса страницы
    const company = companies.find((c) => c.id === Number(id));
    const vacancy_list = vacancies.filter(v => v.company === company.id);

    console.log(vacancy_list)
    const backButtonClick = () => {
        navigate(`/vacancy/`);
    };


    return (
        <div className="main_blog">
            <span className="title_head">
                <button onClick={backButtonClick}><img src={back}/></button>
                <p> О Компании</p>
            </span>
                {company ? (
                <div>
                    <p>{company.name}</p>
                </div>
            ): 
            (
                <></>
            )}
        </div>
    );
};

export default DetailsCompany;