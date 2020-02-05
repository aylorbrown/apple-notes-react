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
                    copy: 'Sardines'
                }, 
                {
                    id: 'a12b90', 
                    title: "Ikea List", 
                    copy: 'Coffee Table'
                }, 
                {
                    id: 'a12b42', 
                    title: "Home Depot List", 
                    copy: 'Industrial Dish Soap'
                }, 
            ]
        };
    }
    render() {
        return (
            <div>
                <h1>My notes APP!</h1>
                <NewNote />
                <SearchBar 
                handleChange={this._setSearchText}
                text={this.state.searchText}/>
                <NotesList 
                // pass result of calling the function! aka add parens
                notes={this._getFilteredNotes()}
                handleClick={this._selectNote}
                />
                <NotesEditor />
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

    // helper function that is going to modify state
    _selectNote = (currentNoteId) => {
        this.setState({
            currentNoteId
        }, () => {
            console.log('updated current id')
        });
    }

    // helper function for filtering 
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

