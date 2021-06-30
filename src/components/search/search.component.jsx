import React from 'react';
import './search.styles.scss'

export const SearchBar = ({ placeholder, handleChange}) => (
    <input 
        type="search"
        className="search"
        placeholder={placeholder}
        onChange={handleChange}
    ></input>
)