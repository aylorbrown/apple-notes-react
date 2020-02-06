import React from 'react';
import NewNote from './NewNote';
import NotesList from './NotesList';
import NotesEditor from './NotesEditor'
import SearchBar from './SearchBar';


export default class NotesApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentNoteId: '',
            searchText: '', 
            notes: [
                {
                    id: 'a12bca', 
                    title: "Grocery List", 
                    copy: 'Sardines, Ezekial Bread, Eggs, Oranges'
                }, 
                {
                    id: 'a12b90', 
                    title: "Ikea List", 
                    copy: 'Coffee Table, Dish Towels, Picture Frames, Swedish Meatballs'
                }, 
                {
                    id: 'a12b42', 
                    title: "Concepts to Look Up", 
                    copy: 'foreign key v primary key, many-to many, pg-promise'

                }, 
            ]
        };
    }
    render() {
        return (
            <div>
                <h1>NOTES</h1>
                <NewNote />
                <SearchBar 
                handleChange={this._setSearchText}
                text={this.state.searchText}/>
                <NotesList 
                // pass result of calling the function! aka add parens
                notes={this._getFilteredNotes()}
                handleClick={this._selectNote}
                />
                <NotesEditor
                note={this._getNoteById()}
                handleChange={this._setEditorText} 
                text={this.state.editorText}
                />
            </div>
        )
    }

    // helper functions (methods that mofidy state) always are in the same 
    // class as where state is defined 
    _setSearchText = (searchText) => {
        // first argument is an object, second is a callback function/anonymous
        // function 
        this.setState({
            searchText
        }, () => {
            console.log('updated search text')
        });
    }

    _setEditorText = (editorText) => {
        this.setState({
            editorText
        }, () => {
            console.log('updated editor text')
        });
    }

    // helper function that is going to modify state
    _selectNote = (currentNoteId) => {
        this.setState({
            currentNoteId
        }, () => {
            console.log('updated current id')
        });
    }

    _getNoteById = () => {
        const theNote = this.state.notes.find(note => note.id === this.state.currentNoteId)  || {};
        return theNote;
        // or 
        // return this.state.notes.find(note => note.id === this.state.currentNoteId)
    }

    // helper function for filtering, search as you type
    _getFilteredNotes = () => {
        // pass a function that knows how to look at one item at a time (filter) 
        // it handles off control to the helpe function 
        const filteredArray = this.state.notes.filter(note => {
            // includes will looks into note.title and note.copy
            const titleDoesMatch = note.title.includes(this.state.searchText);
            const copyDoesMatch = note.copy.includes(this.state.searchText);

            return titleDoesMatch || copyDoesMatch;
        });

        return filteredArray;
    }

   


}
