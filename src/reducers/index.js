import { combineReducers } from 'redux';
import BooksReducer from './BooksReducer.js';

const rootReducer = combineReducers({
    books: BooksReducer
});

export default rootReducer;
