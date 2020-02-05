import React from 'react';

SearchBar.defaultProps = {
    text: 'default'
}

// destructuring
export default function SearchBar({
    text, 
    handleChange

}) {
    return (
        <input 
        onChange={(event) => {
            handleChange(event.target.value)
        }}
        value={text}
        />
    );
}

   