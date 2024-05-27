import React from 'react';
import VacancyItem from "./VacancyItem";

const VacancyList  = ({companies, vacancies}) => {
    console.log('vacancies: ' , vacancies)
    return (
        <div className="list">
            {vacancies.map((vacancy) => {
                return (
                    companies.map((company) => {
                        return(
                            <div key={company.id} className="list_item">
                                {company.id === vacancy.company ?
                                    <VacancyItem vacancy={vacancy} company={company} />
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
