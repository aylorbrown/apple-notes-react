import React from 'react';
import NotesListItem from './NotesListItem';

// this just displays the stuff -- it is a grandchild component 
// recieves an array of notes and feeds one note at a time to NoteListItem
export default function NotesList({
    // the prop!
    notes, 
    handleClick
}) {
    return (
        <ul>
            {
                notes.map(note => <NotesListItem title={note.title} id={note.id} key={note.id} handleClick={handleClick}/>)
            }
        </ul>
    );
}