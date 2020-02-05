import React from 'react';
import NewNote from './NewNote';
import NotesList from './NotesList';
import NotesEditor from './NotesEditor'


export default class NotesApp extends React.Component {
    render() {
        return (
            <div>
                <h1>My notes APP!</h1>
                <NewNote />
                <NotesList />
                <NotesEditor />
            </div>
        )
    }
}