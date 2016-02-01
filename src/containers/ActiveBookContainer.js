import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index.js';
import { bindActionCreators } from 'redux';

class ActiveBookContainer extends Component {
    render() {
        // on initial load, when a book hasn't been selected yet
        if (!this.props.book) {
            return <div>Select a book to get started!</div>;
        }
        return (
            <div>
                <h3>Details for:</h3>
                <div>Title: {this.props.book.title}</div>
                <div>Pages: {this.props.book.pages}</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        book: state.activeBook
    };
}

export default connect(mapStateToProps)(ActiveBookContainer);
