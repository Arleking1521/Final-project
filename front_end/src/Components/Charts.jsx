import { useEffect, useState, useMemo } from "react";
import { Line, Pie } from 'react-chartjs-2';
import 'chart.js/auto';

const Charts = (props) => {
    const { persons, clicks, techs, company, clicksByCompany} = props
    // const w_pre_data = [filtPersons.filter(p => p.company_employee).length, filtPersons.filter(p => !p.company_employee).length]
    const mainColor = company && company.main_color_hex ? company.main_color_hex : "#FFFFFF"
    const mainColorOpacity = company && company.main_color_hex ? company.main_color_hex + "33" : "#FFFFFF"
    const [filtCoClick, setfiltCoClick] = useState([]);
    const [filtCoData, setFiltCoData] = useState([]);
    const [CoStat, setCoStat] = useState({
        labels: [],
        datasets: [
            {
                data: [],
                backgroundColor: '',
            },
        ],
    });
    const [filtClick, setFiltClicks] = useState([]);
    const [filtData, setFiltData] = useState([]);
    const [allStat, setAllStat] = useState({
        labels: [],
        datasets: [
            {
                data: [],
                backgroundColor: '',
            },
        ],
    });
    const [pData, setPData] = useState([]);
    const [pStat, setPStat] = useState({
        labels: [],
        datasets: [
            {
                data: [],
                backgroundColor: '',
            },
        ],
    });
    
    useEffect(() => {
        setFiltClicks(clicks);
        setfiltCoClick(clicksByCompany)
        setPData(persons)
    }, [clicks, clicksByCompany, persons]);

    const converting = (fc) => {
        const countByTech = fc.reduce((acc, click) => {
            const { tech } = click;
            if (acc[tech]) {
                acc[tech].acc += 1;
            } else {
                acc[tech] = { id: tech, acc: 1 };
            }
            return acc;
        }, {});
        
        const countByTechArray = Object.values(countByTech);
        const clicksWithCompanyName = techs.map((tech) => {
            const click = fc.find(c => c.tech === tech.id);
            if (click) {
                return {
                    click_count:  countByTechArray.find(co => co.id == tech.id).acc,
                    name: tech.frame ? tech.frame : tech.stack,
                };
            }
            return null;
        }).filter(click => click !== null);

        const clicksByCompany = {};
        clicksWithCompanyName.forEach(click => {
            if (clicksByCompany[click.name]) {
                clicksByCompany[click.name] += click.click_count;
            } else {
                clicksByCompany[click.name] = click.click_count;
            }
        });

        const clicksArray = Object.entries(clicksByCompany).map(([name, clicks]) => ({
            name,
            clicks
        }));
        return clicksArray;
    };

    const MonthFiltClick = () => {
        const currentDate = new Date();
        const lastMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, currentDate.getDate());
        const filteredClicks = clicks.filter(click => new Date(click.date) >= lastMonthDate);
        const filteredCoClicks = clicksByCompany.filter(click => new Date(click.date) >= lastMonthDate);
        const filteredPersons = persons.filter(person => new Date(person.date) >= lastMonthDate);
        setPData(filteredPersons);
        setfiltCoClick(filteredCoClicks);
        setFiltClicks(filteredClicks);
    };
    const WeekFiltClick = () => {
        const currentDate = new Date();
        const lastWeekDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - 7);
        const filteredClicks = clicks.filter(click => new Date(click.date) >= lastWeekDate);
        const filteredCoClicks = clicksByCompany.filter(click => new Date(click.date) >= lastWeekDate);
        const filteredPersons = persons.filter(person => new Date(person.date) >= lastWeekDate);
        setPData(filteredPersons);
        setfiltCoClick(filteredCoClicks);
        setFiltClicks(filteredClicks);
    };

    useEffect(() => {
        setFiltData(converting(filtClick));
        setFiltCoData(converting(filtCoClick));
    }, [filtClick, filtCoClick , techs]);

    useEffect(() => {
        setPStat({
            labels: ['Трудоустроенные', 'Не работают'],
            datasets: [
                {
                    data: [pData.filter(p => p.company_employee).length, pData.filter(p => !p.company_employee).length],
                    backgroundColor: '',
                },
            ],
        });
        setAllStat({
            labels: filtData.map(click => click.name),
            datasets: [
                {
                    data: filtData.map(click => click.clicks),
                    backgroundColor: '',
                },
            ],
        });
        setCoStat({
            labels: filtCoData.map(click => click.name),
            datasets: [
                {
                    data: filtCoData.map(click => click.clicks),
                    backgroundColor: '',
                },
            ],
        });
    }, [filtData, filtCoData]);

    const handleFilterClick = (event, time) => {
        event.preventDefault();
        if (time === "month") {
            MonthFiltClick();
        }
        else if(time === "week"){
            WeekFiltClick();
        } 
        else {
            setFiltClicks(clicks);
            setfiltCoClick(clicksByCompany)
            setPData(persons);
        }
    };

    // const workers = {
    //     labels: ['Трудоустроенные', "Не работают"],
    //     datasets: [
    //         {
    //             data: w_pre_data,
    //         },
    //     ],
    // };

    return (
        <div className="stat">
            <div className="big_stat">
                <div className="filter">
                    <span>
                        <a href="" style={{ backgroundColor: `${mainColorOpacity}`, color: `${mainColor}` }} onClick={(event) => handleFilterClick(event, "all")}>Всё Время</a>
                        <a href="" style={{ backgroundColor: `${mainColorOpacity}`, color: `${mainColor}` }} onClick={(event) => handleFilterClick(event, "month")}>Месяц</a>
                        <a href="" style={{ backgroundColor: `${mainColorOpacity}`, color: `${mainColor}` }} onClick={(event) => handleFilterClick(event, "week")}>Неделя</a>
                    </span>
                </div>
                <p className='stat_title'>Общая Статистика</p>
                <p>Популярность направлений</p>
                {filtData.length > 0 ? (
                    <Pie data={allStat} />
                ) : (
                    <p>No data available</p>
                )}
            </div>
            <div className="small_stat">
                <h3>{company ? company.name : null}</h3>
                <p>Статистика Трудоустройства</p>
                <Pie data={pStat} />
                <p>Популярность направлений</p>
                <Pie data={CoStat} />
            </div>
        </div>
    );
};

export default Charts;
