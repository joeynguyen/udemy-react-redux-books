export function selectBook(book) {
    // selectBook is an ActionCreator which needs to return an
    // action, an object with a type property (which describes
    // the purpose of the action)
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}
