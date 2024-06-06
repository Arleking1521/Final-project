import React, { useEffect, useState, useContext } from 'react';
import ClickService from '../axios/ClickService';
import Charts from '../Components/Charts';
import { CombinedContext } from '../Context/context';


const Analytics = () => {
    const combinedContext = useContext(CombinedContext);
    console.log(combinedContext.companyURL)
    const companies = combinedContext.allDatas.Companies || [];
    const persons = combinedContext.allDatas.Person || [];
    const techs = combinedContext.allDatas.Tech || [];
    const company = companies.find(c => c.name.toLowerCase() == combinedContext.companyURL.toLowerCase())
    const filteredPersons = persons.filter( p => p.company == company.id)
    const [clicks, setClicks] = useState([]);
    const clicksByCompany = clicks.filter(c => techs.filter(t => t.company == company.id).find(tp => c.tech === tp.id));
    const filtPersons = persons.filter(p => p.company == company.id && p.certificate_knewit)

    useEffect(() => {
        // Получаем данные при монтировании компонента
        const fetchData = async () => {
            try {
                const data = await ClickService.getAll();
                setClicks(data);
            } catch (error) {
                console.error('Error fetching clicks:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="main_blog">
            <Charts persons = {filtPersons} company = {company} clicks = {clicks} techs = {techs} clicksByCompany = {clicksByCompany}/>
        </div>
    );
};

export default Analytics;
