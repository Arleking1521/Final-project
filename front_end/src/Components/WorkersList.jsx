import React from 'react';
import WorkersItem from "./WorkersItem";
const WorkersList = (props) => {

    const { works, filter, techs, persons, company } = props
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
            {persons.map((person) => {
                return (
                    <div key={person.id} className="list_item">
                        <WorkersItem person={person}techs={techs} company={company} />
                    </div>
                );
            })}
        </div>
    );
};

export default WorkersList;
