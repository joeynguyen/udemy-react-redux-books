// 'state' argument is not entire application state, only
// the state this reducer is responsible for
// Redux doesn't allow us to return 'undefined' from a reducer
// so we set state to default as 'null'
export default function(state = null, action) {
    switch(action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
        default:
            return state;
    }
}
