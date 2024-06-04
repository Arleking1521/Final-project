import React from 'react';
import PostItem from "./PostItem";
const PostsList = (props) => {

    const {works, filter, techs} = props

    const filterWorksByFrame = (works, techs, frame) => {
        return works.filter(work => 
            work.stack_frame.some(frameId => 
                techs.some(tech => 
                    tech.id === frameId && tech.frame.toLowerCase() === frame.toLowerCase()
                )
            )
        );
    };
    
    const filterWorksByStack = (works, techs, stack) => {
        return works.filter(work => 
            work.stack_frame.some(frameId => 
                techs.some(tech => 
                    tech.id === frameId && tech.stack.toLowerCase() === stack.toLowerCase()
                )
            )
        );
    };

    let filtered_data = works;

    if (filter.frame) {
        filtered_data = filterWorksByFrame(works, techs, filter.frame);
    } else if (filter.stack) {
        filtered_data = filterWorksByStack(works, techs, filter.stack);
    }

    return (
        <div className="list">
            {props.persons.map((person) => {
                return (
                    filtered_data.map((work) => {
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
