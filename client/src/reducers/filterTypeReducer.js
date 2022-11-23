
const filterTypeReducer = (state = [], action) => {
    switch(action.type) {
        case 'SET_FILTER_TYPE':
            return state = action.payload;
        default:
            return state
    }
}

export default filterTypeReducer;