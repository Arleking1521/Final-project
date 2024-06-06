import React, { useContext } from 'react';
import logo from '../assets/logo1.png'
import { useNavigate } from "react-router-dom";
import { CombinedContext } from '../Context/context';

const Header = () => {
    const combinedContext = useContext(CombinedContext);
    const companies = combinedContext.allDatas.Companies || [];
    const company = companies.find(c => c.name.toLowerCase() == combinedContext.companyURL.toLowerCase())
    const navigate = useNavigate();
    const handleJobseekersClick = (event) => {
        event.preventDefault();
        navigate(`/?c=${company.name.toLowerCase()}&/`);
    };
    const handleWorkersClick = (event) => {
        event.preventDefault();
        navigate(`/workers/?c=${company.name.toLowerCase()}&/`);
    };
    const handleAnalyticsClick = (event) => {
        event.preventDefault();
        navigate(`/analytics/?c=${company.name.toLowerCase()}&/`);
    };
    return (
        <div className="myHeader" style={{ backgroundColor: `${company && company.main_color_hex ? company.main_color_hex : "#FFFFFF"}` }}>
            <div className="logo">
                <div className="pic">
                    {<img src={company && company.logo_light ? company.logo_light : null} width={"80px"} />}
                </div>
                <span>PEOPLE</span>
            </div>
            <div className="menu">
                <a href="" className="link" onClick={event => handleJobseekersClick(event)}>ученики</a>
                <a href="" className="link" onClick={event => handleWorkersClick(event)}>трудоустроенные</a>
                <a href="" className="link" onClick={event => handleAnalyticsClick(event)}>статистика</a>
                {/* <a href="" className="link" onClick={handleVacanciesClick}>Вакансии</a> */}
                <a href={company ? company.website : null} className="link">{company ? company.name : null}</a>
            </div>
        </div>
    );
};

export default Header;