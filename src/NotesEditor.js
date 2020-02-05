import React from 'react';

export default function NoteEditor({
    text, 
    handleChange
}) {

    return(
        <textarea 
        onChange={(event) => {
            handleChange(event.target.value)
        }}
        value={text}
        />
    );
}