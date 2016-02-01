import React, { Component } from 'react';
import BookList from '../containers/BookList.js'
import ActiveBookContainer from '../containers/ActiveBookContainer.js'

export default class App extends Component {
    render() {
        return (
            <div>
                <BookList />
                <ActiveBookContainer />
            </div>
        );
    }
}
