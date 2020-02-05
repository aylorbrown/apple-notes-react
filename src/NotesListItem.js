import React from 'react';

export default function NotesListItem({
    //what goes here?
    title, 
    id, 
    handleClick
}) {
    return (
        // display the title of the note 
        <li 
        onClick={() => {
            console.log(`you clicked {id}`);
            handleClick(id)
        }}
        >{title}
        </li>
    );
}

