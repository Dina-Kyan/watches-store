

const searchValueReducer = (state = '', action) => {
    switch(action.type) {
        case 'SET_SEARCH_VALUE':
            return state = action.payload;
        default:
            return state
    }
}

export default searchValueReducer;