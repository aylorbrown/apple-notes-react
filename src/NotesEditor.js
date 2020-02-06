import React from 'react';

export default function NoteEditor({
    note,
    text, 
    handleChange
}) {

    return(
        <div>
            <input 
            value={note.title}
            // send back a copy with the updated "title"
            onChange={(event) => {
                handleChange({
                    ...note,
                    title: event.target.value
                });
            }}
            />
            <br />
            <textarea 
            value={note.copy}
            onChange={(event) => {
                handleChange({
                    ...note, 
                    copy: event.target.value
                })
                // handleChange(event.target.value)
            }}
            />
        </div>
    );
}