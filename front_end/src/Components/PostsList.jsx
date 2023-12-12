import React from 'react';
import PostItem from "./PostItem";
const PostsList = ({persons, works}) => {

    return (
        <div className="list">

            {persons.map((person) => {
                return (
                    <div key={person.id} className="list_item">
                        <PostItem person={person} works={works} />

                    </div>
                );
            })}
        </div>
    );
};

export default PostsList;
