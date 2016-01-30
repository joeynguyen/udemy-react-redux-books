import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map(book =>
            <li key={book.title} className="list-group-item">{book.title}</li>
        );
    }
    render() {
        return <ul className="list-group col-sm-4">
            {this.renderList()}
        </ul>
    }
}

function mapStateToProps(state) {
    // Whatever is returned will show up as props
    // inside BookList
    return {
        // state comes from the <Provider>'s 'store' property in index.js
        books: state.books
    };
}

// 'connects' takes a Function and a Component and produces a Container, a
// component that is aware of the state that's contained by Redux
export default connect(mapStateToProps)(BookList);
