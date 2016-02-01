import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index.js';
import { bindActionCreators } from 'redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map(book =>
            <li
                key={book.title}
                className="list-group-item"
                onClick={() => this.props.doSelectBook(book)}
            >
                {book.title}
            </li>
        );
    }
    render() {
        return <ul className="list-group col-sm-4">
            {this.renderList()}
        </ul>
    }
}

// Anything returned from this function will end up as props
// on the BookList container
function mapStateToProps(state) {
    return {
        // state comes from the <Provider>'s 'store' property in index.js
        books: state.books
    };
}

function mapDispatchToProps(dispatch) {
    // Whenever selectBook is called, the result should
    // be passed to all of our reducers
    return bindActionCreators({ doSelectBook: selectBook }, dispatch);
}

// Promote BookList from a Component to a Container, a
// component that is aware of the state that's contained by Redux
// 'connect' takes a Function and a Component and produces a Container
// arguments are passed into the Container as props(?)
// https://github.com/rackt/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
