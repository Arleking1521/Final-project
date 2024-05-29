import React from 'react';
import PostItem from "./PostItem";
const PostsList = (props) => {

    return (
        <div className="list">
            {props.persons.map((person) => {
                return (
                    props.works.map((work) => {
                        return(
                            <div key={work.id} className="list_item">
                                {person.id === work.person ?
                                    <PostItem person={person} work={work} techs = {props.techs} />
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
