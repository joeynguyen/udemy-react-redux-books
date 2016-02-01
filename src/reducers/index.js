import { combineReducers } from 'redux';
import BooksReducer from './BooksReducer.js';
import ActiveBookReducer from './ActiveBookReducer.js';

const rootReducer = combineReducers({
    books: BooksReducer,
    activeBook: ActiveBookReducer
});

export default rootReducer;
