import React from 'react';

export default function NoteEditor({
    note,
    text, 
    handleChange
}) {

    return(
        <div>
            <input value={note.title}/>
            <br />
            <textarea 
            onChange={(event) => {
                handleChange(event.target.value)
            }}
            value={note.copy}
            />
        </div>
    );
}