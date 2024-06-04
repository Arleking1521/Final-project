import React from 'react';
import VacancyItem from "./VacancyItem";

const VacancyList  = (props) => {

    const {companies, vacancies, techs, filter} = props

    const filterWorksByFrame = (vacancies, techs, frame) => {
        return vacancies.filter(vacancy => 
            vacancy.stack_frame.some(frameId => 
                techs.some(tech => 
                    tech.id === frameId && tech.frame.toLowerCase() === frame.toLowerCase()
                )
            )
        );
    };
    
    const filterWorksByStack = (vacancies, techs, stack) => {
        return vacancies.filter(vacancy => 
            vacancy.stack_frame.some(frameId => 
                techs.some(tech => 
                    tech.id === frameId && tech.stack.toLowerCase() === stack.toLowerCase()
                )
            )
        );
    };

    let filtered_data = vacancies;

    if (filter.frame) {
        filtered_data = filterWorksByFrame(vacancies, techs, filter.frame);
    } else if (filter.stack) {
        filtered_data = filterWorksByStack(vacancies, techs, filter.stack);
    }

    return (
        <div className="list">
            {companies.map((company) => {
                return (
                    filtered_data.map((vacancy) => {
                        return(
                            <div key={vacancy.id} className="list_item">
                                {company.id === vacancy.company ? <VacancyItem company={company} vacancy={vacancy} techs = {props.techs} />
                                 : null}
                            </div>
                        );
                    })
                );
            })}
        </div>
    );
};

export default VacancyList ;
