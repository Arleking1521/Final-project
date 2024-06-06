import React from 'react';
import { Line, Pie } from 'react-chartjs-2';
import 'chart.js/auto';

const Charts = (props) => {
    const { persons } = props
    const { company } = props
    const w_pre_data = [persons.filter(p => p.company_employee).length, persons.filter(p => !p.company_employee).length]
    const mainColor = company && company.main_color_hex ? company.main_color_hex : "#FFFFFF"
    const mainColorOpacity = company && company.main_color_hex ? company.main_color_hex + "33" : "#FFFFFF"
    const handleFilterClick = (event, time) => {
        event.preventDefault();
    }
    const workers = {
        labels: ['Трудоутсроенные', "Не работают"],
        datasets: [
            {
                label: 'Работающие',
                data: w_pre_data,
            },
        ],
    };

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
                <p>Статистика Трудоустройства</p>
                <Pie data={workers} />
            </div>
            <div className="small_stat">
                <h3>{company ? company.name : null}</h3>
                <p>Статистика Трудоустройства</p>
                <Pie data={workers} />
                <p>Статистика Трудоустройства</p>
                <Pie data={workers} />
            </div>

        </div>
    );
};

export default Charts;