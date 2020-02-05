import React from 'react';
import NewNote from './NewNote';
import NotesList from './NotesList';
import NotesEditor from './NotesEditor'
import SearchBar from './SearchBar';


export default class NotesApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: 'This is the search text'
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
                <NotesList />
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


}

