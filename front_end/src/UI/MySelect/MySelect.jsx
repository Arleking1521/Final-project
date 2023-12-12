import React from 'react';
import cl from './MySelect.module.css';

const MySelect = ({option, defaultValue, value, onChange}) => {
    return (
        <select
            className={cl.select}
            value={value}
            onChange={event => onChange(event.target.value)}
        >
            <option disabled value="">{defaultValue}</option>
            {option.map(option =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    );
};

export default MySelect;