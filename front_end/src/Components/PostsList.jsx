import React from 'react';
import PostItem from "./PostItem";
const PostsList = (props) => {

    let filter_data = []
    if(props.filter.stack){
        props.works.forEach(work => {
            let add_flag = false;
            for(let i = 0; i < props.techs.length; i++){
                let tech_stack = props.techs[i];
                for(let j = 0; j < work.stack_frame.length; j++){
                    if(work.stack_frame[j] === tech_stack.id){
                        if(tech_stack.stack.toLowerCase() === props.filter.stack.toLowerCase()){
                            filter_data.push(work);
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
    else if(props.filter.frame){
        props.works.forEach(work => {
            let add_flag = false;
            for(let i = 0; i < props.techs.length; i++){
                let tech_stack = props.techs[i];
                for(let j = 0; j < work.stack_frame.length; j++){
                    if(work.stack_frame[j] === tech_stack.id){
                        if(tech_stack.frame.toLowerCase() === props.filter.frame.toLowerCase()){
                            filter_data.push(work);
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
        filter_data = props.works;
    }

    return (
        <div className="list">
            {props.persons.map((person) => {
                return (
                    filter_data.map((work) => {
                        return(
                            <div key={work.id} className="list_item">
                                {person.id === work.person ? <PostItem person={person} work={work} techs = {props.techs} />
                                 : null}
                            </div>
                        );
                    })
                );
            })}
        </div>
    );
};

export default PostsList;
