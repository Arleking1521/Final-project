import React from 'react';
import VacancyItem from "./VacancyItem";

const VacancyList  = (props) => {
    let filter_data = []
    if(props.filter.frame){
        props.vacancies.forEach(vacancy => {
            let add_flag = false;
            for(let i = 0; i < props.techs.length; i++){
                let tech_stack = props.techs[i];
                for(let j = 0; j < vacancy.stack_frame.length; j++){
                    if(vacancy.stack_frame[j] === tech_stack.id){
                        if(tech_stack.frame.toLowerCase() === props.filter.frame.toLowerCase()){
                            filter_data.push(vacancy);
                            add_flag = true;
                            break;
                        }
                    }       
                }
                if(add_flag){
                    break;
                }
            }
        });
    }
    else if(props.filter.stack){
        props.vacancies.forEach(vacancy => {
            let add_flag = false;
            for(let i = 0; i < props.techs.length; i++){
                let tech_stack = props.techs[i];
                for(let j = 0; j < vacancy.stack_frame.length; j++){
                    if(vacancy.stack_frame[j] === tech_stack.id){
                        if(tech_stack.stack.toLowerCase() === props.filter.stack.toLowerCase()){
                            filter_data.push(vacancy);
                            add_flag = true;
                            break;
                        }
                    }       
                }
                if(add_flag){
                    break;
                }
            }
        });
    }
    
    else{
        filter_data = props.vacancies;
    }
    return (
        <div className="list">
            {props.companies.map((company) => {
                return (
                    filter_data.map((vacancy) => {
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
